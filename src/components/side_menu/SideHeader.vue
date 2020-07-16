<template>
  <div>
    <div class="sidebar-header d-flex align-items-center">
      <div class="avatar">
        <img id="avatar" :src="avatar" alt="..." class="img-fluid rounded-circle" v-show="avatar!==''">
      </div>
      <div class="title">
        <h1 class="h4" id="username" style="display: inline-block">
          {{username}}
          <i class='gender fa fa-venus text-red' v-if="gender==='女'"></i>
          <i class='gender fa fa-mars text-blue' v-if="gender==='男'"></i>
        </h1>
        <p id="email">{{email}}</p>
      </div>
      <div class="spinner-border data-loading" role="status" v-if="username===''">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SideHeader",
        computed: {
            username() {
                return this.$store.state.username;
            },
            avatar() {
                return this.$store.state.avatar;
            },
            gender() {
                return this.$store.state.gender;
            },
            email() {
                return this.$store.state.email;
            }
        }
    }
</script>

<style scoped>

</style>