<template>
<div class="hoem">
  <!-- <div class="homeWrap"> -->

    <TransitionScreen msg="bgImage" v-bind:img= bgImage pageView="home"  />

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
  <!-- </div> -->
<!-- </div> -->
</div>
</template>


<script>
// @ is an alias to /src
import HomeContent from '@/components/home/HomeContent.vue'
import HeaderBar from '@/components/header/HeaderBar.vue'
import BgImageFull from '@/components/background/BgImageFull.vue'
// import Spinner from '@/components/transition/Spinner.vue'
// import LoadingCounterBar2 from '@/components/transition/LoadingCounterBar2.vue'

// import LoadingWrite from '@/components/transition/LoadingWrite.vue'

import TransitionScreen from '@/components/transition/TransitionScreen.vue'

export default {
  name: 'Home',
  components: {
    HomeContent,
    HeaderBar,
    BgImageFull,
    // Spinner,
    // LoadingCounterBar2,
    // LoadingWrite,
    TransitionScreen,
  },
  data () {
      return {
        isLoading: true, 
        isShow: true, 
        progress: 0,
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
  mounted: function () {
    // this.isLoading = true;
    // this.counter = 0;
    // this.loading();

    
  },
  methods: {
    
    // loading: function() {
    //     setInterval(() => {
    //         this.progress += 1;
    //         if (this.progress === 101) {
    //          this.progress = 100; 
    //          setInterval(() => {
    //              this.isLoading = false;
    //          }, 300);
    //         }
    //     }, 30);
    // },
  }
  
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
}
.homeWrap{
  background-color: $body-color;
  color: $body-text;
  width: 100%;
  height:100%;

  // width: 100vw;
  // margin-right: -15px;
  // margin-left: -15px;
}
// .v-enter-active, .v-leave-active {
//     transition: all .5s 3.5s;
// }
// .v-enter, .v-leave-to {
//     opacity: 1;
//     transform: translateX(0);
// }

// .slideOut-enter-active {
//   transition: all .3s ease;
// }
// .slideOut-leave-active {
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
// .slideOut-enter, .slideOut-leave-to {
//   transform: translateX(-100%);
//   opacity: 0;
// }
</style>
