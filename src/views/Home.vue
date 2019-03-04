<template>
<div class="hoem">
  <div class="homeWrap">
      <HeaderBar msg="HeaderBar"
                 navMenu="home"
                 v-bind:headerScrollType="true"
                 v-bind:headerFixedType="false"
                 v-bind:headerStikyType="false"
                 
                 v-bind:logoPositionLeft="true"
                 v-bind:logoPositionCenter="false"
                 v-bind:logoPositionRight="false"
      />
       <BgImageFull msg="bgImage" v-bind:img= bgImage />
      <HomeContent msg="HomeContent"/>
      <!-- <FooterBar msg="FooterBar"/>  -->
  </div>
</div>
</template>


<script>
// @ is an alias to /src
import HomeContent from '@/components/home/HomeContent.vue'
import HeaderBar from '@/components/header/HeaderBar.vue'
// import FooterBar from '@/components/footer/FooterBar.vue'
import BgImageFull from '@/components/background/BgImageFull.vue'

export default {
  name: 'Home',
  components: {
    HomeContent,
    HeaderBar,
    // FooterBar,
    BgImageFull,
  },
  data () {
      return {
        bgImage: require("../assets/img/img1578.jpg"),
        // home: require("../../assets/img/img3698z.jpg"),
        // works: require("../../assets/img/fuji1.jpg"),
        // about: require("../../assets/img/img4130b.jpg"),
        // contact: require("../../assets/img/img3668.jpg"),

        // bgImageGigsite1: require("../../assets/img/img4139_flat_zoom.jpg"),
        // bgImageGigsite2: require("../../assets/img/img4121_flat_zoom.jpg"),
        // bgImageGigsite3: require("../../assets/img/img4130b.jpg"),
        // bgImageFujiTv: require("../../assets/img/fuji1.jpg"),
        // bgImageStation: require("../../assets/img/img1578.jpg"),
        // bgImageFCV: require("../../assets/img/img2722.jpg"),
        // bgImageSeafty: require("../../assets/img/img2731.jpg"),
        // bgImageHama: require("../../assets/img/img3482.jpg"),
        // bgImageHotaruna: require("../../assets/img/img3698z.jpg"),
        // bgImageHotaluna2: require("../../assets/img/img3668.jpg"),
      }
 },
  
}
</script>
<style scoped lang="scss">
@import "../assets/scss/common/data/thema.scss";
.home{
  position: relative;
  margin: 0;
  padding:0;
  // width: 100vw;
  // margin-right: auto;
  // margin-left: auto;
  // padding-right: 15px;
  // padding-left: 15px;
  // overflow-x: hidden;
}
.homeWrap{
  background-color: $body-color;
  color: $body-text;
  // margin-right: -15px;
  // margin-left: -15px;
}
</style>
