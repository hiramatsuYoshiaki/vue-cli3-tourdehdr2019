<template>
  <div class="headerBar">
    <nav>
        <dvi class="container-fluid">
            <div class="row">
                <div class="col-4 ">
                    <div class="nav-item d-flex-start-center">left:logo</div>
                </div>
                <div class="col-4 ">
                    <div class="nav-item d-flex-center-center">left:logo</div>
                </div>
                <div class="col-4 ">
                    <div class="nav-item d-flex-end-center">right:menu</div>
                </div>
            </div>
        </dvi>
        <div class="mobile-menu">
            
        </div>
    </nav>
  </div>
  
</template>

<script>
//  import HeaderLogo from '@/components/header/HeaderLogo.vue' 
//  import MobileMenu from '@/components/header/MobileMenu.vue' 
 export default {
  name: 'HeaderBar',
  components: {
    // MobileMenu,
    // HeaderLogo,
  },
  props: {
    msg: String
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
}
.headerBar .mobile-menu{
    position: absolute;
    top: 0;
    right: 0;
    width: 1rem;
    height: 1rem;
    border: 1px solid #fff;
    background-color: pink;
    color: #fff;
}

</style>
