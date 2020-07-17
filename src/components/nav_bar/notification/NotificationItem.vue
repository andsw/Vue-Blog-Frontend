<template>
  <li>
    <a rel="nofollow" href="#" class="dropdown-item">
      <div class="notification">
        <div class="notification-content">
          <i :class="notificationImgClass"></i>{{notificationContent}}
        </div>
        <div class="notification-time">
          <small>{{relativeTime}}</small>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
    import NotificationType from './NotificationType';
    export default {
        name: "Notification",
        props: {
            type: String,
            time: String,
            num: Number
        },
        computed: {
            notificationImgClass() {
                if (this.type === NotificationType.COMMENT) {
                    // 评论
                    return "fa fa-envelope bg-green";
                } else if (this.type === NotificationType.FOLLOWER) {
                    // 关注
                    return "fa fa-twitter bg-blue";
                } else if (this.type === NotificationType.SERVER) {
                    // 系统消息
                    return "fa fa-server bg-orange";
                } else if (this.type === NotificationType.LIKE) {
                    // 喜欢/赞
                    return "fa fa-heart bg-red";
                } else {
                    // 未知消息类型
                    return "fa fa-question bg-secondary";
                }
            },
            notificationContent() {
                return 'you heave ' + this.num + " new " + this.type + (this.type === "server" ? " message" : "");
            },
            relativeTime() {
                return this.time;
            }
        }
    }
</script>

<style scoped>

</style>