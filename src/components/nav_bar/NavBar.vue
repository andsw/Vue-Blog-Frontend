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
            <notifications-dropdown></notifications-dropdown>

            <!-- Messages -->
            <message-dropdown></message-dropdown>

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
    import NotificationsDropdown from "./notification/NotificationsDropdown";
    import MessageDropdown from "./message/MessageDropdown";

    export default {
        name: "NavBar",
        components: {
            NavBarBrand,
            NotificationsDropdown,
            MessageDropdown
        }
    }
</script>

<style scoped>

</style>