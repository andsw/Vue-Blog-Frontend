<template>
  <li>
    <a rel="nofollow" href="#" class="dropdown-item d-flex">
      <div class="msg-profile">
        <img :src="avatar" alt="" class="img-fluid rounded-circle">
      </div>
      <div class="msg-body">
        <h3 class="h5">{{username}}</h3>
        <span>Sent You Message</span>
      </div>
    </a>
  </li>
</template>

<script>
    export default {
        name: "MessageItem",
        props: {
            avatar: String,
            username: String
        }
    }
</script>

<style scoped>

</style>