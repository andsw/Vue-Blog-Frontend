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

    loadFavorites(userId);
});

function loadFavorites(userId) {
    request('/user/' + userId + "/favorites", 'get', null, true,
            function (result) {
                if (result.code === 200) {
                    const favoritesList = result.data;
                    let page = 0;
                    for (let i = 0; i < favoritesList.length;) {
                        let favoritesHtml = '<div style="height: inherit" class="carousel-item ' + (i === 0 ? 'active' : '') + '">'
                                         + '<div class="favorites_row container-fluid row align-content-center align-items-center">';
                        let tempC = 0;
                        for (let j = i; j < favoritesList.length && tempC < 4; j++) {
                            favoritesHtml += '<div class="col-md-3 col-sm-6">'
                                          + '<img class="favorites_img" src="img/folder.png" style="cursor: pointer" alt="">\n'
                                          + '<i style="position: absolute; bottom: 38%; right: 40%;" class="fa fa-bars text-white favorites_bar" data-toggle="dropdown"'
                                          + ' data-target="#favorites_operation_menu"></i>'
                                          + '<p class="text-center">' + favoritesList[j].name + '(' + favoritesList[j].blogNum + ')' + '</p>'
                                          + '</div>\n';
                            tempC++;
                        }
                        i += tempC;
                        if (i === favoritesList.length) {
                            favoritesHtml += '</div>';
                        } else {
                            favoritesHtml += '</div><div class="favorites_row container-fluid row align-content-center align-items-center">';
                            tempC = 0;
                            for (let j = i; j < favoritesList.length && tempC < 4; j++) {
                                favoritesHtml +=
                                    '<div class="col-md-3 col-sm-6"><img class="favorites_img" src="img/folder.png" alt="" style="cursor: pointer"><i style="position: absolute; bottom: 38%; right:'
                                    + ' 40%;"'
                                    + ' class="fa'
                                    + ' fa-bars text-white favorites_bar" data-toggle="dropdown"'
                                    + ' data-target="#favorites_operation_menu"></i><p class="text-center">' + favoritesList[j].name + '(' + favoritesList[j].blogNum + ')' + '</p></div>\n';
                                tempC++;
                            }
                            favoritesHtml += '</div>';
                        }
                        i += tempC;
                        favoritesHtml += '</div>';
                        $("#favorites_div").append(favoritesHtml);
                        $("#favorites_page_indicator").append('<li data-target="#favorites_carousel" data-slide-to="' + page + '" ' + (page === 0 ? 'class="active"' : '') + '></li>');
                        page++;
                    }
                } else {
                    toastr.error("文集加载错误！" + result.message);
                }
            }, function () {
            toastr.error("发生未知错误！");
        });

}