<template>
  <div class="projectsContent">
    <main>
      <div class="main-header">
        <section class="main-header-wrape">
          <div class="transition-box">
            <transition name="carousel-pop-up" appear>
              <h1>PROJECTS COMPONENT </h1>
            </transition>
          </div>
          <div class="transition-box">
            <transition name="carousel-pop-up" appear>
            <p>HEADER TITLE</p>
            </transition>
          </div>
          <div class="transition-box">
            <transition name="carousel-pop-up" appear>
            <p>path:/projects </p>
            </transition>
          </div>
        </section>
      </div>
      <transition name="mainCon" appear>
        <div  class="main-content" >
          <div class="historySection">
            <div class="center-line"></div>
            <div class="history-header" >
              <div class="col-block header-block">
                  <p>HISTORY HEADER</p>
              </div>
            </div>
            <div class="history-altanative" >
              <div class="grid-container">
                <div class="col2-block left-block" id="sec1SelectTop">
                    <div class="section-block section-right" >
                        <div class="altanative-wrap" v-bind:class="{'altanative-wrap-right' : !sec1Select }" >
                          <div class="image-group-right" v-if="!isHidden || sec1Select"
                              v-bind:class="{fullScreenImageLeft: sec1Select}" >
                            <div class="img-wrap" v-on:click="scrollTopSec1()"
                                v-bind:style="{ 'background-image' : 'url(' + contents[1].imgURL + ')' }">
                            </div>
                          </div>
                          <div class="subscribe-group subscribe-group-right" v-if="!isHidden ">
                            <div class="subscribe-wrap subscribe-wrap-right" >
                              <div class="transition-box">
                                  <transition name="carousel-pop-up" appear>
                                      <p v-on:click="scrollTopSec1()">{{contents[1].imgDate}}</p>
                                  </transition>
                              </div>
                              <div class="transition-box">
                                  <transition name="carousel-pop-up" appear>
                                      <h1 v-on:click="scrollTopSec1()">{{contents[1].imgTitle}}</h1>
                                  </transition>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="col2-block right-block" id="sec2SelectTop">
                    <div class="section-block section-left" >
                        <div class="altanative-wrap altanative-wrap-left">
                            <div class="image-group-left" v-if="!isHidden || sec2Select"
                                    v-bind:class="{fullScreenImageRight: sec2Select}" >
                                <div class="img-wrap" v-on:click="scrollTopSec2()"
                                    v-bind:style="{ 'background-image' : 'url(' + contents[2].imgURL + ')' }">
                                </div>
                            </div>
                            <div class="subscribe-group subscribe-group-left" v-if="!isHidden ">
                                <div class="subscribe-wrap subscribe-wrap-left">
                                    <div class="transition-box">
                                        <transition name="carousel-pop-up" appear>
                                            <p v-on:click="scrollTopSec2()">{{contents[2].imgDate}}</p>
                                        </transition>
                                    </div>
                                    <div class="transition-box">
                                        <transition name="carousel-pop-up" appear>
                                            <h1 v-on:click="scrollTopSec2()">{{contents[2].imgTitle}}</h1>
                                        </transition>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="history-footer" >
                <div class="col-block footer-block">
                    <p>HISTORY FOOTER</p>
                </div>
            </div>
            <transition appear name="tScreen">
              <div class="tranScreen" v-if="page === pageView"></div>
            </transition>
            <transition  name="fade500W500">
                <div class="bg_filter" v-if="isHidden"></div>
            </transition>
          </div> 
        </div>
      </transition>
      <FooterBar  msg="footerBar"
                  navMenu="prpject"
                  v-bind:footerTop= "true"
                  v-bind:footerBottom= "true"
                  v-bind:footerMenu= "true"
                  v-bind:footerSepalater= "true"
                  />
    </main >
  </div >
</template>

<script>
// import HistorySection from '@/components/section/HistorySection.vue'
import FooterBar from '@/components/footer/FooterBar.vue'

