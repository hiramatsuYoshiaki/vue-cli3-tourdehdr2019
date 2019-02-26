<template>
  <div class="home container-fluid">
    <div class="homeWrap row">
      <HeaderBar msg="HeaderBar"/>
      <HomeContent msg="HomeContent"/>
      <FooterBar msg="FooterBar"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from '@/components/home/HomeContent.vue'
import HeaderBar from '@/components/header/HeaderBar.vue'
import FooterBar from '@/components/footer/FooterBar.vue'

export default {
  name: 'Home',
  components: {
    HomeContent,
    HeaderBar,
    FooterBar,
  }
}
</script>
<style scoped lang="scss">
.home{
  // position: relative;
  width: 100vw;
  // margin-right: auto;
  // margin-left: auto;
  // padding-right: 15px;
  // padding-left: 15px;
  overflow-x: hidden;
}
.homeWrap{
  // margin-right: -15px;
  // margin-left: -15px;
  background-color: #000;
  color: #fff;
}
</style>
