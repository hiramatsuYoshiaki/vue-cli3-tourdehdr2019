<template>
  <div class="home">
    <div class="homeWrap">
      home
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <HeaderBar msg="HeaderBar"/>
      <HomeContent msg="HomeContent"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from '@/components/home/HomeContent.vue'
import HeaderBar from '@/components/header/HeaderBar.vue'

export default {
  name: 'Home',
  components: {
    HomeContent,
    HeaderBar,
  }
}
</script>
<style scoped lang="scss">
.home{
  position: relative;
  width: 100vw;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: hidden;
}
.homeWrap{
  margin-right: -15px;
  margin-left: -15px;
  background-color: #000;
  color: #fff;
}
</style>
