<template>
  <div class="c-page">
    主要内容
    <a-button @click="loginHandle">登录</a-button>
    <a-button @click="logoutHandle">退出</a-button>
  </div>
</template>
<script>
import Vue from 'vue'
import { ACCESS_TOKEN } from '@/utils/defalut.config'
import { mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions(['login', 'logout']),
    loginHandle() {
      console.log('this.login', this.login);
      this.login().then(() => {
        Vue.ls.set(ACCESS_TOKEN, 'testtoken')
      })
    },
    logoutHandle() {
      this.logout()
    },
    test() {
      console.log('this', this)
    }
  }
}
</script>
<style lang="less" scoped>
.c-page {
  width: 100%;
  height: 100%;
  background-color: rgb(201, 243, 84);
}
</style>
