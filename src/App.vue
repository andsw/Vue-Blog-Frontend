<template>
  <div id="app">
    <div class="page">
      <!-- 主导航栏 -->
      <header class="header">
        <nav class="navbar">
          <div class="container-fluid">
            <div class="navbar-holder d-flex align-items-center justify-content-between">
              <!-- Navbar Header-->
              <div class="navbar-header">
                <!-- Navbar Brand --><a href="index.html" class="navbar-brand d-none d-sm-inline-block">
                <div class="brand-text d-none d-lg-inline-block"><span>WeiKe Blog </span><strong> Homepage</strong></div>
                <div class="brand-text d-none d-sm-inline-block d-lg-none"><strong>BD</strong></div>
              </a>
                <!-- Toggle Button--><a id="toggle-btn" href="" class="menu-btn active"><span></span><span></span><span></span></a>
              </div>
              <!-- Navbar Menu -->
              <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                <!-- Notifications-->
                <li class="nav-item dropdown"><a id="notifications" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link"><i
                    class="fa fa-bell-o"></i><span class="badge bg-red badge-corner">12</span></a>
                  <ul aria-labelledby="notifications" class="dropdown-menu">
                    <li><a rel="nofollow" href="#" class="dropdown-item">
                      <div class="notification">
                        <div class="notification-content"><i class="fa fa-envelope bg-green"></i>You have 6 new messages</div>
                        <div class="notification-time"><small>4 minutes ago</small></div>
                      </div>
                    </a></li>
                    <li><a rel="nofollow" href="#" class="dropdown-item">
                      <div class="notification">
                        <div class="notification-content"><i class="fa fa-twitter bg-blue"></i>You have 2 followers</div>
                        <div class="notification-time"><small>4 minutes ago</small></div>
                      </div>
                    </a></li>
                    <li><a rel="nofollow" href="#" class="dropdown-item">
                      <div class="notification">
                        <div class="notification-content"><i class="fa fa-upload bg-orange"></i>Server Rebooted</div>
                        <div class="notification-time"><small>4 minutes ago</small></div>
                      </div>
                    </a></li>
                    <li><a rel="nofollow" href="#" class="dropdown-item">
                      <div class="notification">
                        <div class="notification-content"><i class="fa fa-twitter bg-blue"></i>You have 2 followers</div>
                        <div class="notification-time"><small>10 minutes ago</small></div>
                      </div>
                    </a></li>
                    <li><a rel="nofollow" href="#" class="dropdown-item all-notifications text-center"> <strong>view all notifications </strong></a></li>
                  </ul>
                </li>
                <!-- Messages                        -->
                <li class="nav-item dropdown"><a id="messages" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link"><i
                    class="fa fa-envelope-o"></i><span class="badge bg-orange badge-corner">10</span></a>
                  <ul aria-labelledby="notifications" class="dropdown-menu">
                    <li><a rel="nofollow" href="#" class="dropdown-item d-flex">
                      <div class="msg-profile"><img src="assets/img/avatar-1.jpg" alt="..." class="img-fluid rounded-circle"></div>
                      <div class="msg-body">
                        <h3 class="h5">Jason Doe</h3><span>Sent You Message</span>
                      </div>
                    </a></li>
                    <li><a rel="nofollow" href="#" class="dropdown-item d-flex">
                      <div class="msg-profile"><img src="assets/img/avatar-2.jpg" alt="..." class="img-fluid rounded-circle"></div>
                      <div class="msg-body">
                        <h3 class="h5">Frank Williams</h3><span>Sent You Message</span>
                      </div>
                    </a></li>
                    <li><a rel="nofollow" href="#" class="dropdown-item d-flex">
                      <div class="msg-profile"><img src="assets/img/avatar-3.jpg" alt="..." class="img-fluid rounded-circle"></div>
                      <div class="msg-body">
                        <h3 class="h5">Ashley Wood</h3><span>Sent You Message</span>
                      </div>
                    </a></li>
                    <li><a rel="nofollow" href="#" class="dropdown-item all-notifications text-center"> <strong>Read all messages </strong></a></li>
                  </ul>
                </li>
                <!-- Languages dropdown    -->
                <!--                <li class="nav-item dropdown"><a id="languages" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link language dropdown-toggle"><img src="img/flags/16/GB.png" alt="English"><span class="d-none d-sm-inline-block">English</span></a>-->
                <!--                  <ul aria-labelledby="languages" class="dropdown-menu">-->
                <!--                    <li><a rel="nofollow" href="#" class="dropdown-item"> <img src="img/flags/16/DE.png" alt="English" class="mr-2">German</a></li>-->
                <!--                  </ul>-->
                <!--                </li>-->
                <!-- Logout    -->
                <li class="nav-item"><a href="blog_editor.html" class="nav-link" target="_blank"> <span class="d-none d-sm-inline" style="margin-right: 7px">写博客</span><i class="fa fa-edit"></i></a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div class="page-content d-flex align-items-stretch">
        <!-- 侧边栏 -->
        <nav class="side-navbar">
          <!-- 侧边栏 头部-->
          <side-header/>
          <!-- 侧边栏菜单部分-->
          <side-menu :menu="menu"/>
        </nav>

        <div class="content-inner">
          <!-- Page Header-->
          <header class="page-header">
            <div class="container-fluid">
              <h2 class="no-margin-bottom">{{pageNameFirstUpper}}</h2>
            </div>
          </header>

          <keep-alive>
            <router-view/>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import SideMenu from "./components/side_menu/SideMenu";
    import SideHeader from "./components/side_menu/SideHeader";
    import Home from "./views/home/Home";

    export default {
        name: "App",
        data() {
            return {
                menu: {
                    main: [
                        {
                            name: '主页',
                            iconName: 'icon-home',
                            path: '/home'
                        },
                        {
                            name: '博客',
                            iconName: 'fa fa-paper-plane-o',
                            path: '/blogs'
                        },
                        {
                            name: '文集',
                            iconName: 'fa fa-folder-o',
                            path: '/corpuses'
                        },
                        {
                            name: '我的收藏',
                            iconName: 'fa fa-bookmark-o',
                            path: '/collections'
                        },
                        {
                            name: '关注',
                            iconName: 'fa fa-star-o',
                            path: '/subscriptions'
                        },
                        {
                            name: '粉丝',
                            iconName: 'icon-user',
                            path: '/fans'
                        }
                    ],
                    extra: [
                        {
                            name: '帮助和反馈',
                            iconName: 'fa fa-calendar-minus-o',
                            path: '/help'
                        },
                        {
                            name: '设置',
                            iconName: 'fa fa-asterisk',
                            path: '/setting'
                        }
                    ]
                }
            }
        },
        computed: {
            sideItem() {
                return this.$route.path;
            },
            pageNameFirstUpper() {
                let name = this.sideItem;
                if (undefined === name) {
                    return 'Home';
                }
                return name.substr(1, 1).toUpperCase() + name.substr(2);
            }
        },
        components: {
            SideMenu,
            SideHeader
        }
    };
</script>

<style>
  @import url('https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css');
  @import 'assets/vendor/font-awesome/css/font-awesome.min.css';
  @import "assets/css/fontastic.css";
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,700');
  @import "assets/css/style.default.css";
  @import "assets/css/custom.css";
  @import url("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css");
</style>
