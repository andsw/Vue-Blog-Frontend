<template>
  <div id="app">
    <div class="page">
      <!-- 主导航栏 -->
      <nav-bar></nav-bar>

      <div class="page-content d-flex align-items-stretch">
        <!-- 侧边栏 -->
        <nav class="side-navbar">
          <!-- 侧边栏 头部-->
          <side-header/>
          <!-- 侧边栏菜单部分-->
          <side-menu :menu="menu"/>
        </nav>

        <div class="content-inner">
          <!-- 内容标题栏-->
<!--          <header class="page-header">-->
<!--            <div class="container-fluid">-->
<!--              <h2 class="no-margin-bottom">{{pageNameFirstUpper}}</h2>-->
<!--            </div>-->
<!--          </header>-->

          <!--路由内容显示栏-->
          <keep-alive>
            <router-view/>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import '@assets/vendor/jquery.cookie/jquery.cookie'
    import '@assets/js/front.js';
    import SideMenu from "@components/side_menu/SideMenu";
    import SideHeader from "@components/side_menu/SideHeader";
    import Home from "@views/home/Home";
    import NavBar from "@components/nav_bar/NavBar";
    import toastr from "@assets/js/toastr.min";

    toastr.option = {
        closeButton: true,
        showDuration: 1000
    }

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
            SideHeader,
            NavBar
        }
    };
</script>

<style>
  @import url('https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css');
  @import 'assets/vendor/font-awesome/css/font-awesome.min.css';
  @import "assets/css/fontastic.css";
  @import "assets/css/style.default.css";
  @import "assets/css/custom.css";
  @import "assets/css/toastr.min.css";
</style>
