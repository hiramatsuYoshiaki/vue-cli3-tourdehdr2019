<template>
  <div class="home">
    home
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HeaderBar msg="HeaderBar"/>
    <HomeContent msg="HomeContent"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeContent from '@/components/home/HomeContent.vue'
import HeaderBar from '@/components/header/HeaderBar.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    HomeContent,
    HeaderBar,
  }
}
</script>
<style scoped lang="scss">
.home{
  background-color: red;
}
</style>
