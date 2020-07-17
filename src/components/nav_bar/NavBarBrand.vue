<template>
  <div class="navbar-header">
    <!-- Navbar Brand -->
    <router-link to="/home" class="navbar-brand d-none d-sm-inline-block">
      <div class="brand-text d-none d-lg-inline-block"><strong>{{brand_name}}</strong></div>
    </router-link>
    <!-- Toggle Button-->
    <a id="toggle-btn" href="" class="menu-btn active"><span></span><span></span><span></span></a>
  </div>
</template>

<script>
    export default {
        name: "NavBarBrand",
        props: ["brand_name"]
    }
</script>

<style scoped>

</style>