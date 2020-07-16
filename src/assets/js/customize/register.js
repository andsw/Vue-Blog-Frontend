$(function () {
    // customize
    $("#register-agree").change(function () {
        $("#register").toggleClass("disabled");
    });

    $("#register").click(function () {
        const registerData = {};
        registerData["username"] = $("#register-username").val();
        registerData["email"] = $("#register-email").val();
        registerData["password"] = $("#register-password").val();
        request("/register", "post", JSON.stringify(registerData), false, function (result) {
            if (result.code === 302) {
                // 注册成功，跳转页面
                window.location.href = result.redirectUrl;
            } else if (result.code === 208) {
                // 显示错误信息
                $("#register-exception").text(result.message);
            }
        }, function () {
            alert("请求超时");
        });
    });
});