<template>
  <div class="headerBar">
    <nav>
        <dvi class="container-fluid">
            <div class="row">
                <div class="col-4 ">
                    <div class="nav-item d-flex-start-center">
                        <a href="index.html" class="header-logo">
                            <img :src="logoSvg" alt="logo">
                        </a>
                    </div>
                </div>
                <div class="col-4 ">
                    <div class="nav-item d-flex-center-center">
                        <a href="index.html" class="header-logo">
                            <img :src="logoSvgHWorksWhite" alt="logo">
                        </a>
                    </div>
                </div>
                <div class="col-4 ">
                    <div class="nav-item d-flex-end-center">
                         <a href="index.html" class="header-logo">
                            <img :src="logoSvgHWorksBlack" alt="logo">
                        </a>
                    </div>
                </div>
            </div>
        </dvi>
        <MobileMenu />
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
    msg: String
  },
  data() {
      return{
        logoSvgHWorksWhite: require("../../assets/logo/h-works1200x600white.svg"),
        logoSvgHWorksBlack: require("../../assets/logo/h-works1200x600black.svg"),
        logoSvg: require("../../assets/logo/h-logo.svg"),

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
.headerBar{
    width:100%;
    // height:$header-height; 
    border: 1px solid #fff;
    background-color: green;
    color: #fff;
}
.headerBar nav{
    width:100%;
    position: relative;
    border: 1px solid blue;
}
.headerBar .nav-item{
    padding: 0 1rem;
    span{
        display: inline-block;
        margin: .6rem  1rem 0 1rem;
    }
}

.header-logo img{
    width: 6rem;
    height: 2rem;
}



</style>
