<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
