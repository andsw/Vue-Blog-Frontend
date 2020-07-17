<template>
  <li class="nav-item dropdown">

    <!--  消息按钮  -->
    <a id="notifications" rel="nofollow" data-target="#" href="#"
       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
       class="nav-link">
      <i class="fa fa-bell-o"></i>
      <!--   消息数量   -->
      <span v-show="notifications.length !== 0" class="badge bg-red badge-corner">{{notificationNum}}</span>
    </a>

    <!--  消息列表  -->
    <ul aria-labelledby="notifications" class="dropdown-menu">
      <notification-item v-for="(n, index) in notifications" :key="index" :type="n.type" :num="n.num" :time="n.time"></notification-item>
      <!--   视情况显示”忽略消息“还是“暂无消息”   -->
      <li>
        <a @click="IgnoreAllNotification" rel="nofollow" href="#" class="dropdown-item all-notifications text-center">
          <strong>{{notificationButtonMsg}}</strong>
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
    import toastr from 'toastr';
    import NotificationType from './NotificationType';
    import NotificationItem from "./NotificationItem";
    export default {
        name: "NotificationsDropdown",
        data() {
            return {
                notifications: [
                    {
                        type: NotificationType.COMMENT,
                        num: 7,
                        time: "2020.7.17 17:37"
                    },
                    {
                        type: NotificationType.FOLLOWER,
                        num: 6,
                        time: "2020.7.17 17:20"
                    },
                    {
                        type: NotificationType.SERVER,
                        num: 2,
                        time: "2020.7.17 17:10"
                    },
                    {
                        type: NotificationType.LIKE,
                        num: 12,
                        time: "2020.7.17 16:39"
                    },
                    {
                        type: NotificationType.UNKNOWN,
                        num: 3,
                        time: "2020.7.17 14:10"
                    }
                ]
            }
        },
        computed: {
            notificationNum() {
                if (this.notifications === undefined || this.notifications.length === 0) {
                    return 0;
                }
                return this.notifications.map(n => n.num).reduce((x, y) => x + y);
            },
            notificationButtonMsg() {
                return this.notifications.length === 0 ? "暂无消息" : "忽略全部";
            }
        },
        methods: {
            IgnoreAllNotification() {
                let temp = this.notifications;
                if (temp.length !== 0) {
                    do {
                        temp.pop();
                    } while (temp.length !== 0)
                    toastr.success("所有消息已读！");
                }
            }
        },
        components: {
            NotificationItem
        }
    }
</script>

<style scoped>

</style>