import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: 'bugyj',
    avatar: require('@/assets/img/avatar-hsw.jpeg'),
    gender: '男',
    email: '123456@qq.com',

    brandName: "Weike Blog"
  },
  mutations: {
    // 异步获取账户信息
    getAccountInfo() {

    }
  },
  actions: {
  },
  modules: {
  }
})
