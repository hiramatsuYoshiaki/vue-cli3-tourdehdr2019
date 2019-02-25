<template>
  <div class="headerBar">
    <nav>
        <div>
        <!-- nav-left -->
        <!-- <HeaderLogo /> -->
        left:{{msg}}
        </div>
        <div>
        <!-- nav-center -->
        <!-- <HeaderMenu /> -->
        center:{{msg}}
        </div>
        <div>
        <!-- nav-right -->
        HeaderMenu
        </div>
        <!-- <MobileMenu /> -->
        <!-- MobileMenu -->
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
// @import "../../assets/scss/common/thema.scss";
.headerBar{
    width:100%;
    // height:$header-height; 
    height:5rem; 
}
.headerBar nav{
    position: relative;
    padding: 0.5rem 1rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

</style>
