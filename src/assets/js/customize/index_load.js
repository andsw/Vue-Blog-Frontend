$(function () {
    const locationUrl = window.location.href;
    // 三种情况：未登录，别人的，自己的
    // 1. 获取url后面的参数userId
    // 2. 获取url后面的参数userId
    // 3. 没有url参数，就获取cookie的userId
    let userId = getUrlParam("userId");
    if (userId == null) {
        userId = $.cookie("userId");
        if (userId == null) {
            redirectTo(LOGIN_PATH, ToastLevel.INFO, "未登录，无法进入个人主页！跳转登录...");
            return;
        }
    }

    //user信息
    let sumBlogNum = 0;
    // 默认top 4 hottest blog
    let blog_num = 4;
    // 加载用户数据信息
    request("/home/user/" + userId, "get", null, false, function (result) {
        if (result.code === 200) {
            let userInfo = result.data.user;

            setSideMenuUserInfo(userInfo.username, userInfo.email, userInfo.gender, userInfo.avatar);

            $("#blogNum").text(result.data.blogNum);
            $("#corpusNum").text(result.data.corpusNum);
            $("#wordNum").text(result.data.wordNum);
            $("#fanNum").text(result.data.fanNum);
            $("#subscriptionNum").text(result.data.subNum);

            $("#readNum").text(result.data.readNum);
            $("#collectionNum").text(result.data.collectionNum);
            $("#likeNum").text(result.data.loveNum);

            sumBlogNum = result.data.blogNum;
            // 只有当async为false的时候才能修改外部变量
        } else if (result.code === 302) {
            toastr.info(result.message);
            setTimeout(function () {
                //登录成功跳转回原页面
                redirectTo(result.redirectUrl + "?redirectUrl=" + locationUrl);
            }, 2000);
        } else {
            toastr.error("获取用户信息发生错误！");
        }
        $(".data-loading").hide()
    }, function () {
        toastr.error('error')
    });

    // userInfo加载成功
    if (sumBlogNum > 0) {
        request("/home/blog/" + userId + "?blogNum=" + blog_num, "get", null, true, function (result) {
            if (result.code === 200) {
                console.log(result.data);

                const data = result.data;

                if (data.length === 0) {
                    noBlog()
                } else {
                    $("#hottest-blog-loading").hide();
                    $(data).each(function (index, blog) {
                        $("#hottest_blogs_div").append(
                            "<div class=\"project\">\n"
                            + "  <div class=\"row bg-white has-shadow\">\n"
                            + "    <div class=\"left-col col-lg-9 d-flex align-items-center justify-content-between\">\n"
                            + "      <div class=\"project-title d-flex align-items-center\">\n"
                            + "        <div class=\"image has-shadow\"><img src=\"img/project-2.jpg\" alt=\"...\" class=\"img-fluid\"></div>\n"
                            + "         <div class=\"text\">\n"
                            + "           <a class=\"h5\" href='#'>" + blog.title + "</a>\n"
                            + "           <div class=\"time\"><i class=\"fa fa-clock-o\"></i>" + blog.releaseTime + "</div>\n"
                            + "         </div>\n"
                            + "       </div>\n"
                            + "     </div>\n"
                            + "     <div class=\"right-col col-lg-3 d-flex align-items-center\">\n"
                            + "       <div class=\"comments\"><i class=\"fa fa-comment-o\"></i>" + blog.commentNum + "</div>\n"
                            + "       <div class=\"read\"><i class=\"fa fa-eye\"></i>" + blog.readNum + "</div>\n"
                            + "       <div class=\"like\"><i class=\"fa fa-thumbs-up\"></i>" + blog.loveNum + "</div>\n"
                            + "     </div>\n"
                            + "  </div>\n"
                            + "</div>"
                        )
                    });
                }
            } else if (result.code === 302) {
                toastr.info("正在跳转...")
            } else {
                toastr.error("获取热门文章发生错误！")
            }
            $(".data-loading").hide()
        }, function () {
            alert('请求超时')
        });
    } else {noBlog()}
});

function noBlog() {
    $("#hottest_blogs_div").html("<h4 class=\"text-gray\">热门博客：</h4>"
                                 + "<div class=\"bg-white col-12\" style=\"height: 93%\">\n"
                                 + "  <img src=\"img/customize/nothing_return.jpg\"\n"
                                 + "       alt=\"还没有博客哦，快来发表吧！\"\n"
                                 + "       class=\"offset-sm-3\">\n"
                                 + "</div>")
}