export default {
  name: 'ProjectsContent',
  props: {
    msg: String,
    pageView: String
  },
  components: {
    FooterBar,
    // HistorySection,
  },
     data () {
      return {
        logoSvgHWorksWhite: require("../../assets/logo/h-works1200x600white.svg"),
        logoSvgHWorksBlack: require("../../assets/logo/h-works1200x600black.svg"),

        isHidden: false,
        isChengPage: false,
        sec1Select: false,
        sec2Select: false,
        sec1Position: 0,
        scrollY: 0,
        windowH: 0,
        scrollTopHeight: 0,
        sec1SelectTop: 0,
        sec2SelectTop: 0,

        contents: [
            {
              id:0,
              title: 'img1',
              bg_color: '#f16972',
              imgURL: require("../../assets/img/fuji1.jpg"),
              titel: 'WORKS CONTENT',
              detail: 'path:/works',
              link: 'works',
              link_path: '/works',
              imgTitle: 'Fuji TV',
              imgDate: '2018.11.01',
            },
            {
              id:1,
              title: 'img2',
              bg_color: '#f16972',
              imgURL: require("../../assets/img/img4130b.jpg"),
              titel: 'ABOUT CONTENT ',
              detail: 'path:/about',
              link: 'about',
              link_path: '/about',
              imgTitle: 'TOKYO BIGSITE',
              imgDate: '2018.11.02',
            },
            {
              id:2,
              title: 'img3',
              bg_color: '#20d2d3',
              imgURL: require("../../assets/img/img3668.jpg"),
              titel: 'CONTACT CONTENT',
              detail: 'path:/content',
              link: 'contact',
              link_path: '/contact',
              imgTitle: 'HOTALUNA',
              imgDate: '2018.11.03',
            },
            {
              id:3,
              title: 'img4',
              bg_color: '#7bbff9',
              imgURL: require("../../assets/img/img1578.jpg"),
              titel: 'TOKYO STATION ',
              detail: 'MARUNOUCHI',
              link: 'home',
              link_path: '/',
              imgTitle: 'TOKYO STATION',
              imgDate: '2018.11.04',
            },
        ],
      }
  },
  computed: {
    page () {
    return this.$store.state.page
    },
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted: function () {
     this.init();
  },
  
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
      this.windowH = window.innerHeight;
      this.sec1SelectTop = document.getElementById('sec1SelectTop').getBoundingClientRect().top + window.scrollY;
      this.sec2SelectTop = document.getElementById('sec2SelectTop').getBoundingClientRect().top + window.scrollY;
    },
    scrollTopSec1: function( ){
        this.sec1SelectTop = document.getElementById('sec1SelectTop').getBoundingClientRect().top + window.scrollY;
        this.scrollTopHeight = this.sec1SelectTop - window.scrollY;
        window.scrollBy({
            top: this.scrollTopHeight,
            behavior: "smooth",
        });
        setTimeout(() => {
            this.sec1Select = true;
            this.isHidden = true;
                setTimeout( () => {
                    let link = 'about';
                    let link_path = '/about';
                    this.$store.commit( link );
                    setTimeout( () => {
                        this.$router.push({ path: link_path });
                        this.sec1Select = false;
                        this.isHidden = false;
                    }, 500);
                }, 1500);
        },1000 );
    },
    scrollTopSec2: function( ){
        this.sec2SelectTop = document.getElementById('sec2SelectTop').getBoundingClientRect().top + this.scrollY;
        this.scrollTopHeight = this.sec2SelectTop - this.scrollY;
        window.scrollBy({
            top: this.scrollTopHeight,
            behavior: "smooth",
        });
        setTimeout(() => {
            this.sec2Select = true;
            this.isHidden = true;
            setTimeout( () => {
                let link = 'contact';
                let link_path = '/contact';
                this.$store.commit( link );
                setTimeout( () => {
                    this.$router.push({ path: link_path });
                    this.sec2Select = false;
                    this.isHidden = false;
                }, 500);
            }, 1500);
        },1000 );
    },
    link_commit(link, link_path) {
      this.$store.commit( link );
      setTimeout( () => {
        this.$router.push({ path: link_path });
      }, 500);
    },
    init(){
      this.$store.commit( 'projects' );
      this.scrollY = window.scrollY;
      this.windowH = window.innerHeight;
    },
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
.projectsContent{
    position: relative;
    width: 100%;
    height: auto;
    padding-top: $header-height;
}
main{
  margin: 0;
  padding: 0;
}
.main-header{
  height: 35vh;
  padding: 1rem 1rem;
  //横スクロール処理
  // width: auto;
  // min-width: 100vw;
  width: 100vw
}
.main-header-wrape{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
}
.transition-box{
  width: 100%;
  overflow: hidden;
  margin-bottom: 0.5rem;
}
.main-header h1,  .main-header p{
  color: $header-text;
}
.main-header h1{
  font-size: 3rem;
  @media (min-width: 992px){
    font-size: 4rem;
  }
}
.main-content{
  min-height: 75vh;
  height:100%;
  background-color: $main-contents-color;
  color: $main-contents-text;
  //横スクロール処理
  // width: auto;
  // min-width: 100vw;
  width: 100vw;
  overflow: hidden;
} 
// history-----------------------------------------------
$section-block-height: 80vh;
.historySection{
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.history-header{
  position: relative;
  width: 100%;
  height: 10rem;
}
.history-altanative{
  position: relative;
  width: 100%;
  height: 100%;
  @media (min-width: 992px){
    margin-bottom: calc( #{$section-block-height} / 2);
  }
}
.history-footer{
  position: relative;
  width: 100%;
  height: 10rem;
}
.center-line{
  position: absolute;
  top: 0;
  left: calc(50% - 1px);
  background-color: $body-color;
  width: 2px;
  height: 100%;
}
.header-block{
  position: absolute;
  top: 0;
  left: 0;
  z-index:1;
  background-color: #fff;
  width: 100%;
  height: 3.5rem;
  text-align: center;
}
.footer-block{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index:1;
  background-color: #fff;
  width: 100%;
  height: 3.5rem;
  text-align: center;
}
.grid-container{
  position: relative;
  width: 100%;
  height: 100%;
  display:flex;
  flex-wrap: wrap;
}
.col-block{
  width: 100%;
}
.col2-block{
width: 100%;
  @media (min-width: 992px){
    width: 50%;
  }
}
.left-block{
  // background-color: rgba(0,0,0,.1);
  // border:  1px solid red;
}
.right-block{
  // background-color: rgba(0,0,0,.3);
  // border:  1px solid green;
}
.section-block{
  position: relative;
  width: 100%;
  height: $section-block-height;
}
.hidden{
  opacity: 0;
}
.altanative-wrap{
  position:absolute;
  top:0;
  left:0;
  width: 100%;
  height:100%;
  z-index: 10;
}
.altanative-wrap-right{
  margin-top: 0;
  @media (min-width: 992px){
    margin-top: calc( #{$section-block-height}  / 2);
  }
}
.altanative-wrap-left{
  margin-top: 0;
}
.image-group-right{
  position: relative;
  width: 100%;
  height: 70%;
  overflow:hidden;
  @media (min-width: 992px){
    position: absolute;
    top: 50%;
    left: 0%;
    width: 80%;
    height: 66.6%;
    transform: translate(0, -50%);
  }
}
.image-group-left{
  position: relative;
  width: 100%;
  height: 70%;
  overflow:hidden;
  @media (min-width: 992px){
    position: absolute;
    top: 50%;
    right: 0%;
    width: 80%;
    height: 66.6%;
    transform: translate(0, -50%);
  }
}
.fullScreenImageLeft{
  animation: trnLeftMobile 1.5s  ease-in-out forwards;
  @media (min-width: 992px){
    animation: trnLeft 1.5s  ease-in-out forwards;
  }
}
 
@keyframes trnLeft{
  60% {
    top: 0%;
    left: 0%;
    width: 100vw;
    height: 100vh;
    transform: translate(0, 0);
    margin-top: 0;
    }
  100% {
    top: 0%;
    left: 0%;
    width: 100vw;
    height: 100vh;
    transform: translate(0, 0);
    margin-top: 0;
    }
}
@keyframes trnLeftMobile{
  60% {
    top: 0%;
    left: 0%;
    width: 100vw;
    height: 100vh;
    transform: translate(0, 0);
    }
  100% {
    top: 0%;
    left: 0%;
    width: 100vw;
    height: 100vh;
    transform: translate(0, 0);
    }
}
.fullScreenImageRight{
  animation: trnRightMobile 1.5s  ease-in-out forwards;
  @media (min-width: 992px){
    animation: trnRight 1.5s  ease-in-out forwards;
  }
}
@keyframes trnRight{
  60% {
    top: 0%;
    right: 0%;
    width: 100vw;
    height: 100vh;
    transform: translate(0, 0);
    }
  100% {
    top: 0%;
    right: 0%;
    width: 100vw;
    height: 100vh;
    transform: translate(0, 0);
    }
}
@keyframes trnRightMobile{
  60% {
    top: 0%;
    right: 0%;
    width: 100vw;
    height: 100vh;
    transform: translate(0, 0);
    }
  100% {
    top: 0%;
    right: 0%;
    width: 100vw;
    height: 100vh;
    transform: translate(0, 0);
    }
}
.img-wrap{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.subscribe-group{
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 30%;
  @media (min-width: 992px){
    position: absolute;
    width: 50%;
    height: 33.3%;
    transform: translateY(-50%);
  }
}
.subscribe-group-right{
  @media (min-width: 992px){
  top: 50%;
  right: -5px;
  border-right: 10px solid  #fff;
  }
}
.subscribe-group-left{
  @media (min-width: 992px){
  top: 50%;
  left: -5px;
  border-left: 10px solid #fff;
  }
}
.subscribe-wrap{
  text-align:center;
  margin: 5% 0;
  padding: 5% 0;
  background-color:  #fff; 
  @media (min-width: 992px){
    position: absolute;
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    background-color:  transparent; 
  }
}
.subscribe-wrap-right{
  @media (min-width: 992px){
    top: 0%;
    right: -3rem;
    justify-content: flex-start;
    align-items: flex-end;
  }
}
.subscribe-wrap-left{
  @media (min-width: 992px){
    top: 0%;
    left: -3rem;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
.transition-box{
  width: 100%;
  overflow: hidden;
  margin-bottom: 0.5rem;
  cursor: pointer;
}
.subscribe-wrap-left .transition-box{
  text-align: center;
  @media (min-width: 992px){
    text-align: left; 
  }
}
.subscribe-wrap-right .transition-box{
  text-align: center;
  @media (min-width: 992px){
    text-align: right;
  }
}
.subscribe-wrap p, .subscribe-wrap h1{
  cursor: pointer;
  color: rgba(0, 0, 0, 1);
  text-shadow: 1px 1px 0px #fff,
               2px 2px 0px rgba(0,0,0,0.2),
               3px 3px 0px rgba(0,0,0,0.15);
}
.tranScreen{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: $body-color;
  width: 100%;
  height: 100%;
  overflow:hidden;
  opacity: 1;
  transform: translateX(100%);
}
.bg_filter{
    background-color: rgba(0,0,0,.6);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 900;
    width: 100%;
    height: 100%;
  }
</style>
