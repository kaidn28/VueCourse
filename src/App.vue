<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <footers></footers>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Footer from './components/Footer'
export default {
  data () {
    return {

    }
  },
  components: {
    'nav-bar': NavBar,
    'footers' : Footer
  }
}
</script>

<style>
#app{
  text-align: center;
}
</style>
