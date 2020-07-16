const HOST = 'http://localhost:8080';
// 用户个人主页
USER_HOMEPAGE_PATH = '/index.html';
//博客系统主页
HOMEPAGE_PATH = '/home.html';
// 登录页面
LOGIN_PATH = '/login.html';
// 注册
REGISTER_PATH = '/register.html';
const ToastLevel = {
    ERROR: 1,
    WARN: 2,
    INFO: 3,
};


function request(path, method, data, async, successMethod, failureMethod) {
    $.ajax({
        url: HOST + path,
        method: method,
        data: data,
        type: 'json',
        contentType: 'application/json;charset=UTF-8',
        async: async,
        success: successMethod,
        error: failureMethod
    })
}

function redirectTo(redirectUrl, toastLevel, message = "", timeout = 2000) {
    if (message === "") {
        window.location.href = redirectUrl;
    } else {
        if (toastLevel === ToastLevel.ERROR) {
            toastr.error(message);
        } else if (toastLevel === ToastLevel.WARN) {
            toastr.warn(message);
        } else if (toastLevel === ToastLevel.INFO) {
            toastr.info(message);
        } else {
            toastr.text(message);
        }
        setTimeout(function () {
            window.location.href = redirectUrl;
        }, timeout);
    }
}

function getUrlParam(name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    const r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

/**
 * 加载侧边栏信息，目前只有 头像 邮箱 用户名
 * 除了主页其他页面都可以调用！
 * 有一个参数是为了方便页面调用方法前以及获取过userId，就不用再在此方法中再次获取！
 */
function loadBasicUserInfo(userId) {
    if (userId == null) {
        userId = getUrlParam("userId");
        if (userId == null) {
            userId = $.cookie("userId");
            if (userId == null) {
                redirectTo(LOGIN_PATH, ToastLevel.INFO, "未登录，无法进入个人主页！跳转登录...");
                return;
            }
        }
    }
    request("/user/basic/" + userId, 'get', null, true, function (result) {
        if (result.code === 200) {
            setSideMenuUserInfo(result.data.username, result.data.email, result.data.gender, result.data.avatar);
        } else {
            toastr.error("加载用户信息发生错误！" + result.message);
        }
        $(".data-loading").hide()
    }, function () {
        toastr.error("发生未知错误！");
    });
}

function setSideMenuUserInfo(username, email, gender, avatar) {
    const usernameComponent = $('#username');
    const emailComponent = $('#email');
    const avatarComponent = $('#avatar');
    if (gender) {
        usernameComponent.html(username + "<i class='gender fa fa-venus text-red'></i>");
    } else {
        usernameComponent.html(username + "<i class='gender fa fa-mars text-blue'></i>");
    }
    emailComponent.text(email);
    avatarComponent.html('<img id="avatar" src="' + avatar + '" alt="..." class="img-fluid rounded-circle">');
}

function redirectHomePage(userId) {
    redirectTo("/index.html?userId=" + userId);
}

function returnGenderImg(gender) {
    return gender ? "<i class='gender fa fa-venus' style='color: red'/>" : "<i class='gender fa fa-mars' style='color: blue'/>";
}
