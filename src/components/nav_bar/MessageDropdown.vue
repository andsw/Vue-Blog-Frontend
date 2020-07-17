<template>
  <li class="nav-item dropdown"><a id="messages" rel="nofollow" data-target="#" href="#"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                   class="nav-link"><i
      class="fa fa-envelope-o"></i><span class="badge bg-orange badge-corner">10</span></a>
    <ul aria-labelledby="notifications" class="dropdown-menu">
      <li>
        <a rel="nofollow" href="#" class="dropdown-item d-flex">
          <div class="msg-profile">
            <img src="../../assets/img/avatar-1.jpg" alt="..."
                 class="img-fluid rounded-circle">
          </div>
          <div class="msg-body">
            <h3 class="h5">Jason Doe</h3>
            <span>Sent You Message</span>
          </div>
        </a>
      </li>
      <li>
        <a rel="nofollow" href="#" class="dropdown-item d-flex">
          <div class="msg-profile">
            <img src="../../assets/img/avatar-2.jpg" alt="..."
                 class="img-fluid rounded-circle">
          </div>
          <div class="msg-body">
            <h3 class="h5">Frank Williams</h3>
            <span>Sent You Message</span>
          </div>
        </a>
      </li>
      <li><a rel="nofollow" href="#" class="dropdown-item d-flex">
        <div class="msg-profile">
          <img src="../../assets/img/avatar-3.jpg" alt="..."
               class="img-fluid rounded-circle">
        </div>
        <div class="msg-body">
          <h3 class="h5">Ashley Wood</h3>
          <span>Sent You Message</span>
        </div>
      </a></li>
      <li>
        <a rel="nofollow" href="#" class="dropdown-item all-notifications text-center">
          <strong>Read all messages </strong>
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
    export default {
        name: "MessageDropdown"
    }
</script>

<style scoped>

</style>