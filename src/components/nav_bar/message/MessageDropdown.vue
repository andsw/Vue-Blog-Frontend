<template>
  <li class="nav-item dropdown">
    <a id="messages" rel="nofollow" data-target="#" href="#"
       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
       class="nav-link">
      <i class="fa fa-envelope-o"></i><span class="badge bg-orange badge-corner" v-show="messages.length !== 0">{{messages.length}}</span>
    </a>
    <ul aria-labelledby="notifications" class="dropdown-menu">
      <!--  message    -->
      <message-item v-for="msg of messages" :username="msg.username" :avatar="msg.avatar" ></message-item>

      <li>
        <a rel="nofollow" href="#" class="dropdown-item all-notifications text-center" @click="readAllMsg">
          <strong>{{messageBottomMsg}}</strong>
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
    import toastr from 'toastr'
    import MessageItem from "./MessageItem";
    export default {
        name: "MessageDropdown",
        data() {
            return {
                messageNum: 10,
                messages: [
                    {
                        username: 'Jason Doe',
                        avatar: require('@/assets/img/avatar-1.jpg')
                    },
                    {
                        username: 'Frank Williams',
                        avatar: require('@/assets/img/avatar-2.jpg')
                    },
                    {
                        username: 'Ashley Wood',
                        avatar: require('@/assets/img/avatar-3.jpg')
                    }
                ]
            }
        },
        computed: {
            messageBottomMsg() {
                return this.messages.length === 0 ? '暂无消息' : '查看所有消息';
            }
        },
        methods: {
            readAllMsg() {
                do {
                    this.messages.pop();
                } while (this.messages.length !== 0)
                toastr.success('已读所有消息')
            }
        },
        components: {
            MessageItem
        }
    }
</script>

<style scoped>

</style>