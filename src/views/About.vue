<template>
<div class="about">
  <div class="aboutWrap">
    <TransitionScreen msg="bgImage" v-bind:img= bgImage pageView="about"  />
      <HeaderBar msg="HeaderBar"
                 navMenu="about"
                 v-bind:headrScrollType="true"
                 v-bind:headrFixedType="false"
                 v-bind:headrStikyType="false"
                
                 v-bind:logoPositionLeft="true"
                 v-bind:logoPositionCenter="false"
                 v-bind:logoPositionRight="false"
      />
      <BgImageFull msg="bgImage" v-bind:img= bgImage />
      <AboutContent msg="AboutContent"/>
  </div>
</div>
</template>


<script>
// @ is an alias to /src
import AboutContent from '@/components/about/AboutContent.vue'
import HeaderBar from '@/components/header/HeaderBar.vue'
import BgImageFull from '@/components/background/BgImageFull.vue'
import TransitionScreen from '@/components/transition/TransitionScreen.vue'


export default {
  name: 'About',
  components: {
    AboutContent,
    HeaderBar,
    BgImageFull,
    TransitionScreen,

  },
    data () {
      return {
        bgImage: require("../assets/img/img4130b.jpg"),
      }
 },
}
</script>
<style scoped lang="scss">
@import "../assets/scss/common/data/thema.scss";
.about{
  position: relative;
  margin: 0;
  padding:0;
}
.aboutWrap{
  background-color: $body-color;
  color: $body-text;
}
</style>

