<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import Utils from '@/utils/utils.ts'
export default({
  beforeCreate() {
    document.querySelector('body').setAttribute('style', 'background-color: #d2ffe7;')
  },
  beforeDestroy() {
    document.querySelector('body').removeAttribute('style')
  },
  mounted() {
    Utils.loadCookie()
    Utils.getData()
  }
})
</script>


<style>
#app {
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
