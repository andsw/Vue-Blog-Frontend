<template>
  <header class="header">
    <nav class="navbar">
      <div class="container-fluid">
        <div class="navbar-holder d-flex align-items-center justify-content-between">
          <!-- Navbar Header-->
          <NavBarBrand :brand_name="this.$store.state.brandName"></NavBarBrand>

          <!-- Navbar Menu -->
          <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">

            <!-- Notifications-->
            <li class="nav-item dropdown"><a id="notifications" rel="nofollow" data-target="#" href="#"
                                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                             class="nav-link"><i
                class="fa fa-bell-o"></i><span class="badge bg-red badge-corner">12</span></a>
              <ul aria-labelledby="notifications" class="dropdown-menu">
                <li><a rel="nofollow" href="#" class="dropdown-item">
                  <div class="notification">
                    <div class="notification-content"><i class="fa fa-envelope bg-green"></i>You have 6 new messages
                    </div>
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
                <li><a rel="nofollow" href="#" class="dropdown-item all-notifications text-center"> <strong>view all
                  notifications </strong></a></li>
              </ul>
            </li>
            <!-- Messages -->
            <li class="nav-item dropdown"><a id="messages" rel="nofollow" data-target="#" href="#"
                                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                             class="nav-link"><i
                class="fa fa-envelope-o"></i><span class="badge bg-orange badge-corner">10</span></a>
              <ul aria-labelledby="notifications" class="dropdown-menu">
                <li><a rel="nofollow" href="#" class="dropdown-item d-flex">
                  <div class="msg-profile"><img src="../../assets/img/avatar-1.jpg" alt="..."
                                                class="img-fluid rounded-circle"></div>
                  <div class="msg-body">
                    <h3 class="h5">Jason Doe</h3><span>Sent You Message</span>
                  </div>
                </a></li>
                <li><a rel="nofollow" href="#" class="dropdown-item d-flex">
                  <div class="msg-profile"><img src="../../assets/img/avatar-2.jpg" alt="..."
                                                class="img-fluid rounded-circle"></div>
                  <div class="msg-body">
                    <h3 class="h5">Frank Williams</h3><span>Sent You Message</span>
                  </div>
                </a></li>
                <li><a rel="nofollow" href="#" class="dropdown-item d-flex">
                  <div class="msg-profile"><img src="../../assets/img/avatar-3.jpg" alt="..."
                                                class="img-fluid rounded-circle"></div>
                  <div class="msg-body">
                    <h3 class="h5">Ashley Wood</h3><span>Sent You Message</span>
                  </div>
                </a></li>
                <li><a rel="nofollow" href="#" class="dropdown-item all-notifications text-center"> <strong>Read all
                  messages </strong></a></li>
              </ul>
            </li>
            <li class="nav-item"><a href="" class="nav-link" target="_blank"> <span
                class="d-none d-sm-inline" style="margin-right: 7px">写博客</span><i class="fa fa-edit"></i></a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  import NavBarBrand from "./NavBarBrand";
    export default {
        name: "NavBar",
        data() {

        },
        components: {
            NavBarBrand
        }
    }
</script>

<style scoped>

</style>