<template>
  <!-- <div class="home container-fluid">
    <div class="homeWrap row"> -->

<div class="hoem">
  <div class="homeWrap">
      <HeaderBar msg="HeaderBar"
                 v-bind:headrScrollType="false"
                 v-bind:headrFixedType="true"
                 v-bind:headrStikyType="true"
                 scroll=250
                 v-bind:logoPositionLeft="true"
                 v-bind:logoPositionCenter="true"
                 v-bind:logoPositionRight="false"
      />
      <HomeContent msg="HomeContent"/>
      <FooterBar msg="FooterBar"/> 
  </div>
</div>
    <!-- </div>
  </div> -->
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
@import "../assets/scss/common/data/thema.scss";
.home{
  position: relative;
  // width: 100vw;
  // margin-right: auto;
  // margin-left: auto;
  // padding-right: 15px;
  // padding-left: 15px;
  // overflow-x: hidden;
  margin: 0;
  padding:0;
}
.homeWrap{
  // margin-right: -15px;
  // margin-left: -15px;
  background-color: $body-color;
  color: $body-text;
}
</style>
