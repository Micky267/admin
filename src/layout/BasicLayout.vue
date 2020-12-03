<template>
  <div class="c-layout">
    <a-layout>
      <a-layout-header class="c-layout-top">
        <div class="header">
          <Header />
        </div>
        <div class="top-menu">
          <TopMenu />
        </div>
      </a-layout-header>
      <a-layout>
        <a-layout-sider class="c-layout-sider"><SideMenu :menu="menu"/></a-layout-sider>
        <a-layout-content class="c-layout-content"> <router-view /></a-layout-content>
      </a-layout>
      <a-layout-footer class="c-layout-footer">脚部</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
// import { asyncRouterMap } from '@/config/router.config'
import Header from '@/components/header'
import SideMenu from '@/components/sideMenu/index.js'
import TopMenu from '@/components/topMenu'
import { mockStudentRouters } from '@/mockDatas/mockAsyncRouters.js'

export default {
  components: {
    Header,
    SideMenu,
    TopMenu
  },
  mounted() {
    this.$store.dispatch('filterRoutes', { roles: mockStudentRouters }).then(() => {
      this.menu = this.$store.getters.roleRouters
      console.log('this.$store.getters.roleRouters', this.$store.getters.roleRouters)
    })
  },
  methods() {},
  data() {
    return {
      menu: []
    }
  }
}
</script>
<style lang="less" scoped>
.c-layout {
  .ant-layout {
    background: #fff;
  }
  .ant-layout-header {
    width: 100%;
    height: auto;
    padding: 0;
    background: #fff;
  }
  .c-layout-sider {
    width: auto;
  }
}
</style>
