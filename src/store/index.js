import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: 'bugyj',
    avatar: 'https://img2.woyaogexing.com/2018/09/25/a7ecc2686e6e43698d1cebfdce8eb237!400x400.jpeg',
    gender: '男',
    email: '123456@qq.com'
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
