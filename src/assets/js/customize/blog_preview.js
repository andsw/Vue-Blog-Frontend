var testEditor;
$(function () {
    const blogId = getUrlParam("blogId");
    if (blogId != null) {
        request("/blog/" + blogId, 'get', null, false,
                function (result) {
                    console.log(result);
                    if (result.code === 200) {
                        const blogInfo = result.data.blog;
                        $("title")[0].text = blogInfo.title;
                        $("#blog_title").append(blogInfo.title);
                        $("#blog_content").val(result.data.content);
                        $("#comment_num").append(blogInfo.commentNum);
                        $("#love_num").append(result.data.loveNum);
                        $("#read_num").append(blogInfo.readNum);
                        $("#collect_num").append(result.data.collectNum);
                        $("#word_num").append(blogInfo.wordNum);

                        $("#author_info_a").attr("href", "/index.html?userId=" + blogInfo.userId);
                        $("#author_username").text(result.data.username);
                        $("#author_avatar").attr("src", result.data.avatar);
                        $("#author_info_a").append(returnGenderImg(result.data.gender));
                        $("#comment_iframe").attr('src', './comment_static/index.html?blogId=' + blogId + "&commentNum=" + blogInfo.commentNum);
                    } else {
                        toastr.error(result.message);
                    }
                }, function () {
                toastr.error("获取文章发生未知错误！");
            });
    } else {
        toastr.warn("没有指定文章！");
    }
    testEditor = editormd.markdownToHTML("doc-content", {//注意：这里是上面DIV的id
        width: "100%",
        height: 900,
        htmlDecode: "style,script,iframe",
        emoji: true,
        taskList: true,
        tex: true, // 默认不解析
        flowChart: true, // 默认不解析
        sequenceDiagram: true, // 默认不解析
        codeFold: true,

        // 设置主题
        theme: "dark",
        editorTheme: "pastel-on-dark",
        previewTheme: "dark"
    });
});