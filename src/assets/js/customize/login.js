$(function () {
    $("#login").click(function () {
        const loginData = {};
        loginData["username"] = $("#login-username").val();
        // loginData["email"] = $("#login-email").val();
        loginData["password"] = $("#login-password").val();
        request("/login", "post", JSON.stringify(loginData), false, function (result) {
            if (result.code === 200) {
                let redirectUrlAfterLogin = getUrlParam("redirectUrl");
                if (redirectUrlAfterLogin === null) {
                    redirectTo(USER_HOMEPAGE_PATH);
                } else {
                    redirectTo(redirectUrlAfterLogin);
                }
            } else if (result.code === 302) {
                redirectTo(result.redirectUrl, "登录成功");
            } else {
                $("#login-exception").text(result.message);
            }
        }, function () {
            alert("请求超时");
        });
    });

});