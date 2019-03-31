<template>
  <div class="footerBar ">
    <div class="footerBar-Wrap" >
      <div class="footer-top" v-if="footerTop">
        <a v-on:click="link_commit('home', '/')" class="menu_link" >
              <img v-bind:src="logoSvgHWorksWhite" alt="h-works logo">
        </a>
      </div>
      <nav class="footer-menu" v-if="footerMenu">
          <div class="m-menu-wrap  ">
            <div class="menu_items " >
              <div class="menu-item-box">
                <a v-on:click="link_commit('works', '/works')" 
                class="menu_link" 
                v-bind:class="{ menu_item_visible: page === 'works' }">
                  Works
                </a>
                <div class="menu_underline"></div>
              </div>
              <div class="menu-item-box">
                <a v-on:click="link_commit('projects', '/projects')" 
                class="menu_link" 
                v-bind:class="{ menu_item_visible: page === 'projects' }">
                  Projects
                </a>
                <div class="menu_underline"></div>
              </div>
              <div class="menu-item-box">
                <a v-on:click="link_commit('about', '/about')" 
                class="menu_link" 
                v-bind:class="{ menu_item_visible: page === 'about' }">
                  ABOUT
                </a>
                <div class="menu_underline"></div>
              </div>
              <div class="menu-item-box">
                <a v-on:click="link_commit('contact', '/contact')" 
                class="menu_link" 
                v-bind:class="{ menu_item_visible: page === 'contact' }">
                  CONTACT
                </a>
                <div class="menu_underline"></div>
              </div>
            </div>
          </div>
      </nav>
      <div class="footer-sepalater" v-if="footerSepalater">
        <div class="line"></div>
      </div>
      <div class="footer-bottom" v-if="footerBottom" >
        <div class="footer-bottom-wrap">
            <div class="copy-light">© 2018 h-works. All Rights Reserved</div>
            <div>Terms of Use</div>
            <div>Privacy Policy</div>
            <div>Disclaimer</div>
            <div>Imprint</div>
          </div>
      </div>
    </div> 
  </div>
</template>

<script>
//  import MobileMenu from '@/components/footer/NavComponent/MobileMenu.vue' 
 export default {
  name: 'FooterBar',
//   components: {
//     MobileMenu,
//   },
  props: {
    msg: String,
    navMenu: String,
    footerTop: Boolean,
    footerBottom: Boolean,
    footerMenu: Boolean,
    footerSepalater: Boolean,
    logo: String,
  },
  data() {
      return{
        logoSvgHWorksWhite: require("../../assets/logo/h-works1200x600white.svg"),
        logoSvgHWorksBlack: require("../../assets/logo/h-works1200x600black.svg"),
        logoSvg: require("../../assets/logo/h-logo.svg"),
      }
  },
  computed: {
    page () {
    return this.$store.state.page
    },
  },
  // mounted: function () {
  //   window.addEventListener('scroll', this.handleScroll);
  // },
  // destroyed: function () {
  //   window.removeEventListener('scroll', this.handleScroll);
  // },
  methods: {
    // handleScroll() {
    //     this.scrollBottom = window.scrollY + window.innerHeight;
    //     this.bottomPos = document.getElementById('footerBottom').getBoundingClientRect().top +  window.scrollY;
    //     if(this.scrollBottom >= this.bottomPos){
    //         this.isScroll = true;
    //     }else{
    //         this.isScroll = false;
    //     }
    // },
    link_commit(link, link_path) {
    this.$store.commit( link );
    setTimeout( () => {
      this.$router.push({ path: link_path });
    }, 500);
   },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";

.footerBar{
  padding: 1rem 1rem;
  background-color: $footer-color-color;
  color: $footer-color-text;
// 横スクロール処理
  // width: auto;
  // min-width: 100vw;
  width: 100vw;
}
.footer-top{
 position: relative;
 width:100%;
 height: 20rem;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 align-items: center;
 padding: 2rem;
}
.footer-top a img{
  width: 15rem;
  height: auto;
}

.footer-menu{
  position: relative;
  width:100%;
  height: 15rem;
  @media (min-width: 992px){
    height: 5rem;
  }
  overflow: hidden;
}
.m-menu-wrap{
  position: absolute;
  top: 50%;
  left: 50%;
  z-index:1;
  transform: translate(-50%,-50%);
  width:50%;
  height: 10rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

//menu items --------
.menu_items{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 992px){
    flex-direction: row;
  }
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
    transform: translateX(-102%);
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
    text-transform: uppercase;
    &:hover{
      opacity: .75;
    }
}
.menu_item_visible{
  opacity: 1;
  pointer-events: none;
}


.footer-sepalater{
 width: 100%;
 height: 2rem;
 display: flex;
 justify-content: center;
 align-items: center;
}
.footer-sepalater .line{
  width:80%;
  height: 1px;
  background-color: #fff;
}


.footer-bottom{
  position: relative;
  width:100%;
  height: 20rem;
  @media (min-width: 992px){
    height: 10rem;
  }
}
.footer-bottom-wrap{
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%,0%);
  @media ( min-width: 992px){
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  z-index:1;
  width:80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ( min-width: 992px){
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
}
.footer-bottom-wrap .copy-light {
  flex-basis: auto;
  @media ( min-width: 992px){
    flex-basis: 50%;
  }
}
</style>
