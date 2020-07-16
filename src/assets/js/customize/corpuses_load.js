$(function () {
    //加载基本信息逻辑
    let userId = getUrlParam("userId");
    if (userId == null) {
        userId = $.cookie("userId");
        if (userId == null) {
            redirectTo(LOGIN_PATH, ToastLevel.INFO, "未登录，无法进入个人主页！跳转登录...");
            return;
        }
    }
    loadBasicUserInfo(userId);

    loadCorpus(userId);
});

function loadCorpus(userId) {
    request('/user/' + userId + "/corpus", 'get', null, true,
            function (result) {
                if (result.code === 200) {
                    const corpusList = result.data;
                    let page = 0;
                    for (let i = 0; i < corpusList.length;) {
                        let corpusHtml = '<div style="height: inherit" class="carousel-item ' + (i === 0 ? 'active' : '') + '">'
                                         + '<div class="corpus_row container-fluid row align-content-center align-items-center">';
                        let tempC = 0;
                        for (let j = i; j < corpusList.length && tempC < 4; j++) {
                            corpusHtml += '<div class="col-md-3 col-sm-6">'
                                          + '<img class="corpus_img" src="img/folder.png" alt="">\n'
                                          + '<i style="position: absolute; bottom: 38%; right: 40%;" class="fa fa-bars text-white corpus_bar" data-toggle="dropdown"'
                                          + ' data-target="#corpus_operation_menu"></i>'
                                          + '<p class="text-center">' + corpusList[j].name + '(' + corpusList[j].blogNum + ')' + '</p>'
                                          + '</div>\n';
                            tempC++;
                        }
                        i += tempC;
                        if (i === corpusList.length) {
                            corpusHtml += '</div>';
                        } else {
                            corpusHtml += '</div><div class="corpus_row container-fluid row align-content-center align-items-center">';
                            tempC = 0;
                            for (let j = i; j < corpusList.length && tempC < 4; j++) {
                                corpusHtml +=
                                    '<div class="col-md-3 col-sm-6"><img class="corpus_img" src="img/folder.png" alt=""><i style="position: absolute; bottom: 38%; right: 40%;" class="fa fa-bars text-white corpus_bar" data-toggle="dropdown"'
                                    + ' data-target="#corpus_operation_menu"></i><p class="text-center">' + corpusList[j].name + '(' + corpusList[j].blogNum + ')' + '</p></div>\n';
                                tempC++;
                            }
                            corpusHtml += '</div>';
                        }
                        i += tempC;
                        corpusHtml += '</div>';
                        $("#corpus_div").append(corpusHtml);
                        $("#corpus_page_indicator").append('<li data-target="#corpus_carousel" data-slide-to="' + page + '" ' + (page === 0 ? 'class="active"' : '') + '></li>');
                        page++;
                    }
                } else {
                    toastr.error("文集加载错误！" + result.message);
                }
            }, function () {
            toastr.error("发生未知错误！");
        });

}