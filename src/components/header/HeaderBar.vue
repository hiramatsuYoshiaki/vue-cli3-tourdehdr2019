<template>
  <div class="headerBar" v-bind:class="{
                         scroll: headrScrollType,
                         fixed: headerFixedype,
                         fadeOut: isScroll && headrStikyType }">
    <nav class="nav-side-space">
        <div class="container-fluid">
            <div class="row">
                <div class="col-4 ">
                    <div class="nav-item d-flex-start-center">
                        <a href="index.html" class="header-logo" v-if="logoPositionLeft">
                             <img :src="logoSvgHWorksWhite" alt="logo">
                        </a>
                    </div>
                </div>
                <div class="col-4 ">
                    <div class="nav-item d-flex-center-center">
                        <a href="index.html" class="header-logo" v-if="logoPositionCenter">
                            <img :src="logoSvg" alt="logo">
                        </a>
                    </div>
                </div>
                <div class="col-4 ">
                    <div class="nav-item d-flex-end-center">
                        <a href="index.html" class="header-logo" v-if="logoPositionRight">
                            <img :src="logoSvgHWorksBlack" alt="logo">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <MobileMenu msg="mobileBar"
                    menuVisible="home"
                    mobileBarType="fullScreen"
                    mobileBarAction="Down"
                    v-bind:mobileMenuPositionLeft="false"
                    v-bind:mobileMenuPositionCenter="false"
                    v-bind:mobileMenuPositionRight="true"/>
                    <!-- menuVisible="home"             -->
                    <!-- menuVisible="work"             -->
                    <!-- menuVisible="about"             -->
                    <!-- menuVisible="contact"             -->
    </nav>
  </div>
  
</template>

<script>
 import MobileMenu from '@/components/header/NavComponent/MobileMenu.vue' 
 export default {
  name: 'HeaderBar',
  components: {
    MobileMenu,
  },
  props: {
    msg: String,
    headrScrollType: Boolean,
    headrFixedType: Boolean,
    headrStikyType: Boolean,
    scroll: Number,
    logoPositionLeft: Boolean,
    logoPositionCenter: Boolean,
    logoPositionRight: Boolean,
  },
  data() {
      return{
        scrollY: 0,
        isScroll: false,

        logoSvgHWorksWhite: require("../../assets/logo/h-works1200x600white.svg"),
        logoSvgHWorksBlack: require("../../assets/logo/h-works1200x600black.svg"),
        logoSvg: require("../../assets/logo/h-logo.svg"),
      }
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
        this.scrollY = window.scrollY;
        if(this.scrollY > this.scroll){
            this.isScroll = true;
        }else{
            this.isScroll = false;
        }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
.headerBar{
    position: fixed;
    // position: absolute ;
    top: 0;
    left: 0;
    width:100%;
    z-index: 100;
    height: $header-height;
    // background-color: $header-color;
    background-color: transparent;
    color: $header-text;
    //確認用ライン
    border-bottom:1px solid rgba(250,250,250,.1);
}
.scroll{
  position: absolute !important;
}
.fixed{
  position: fixed !important;
}
.fadeOut{
    display:none !important;
}
.headerBar nav{
    position: relative;
    width:100%;
    height:100%;
}
.headerBar .nav-side-space{
    padding: 0 10rem;
}
.headerBar .nav-item{
    padding: 1rem 1rem;
    a{
        display: block;
    }
}
.header-logo img{
    width: 6rem;
    height: 3rem;
}
</style>
