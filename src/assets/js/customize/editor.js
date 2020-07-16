let blogEditor;

$(function() {
    blogEditor = editormd("blog-editormd", {
        width   : "100%",
        height  : "100%",
        codeFold : false,
        syncScrolling : "single",
        // 关闭图片上传功能
        imageUpload: true,
        imageUploadURL : "./php/upload.php",

        emoji: true,
        taskList: true,
        // Using [TOCM]
        tocm: true,
        // 开启科学公式TeX语言支持，默认关闭
        tex: true,
        // 开启流程图支持，默认关闭
        flowChart: true,
        // 开启时序/序列图支持，默认关闭,
        sequenceDiagram: true,
        // 这个配置在simple.html中并没有，但是为了能够提交表单，使用这个配置
        // 可以让构造出来的HTML代码直接在第二个隐藏的textarea域中，方便post提交表单。
        saveHTMLToTextarea : true,

        // 设置主题, TODO： 前端设置编辑器主题
        // theme: "dark",
        // editorTheme: "pastel-on-dark",
        // previewTheme: "dark",

        // 编辑器全屏
        // onload: function () {
        //     this.fullscreen();
        // },

        onload: function() {
            // 加载成功后在toolbar上面加一个select可以否 style="display:inline-block;width:110px;overflow: hidden"
            $(".editormd-menu").append("<li>\n"
                                       + "<select id='corpus_selector' class='selectpicker text-black-50'>"
                                       + "</select></li>");
            //TODO:在下拉框选项或者旁边加入一个按钮可以添加文集！！！
            load_corpus();
        },

        onfullscreen : function() {
            toastr.info("ESC退出全屏");
            $(".header").hide();
            // console.log("onfullscreen =>", this, this.id, this.settings);
        },
        onfullscreenExit : function() {
            $(".header").show();
            // alert("onfullscreenExit");
            // console.log("onfullscreenExit =>", this, this.id, this.settings);
        },

        // 定制toolbar按钮
        toolbarIcons: function () {
            return ["undo", "redo", "|", "hr", "link", "reference-link", "image", "code", "preformatted-text", "code-block", "table", "datetime", "emoji", "|",
                    "watch", "preview", "fullscreen", "clear", "search"]
        }
    });
    $("#submit_blog").click(function (e) {
        e.preventDefault();
        let l = Ladda.create(this);

        const blogContent = blogEditor.getMarkdown();
        const title = $("#blog_title_input").val();
        const corpusId = $("#corpus_selector").val();

        if (title == null || title.trim() === "") {
            toastr.error("标题不能为空！");
            l.stop();
            return;
        }
        if (blogContent == null || blogContent.trim() === "") {
            toastr.error("内容不能为空！");
            l.stop();
            return;
        }
        if (corpusId == null) {
            toastr.error("未选择文章所属文集！");
            l.stop();
            return
        }

        // 按钮开始loading，表示正在上传文章
        l.start();

        let blogVo = {};
        blogVo["corpusId"] = parseInt(corpusId);
        blogVo["userId"] = parseInt($.cookie("userId"));
        blogVo["title"] = title;
        blogVo["content"] = blogContent;
        blogVo["wordNum"] = blogContent.length;
        console.log(blogVo);
        request("/blog", 'post',  JSON.stringify(blogVo), true,
                function (result) {
                    if (result.code === 200) {
                        toastr.success("保存成功！");
                    } else {
                        toastr.error(result.message);
                    }
                    //提交按钮停止loading
                    l.stop();
                }, function () {
                toastr.error("提交发生错误！");
                //提交按钮停止loading
                l.stop();
            });
        // TODO: 等文章预览页面写好了，这里直接跳转文章展示页面！
    });


});

//文集下拉框加载文集列表
function load_corpus() {
    const userId = $.cookie("userId");
    request('/simple/corpus?userId=' + userId, 'get', null, false,
            function (result) {
                const corpusSelector = $(".selectpicker");
                if (result.code === 200) {
                    corpusSelector.html("");
                    let option = '<option data-tokens=\'ketchup mustard\' selected disabled>选择加入的文集</option>';
                    $.each(result.data, function (idx, c) {
                        option += '<option value="' + c.id + '">' + c.name + '</option>';
                    });
                    console.log(option);
                    // corpusSelector.html(option);
                    // corpusSelector.selectpicker("refresh");
                    corpusSelector.html(option);
                    corpusSelector.selectpicker('refresh');
                } else {
                    corpusSelector.append('<option>corpus加载失败，请刷新</option>');
                    corpusSelector.selectpicker("refresh");
                }
            }, function () {
                $("#corpus_selector").html('<option>发生错误，请重试</option>')
                corpusSelector.selectpicker('refresh');
        });
}