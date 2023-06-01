<template>
<navComponent v-if="!$route.meta.hideNavbar"/>
<router-view></router-view>
</template>



<script>
import navComponent from './components/NavComponent.vue';
export default {
  name: 'App',
  components: {
    navComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
