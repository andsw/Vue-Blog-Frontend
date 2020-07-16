$(function () {
    let userId = getUrlParam("userId");
    if (userId == null) {
        userId = $.cookie("userId");
        if (userId == null) {
            redirectTo(LOGIN_PATH, ToastLevel.INFO, "未登录，无法进入个人主页！跳转登录...");
            return;
        }
    }
    loadBasicUserInfo(userId);
    loadFans(userId);

});

function loadFans(userId) {
    request("/user/" + userId + "/fans", "get", null, true, function (result) {
        if (result.code === 200) {
            $.each(result.data, function (index, value) {
                $("#fans_list").append('<div href="#" class="row fan_item">\n'
                                       + '              <div class="ib"><img src="'+ value.avatar +'" alt="..." class="img-fluid rounded-circle fan_avatar" onclick="redirectHomePage(' + value.id + ')"></div>\n'
                                       + '              <div class="align-middle col-9 fan_info" onclick="redirectHomePage(' + value.id + ')">\n'
                                       + '                <!--mars-->\n'
                                       + '                <h3 class="list-group-item-heading ib">'+ value.username +'</h3><i class="fa '+ (value.gender?'fa-venus text-red':'fa-mars text-blue') +'"'
                                                                                                                                                       + ' style="margin-left: 10px"></i>\n'
                                       + '                <p class="list-group-item-text text-gray">' + value.personMsg + '</p>\n'
                                       + '              </div>\n'
                                       // + '              <button class="btn-primary float-right font-weight-bold border-info bg-white sub_btn">取消关注\n'
                                       // + '              </button>\n'
                                       + '            </div>\n'
                                       + '            <HR style="FILTER: alpha(opacity=100,finishopacity=0,style=3); width: 95%; color:#987cb9;">');
            });
        } else {
            Toastr.error("加载粉丝发生异常：" + result.message);
        }
    }, function () {
        Toastr.error("加载粉丝发生未知异常！");
    });
}