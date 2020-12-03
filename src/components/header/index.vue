<template>
  <div class="c-header">
    头部名称
    <router-link to="/exam/scoreManage/scoreManageList">成绩列表</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.c-header {
  width: 100%;
  height: 40px;
  background-color: rgb(233, 60, 103);
}
</style>
