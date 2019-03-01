<template>
  <div class="MobileMenu" >
    <div  class="m-menu-bg" v-bind:class="{ v_open_menu : active, v_close_menu : !active }"></div>
    <div class="m-bar m-bar-position m-bar-display" v-bind:class="{ dsp_bar: !active }">
        <div class="m-bar-wrap" v-on:click="active = !active">
            <div class="upper-bar" v-bind:class="{ close_upper: active, open_upper: !active }"></div>
            <div class="under-bar" v-bind:class="{ close_under: active, open_under: !active }"></div>
        </div>
    </div>
    <nav class="laptop-menu">
      <div class="l-menu-bar l-menu-position l-menu-display l-menu-bar-side-space" >
        <div class="m-menu-wrap m-menu-position ">
          <div class="menu_items menu_items_row" v-bind:class="{
             'l-menu-items-left': mobileMenuPositionLeft, 
             'l-menu-items-center': mobileMenuPositionCenter, 
             'l-menu-items-right': mobileMenuPositionRight, 
             }" >
            <div class="menu-item-box">
              <router-link to="/" class="menu_link" v-bind:class="{ menu_item_visible: menuVisible === 'home' }">
                HOME
              </router-link>
              <div class="menu_underline"></div>
            </div>
            <div class="menu-item-box">
              <router-link to="/works" class="menu_link" v-bind:class="{ menu_item_visible: menuVisible === 'work' }">
                WORKS
              </router-link>
              <div class="menu_underline"></div>
            </div>
            <div class="menu-item-box">
              <router-link to="/about" class="menu_link" v-bind:class="{ menu_item_visible: menuVisible === 'about' }">
                ABOUT
              </router-link>
              <div class="menu_underline"></div>
            </div>
            <div class="menu-item-box">
              <router-link to="/contact" class="menu_link" v-bind:class="{ menu_item_visible: menuVisible === 'contact' }">
                CONTACT
              </router-link>
              <div class="menu_underline"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
   
    <nav class="mobile-menu">
      <div class="m-menu" v-bind:class="{ v_open_menu : active, v_close_menu : !active }">
        <div class="m-menu-wrap m-menu-position ">
          <section class="m-menu-section m-menu-section-start" v-bind:class="{ v_tran_slide_rightIn: !active }">
            <div class="d-flex-center-center">
              <h5>mobile menu</h5>
            </div>
          </section>
          <section class="m-menu-section m-menu-section-start" v-bind:class="{ v_tran_slide_rightIn: !active }">
            <div class="d-flex-center-center">
              <div class="menu_items menu_items_column" >
                <div class="menu-item-box">
                  <router-link to="/" class="menu_link">
                    HOME
                  </router-link>
                  <div class="menu_underline"></div>
                </div>
                <div class="menu-item-box">
                  <router-link to="/works" class="menu_link">
                    WORKS
                  </router-link>
                  <div class="menu_underline"></div>
                </div>
                <div class="menu-item-box">
                  <router-link to="/about" class="menu_link">
                    ABOUT
                  </router-link>
                  <div class="menu_underline"></div>
                </div>
                <div class="menu-item-box">
                  <router-link to="/contact" class="menu_link">
                    CONTACT
                  </router-link>
                  <div class="menu_underline"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: {
    msg: String,
    menuVisible: String,
    mobileBarType: String,
    mobileBarAction: String,
    mobileMenuPositionLeft: Boolean,
    mobileMenuPositionCenter: Boolean,
    mobileMenuPositionRight: Boolean,
  },
  data () {
      return {
          active: true,
          scrollY: 0,
          isScroll: false,
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
      if(this.scrollY > 250){
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
@import "../../../assets/scss/common/data/thema.scss";
.MobileMenu{
    width:100%;
    height: 100%;
    // height:$header-height; //5rem;
    position: absolute;
    // z-index: 1000;
    display:block;
    top: 0;
    left: 0;
    z-index: 100;
    // background-color: rgba(256,256,256,.8);
    // color: #fff;
    // border: 1px solid yellow;
}
//mobile menu background
.m-menu-bg{
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100%;
  top: 0;
  left :0;
  background-color: red;
  color: #fff;
}
.v_open_menu{
  // opacity: 0;
  transform: translateY(-101%) ; 
  transition: .5s .5s all ease;
}
.v_close_menu{
  // opacity: 1;
  transform: translateY(0) ;
  transition: .5s .5s all ease;
}

//menu-humberger-menu
.m-bar-position{
  position: absolute;
  z-index: 110;
  top: 0;
  // left: 0 ;
  right: 0 ;
  margin:1rem 1rem;
}
.m-bar{
    width:2rem;
    height:2rem;
    cursor: pointer;
}
.m-bar-display{
  display: block;
  @media (min-width: 992px) {
    display: none;
  }
}
.dsp_bar{
  display:block;
}

.m-bar-wrap{
    position:relative;
    width:100%;
    height: 100%;
    overflow: hidden;
}
.upper-bar, .under-bar {
    position: absolute;
    top: 50%;
    left: 0;
    width: 2rem;
    height: 2px;
    background-color: #fff;
}
.close_upper{
    transform-origin: center center;
    transform: translateY(-.25rem) ;
    transition: .5s all ease;  
}
.open_upper{
    transform-origin: center center;
    transform: rotate(45deg) ;
    transition: .5s all ease;  
}

.close_under{
    transform-origin: center center;
    transform: translateY(.25rem) ; 
    transition: .5s all ease;
}
.open_under{
    transform-origin: center center;
    transform: rotate(-45deg) ;
    transition: .5s all ease; 
}

//menu items --------
.menu_items{
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu_items_row{
  flex-direction: row;
}
.menu_items_column{
  flex-direction: column;
}
.menu-item-box{
  position:relative;
  overflow: hidden;
  margin: 0 1rem;
  padding: .3rem 0;
  .menu_underline{
    position:absolute;
    bottom: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: 2px;
    margin-top: .2rem;
    transition: .5s all ease-in;
    transform: translateX(-100%);
  }
  &:hover{
    .menu_underline{
      transition: .5s all ease-in;
      transform: translateX(0);
    }
  }
}
.menu_link{
    display: inline-block;
    opacity: .5;
    &:hover{
      opacity: .75;
    }
}
.menu_item_visible{
  opacity: 1;
  pointer-events: none;
}


//laptop menu
.l-menu-position{
  position: absolute;
  z-index: 110;
  top: 0;
  left: 0 ;
  // right: 0 ;
}
.l-menu-bar{
    width:100%;
    height:100%;
    cursor: pointer;
    // border: 1px solid #000;
}
.l-menu-bar-side-space{
    padding: 0 10rem;
}
.l-menu-display{
  display: none !important;
  @media (min-width: 992px) {
    display: block !important;
  }
}
.l-menu-items-left{
  margin: 0 auto 0 0;
}
.l-menu-items-center{
  margin: 0 auto 0 auto;
}
.l-menu-items-right{
  margin: 0 0 0 auto;
}




// mobile menu --------
.m-menu{
  position:fixed;
  z-index: 101;
  top:0;
  left:0; 
  width:100%;
  height:100%;
}
.m-menu-wrap{
  position:relative;
  width: 100%;
  height: 100%;
}
.m-menu-position{
  display: flex;
  justify-content: center;
  align-items: center;
  // flex-direction: row;
  flex-direction: column;
}
.m-menu-section{
 width: 100%;
 margin: .5rem;
 padding: .5rem;
}


//section animatin right-in
.m-menu-section-start{
   transform: translateX(100%) ;
   transition: .5s  all ease;
   opacity: 0;
}
.v_tran_slide_rightIn{
   transform: translateX(0) ;
   transition: .5s .75s all ease;
   opacity: 1;
}


</style>
