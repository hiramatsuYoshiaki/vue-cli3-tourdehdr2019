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

            <div> project main content</div>
            <!-- <div style="color:black">sec1Position: {{sec1Position}}</div> -->
            <!-- <div style="color:black">scrollTopHeight: {{scrollTopHeight}}</div> -->
            
            <!-- <div style="color:black">windowH: {{windowH}}</div> -->
            <!-- <HistorySection msg="massage history section" pageView="projects"/> -->
            <div> historySection---------------</div>
            <div class="historySection">
                <div class="center-line"></div>
                <div class="history-header" >
                    <div class="col-block header-block">
                        <p>HISTORY HEADER</p>
    <div style="color:black">
        <span style="margin: .5rem">scrollY: {{scrollY}}</span>
        <span style="margin: .5rem">sec1SelectTop: {{sec1SelectTop}}</span>
        <span style="margin: .5rem">sec2SelectTop: {{sec2SelectTop}}</span>
        <span style="margin: .5rem">scrollTopHeight: {{scrollTopHeight}}</span>
    </div>
                    </div>
                </div>
            </div>
            <div class="history-altanative" >
                <div class="grid-container">



                    <div class="col2-block left-block" >
                        <div class="section-block section-right" >
                            <div class="altanative-wrap altanative-wrap-right">
                                <div class="image-group image-group-right" 
                                    v-bind:class="{fullScreenImageLeft: sec1Select}" v-if="!isHidden || sec1Select">
                                    <div class="img-wrap" id="sec1SelectTop"
                                        v-on:click="scrollTopSec1()"
                                        v-bind:style="{ 
                                            'background-image' : 'url(' + contents[1].imgURL + ')' 
                                        }">
                                    </div>
                                </div>
                                <div class="subscribe-group subscribe-group-right" v-if="!isHidden ">
                                    <div class="subscribe-wrap subscribe-wrap-right" >
                                        <div class="transition-box">
                                            <transition name="carousel-pop-up" appear>
                                                <p>{{contents[1].imgDate}}</p>
                                            </transition>
                                        </div>
                                        <div class="transition-box">
                                            <transition name="carousel-pop-up" appear>
                                                <h1>{{contents[1].imgTitle}}</h1>
                                            </transition>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="col2-block left-block" >
                        <div class="section-block section-left">
                            <div class="altanative-wrap altanative-wrap-left" >
                                <div class="image-group image-group-left"
                                        v-bind:class="{fullScreenImageRight: sec2Select}"  v-if="!isHidden || sec2Select">
                                    <div class="img-wrap" id="sec2SelectTop"
                                        v-on:click="scrollTopSec2()"
                                        v-bind:style="{ 
                                            'background-image' : 'url(' + contents[2].imgURL + ')' 
                                    }">
                                    </div>
                                </div>
                                <div class="subscribe-group subscribe-group-left" v-if="!isHidden ">
                                    <div class="subscribe-wrap subscribe-wrap-left">
                                        <div class="transition-box">
                                            <transition name="carousel-pop-up" appear>
                                                <p>{{contents[2].imgDate}}</p>
                                            </transition>
                                        </div>
                                        <div class="transition-box">
                                            <transition name="carousel-pop-up" appear>
                                                <h1>{{contents[2].imgTitle}}</h1>
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






        </div>
      </transition>
      <div class="main-footer">
        <div class="main-footer-logo-section">
          <a v-on:click="link_commit('home', '/')" class="menu_link" >
              <img v-bind:src="logoSvgHWorksWhite" alt="h-works logo">
          </a>
        </div>
        <nav class="laptop-menu">
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
        <div class="main-footer-sepalater">
          <div class="line"></div>          
        </div>
        <div class="main-footer-police">
          <div class="main-footer-police-wrap">
            <div class="copy-light">© 2018 h-works. All Rights Reserved</div>
            <div>Terms of Use</div>
            <div>Privacy Policy</div>
            <div>Disclaimer</div>
            <div>Imprint</div>
          </div>
        </div>
      
      </div>
    </main>
  </div>
</template>

<script>
import HistorySection from '@/components/section/HistorySection.vue'

export default {
  name: 'ProjectsContent',
  props: {
    msg: String,
  },
  components: {
    HistorySection,
  },
     data () {
      return {
        // imgURL1: require("../../assets/img/img1578.jpg"),
        // imgURL2: require("../../assets/img/fuji1.jpg"),
        // imgURL3: require("../../assets/img/img4130b.jpg"),
        // imgURL4: require("../../assets/img/img3668.jpg"),
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
        // MaxScrollY: 0,
        // innerHeight: 0, 

        // menuVisible: String,
        // mobileBarType: String,
        // mobileBarAction: String,
        // mobileMenuPositionLeft: Boolean,
        // mobileMenuPositionCenter: Boolean,
        // mobileMenuPositionRight: Boolean,

    //     h1LeftArreys:[
    //       {tName: "carousel-pop-up1", 
    //        tText: "Alprime Capital AG (“Alprime”) is a Swiss investment boutique focusing on alternative investments. It was approved as an asset manager of collective investment schemes by the Swiss Financial Market Supervisory Authority (FINMA) in summer 2018. Alprime was established in Baar (Canton Zug/Switzerland) as a spin-off from Progressive Capital Partners Ltd in April 2018. Alprime is owned entirely by its co-founders who also manage the company."
    //        , tColor:"rgba(0,0,0,.6)" },
    //       {tName: "carousel-pop-up2",  tText:
    //        "At Alprime our aim is to provide uncorrelated investment products with stable asset growth. We are convinced that our product offering provides a valuable addition to every portfolio."
    //         , tColor:"rgba(0,0,0,.6)"},
    //       {tName: "carousel-pop-up3",  tText:
    //        "It is our ambition to accept the challenges of changing market environments. We are constantly striving to find new and innovative ways to put our funds to work and to differentiate ourselves from other market players in order to achieve better results for our clients. Our risk management is essential in everything we do since the trust of our clients is the most important asset we have."
    //         , tColor:"rgba(0,0,0,.6)"},
    //     ],
    //     h1RightArreys:[
    //       {tName: "carousel-pop-up1",  tText: "At Alprime our mission", tColor:"rgba(0,0,0,.6)" },
    //       {tName: "carousel-pop-up2",  tText: "is offering true alternatives", tColor:"rgba(0,0,40,1)" },
    //       {tName: "carousel-pop-up3",  tText: "to traditional investments", tColor:"rgba(0,0,40,1)" },
    //       {tName: "carousel-pop-up4",  tText: "by thinking outside the box.", tColor:"rgba(0,0,0,.6)" },
    //     ],

    //     img1Arreys:[
    //       {tName: "text-pop-up1",  tText: "Opportunities. Chances.", tColor:"rgba(0,0,0,.6)"},
    //       {tName: "text-pop-up2",  tText: "Our mission: Prime", tColor:"rgba(0,0,40,1)"},
    //       {tName: "text-pop-up3",  tText: "products and services.", tColor:"rgba(0,0,40,1)"},
    //       {tName: "text-pop-up4",  tText: "Focusing on your needs.", tColor:"rgba(0,0,0,.6)"},
    //     ],
    //     img1Captionblock: 0,
    //     img1Imageblock: 0,

    //     img2Arreys:[
    //       {tName: "text-pop-up1",  tText: "Expertise. Spirit.", tColor:"rgba(0,0,0,.6)"},
    //       {tName: "text-pop-up2",  tText: "Prime experience and", tColor:"rgba(0,0,40,1)" },
    //       {tName: "text-pop-up3",  tText: "dedication. Focusing on", tColor:"rgba(0,0,40,1)" },
    //       {tName: "text-pop-up4",  tText: "risk and performance.", tColor:"rgba(0,0,0,.6)" },
    //     ],
    //     img2Captionblock: 0,
    //     img2Imageblock: 0,
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
    console.log('create: ');
    window.addEventListener('scroll', this.handleScroll);
   
  },
  destroyed () {
    console.log('destory: ');
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted: function () {
    console.log('mounted: ');
    // window.addEventListener('scroll', this.handleScroll);
     this.init();
    
  },
  
  methods: {
    handleScroll() {
    //   console.log('project content handleScroll: ' + this.scrollY);
      this.scrollY = window.scrollY;
      this.windowH = window.innerHeight;
    //   this.sec1Position = document.getElementById('historyTop').getBoundingClientRect().top + window.scrollY;
      this.sec1SelectTop = document.getElementById('sec1SelectTop').getBoundingClientRect().top + window.scrollY;
      this.sec2SelectTop = document.getElementById('sec2SelectTop').getBoundingClientRect().top + window.scrollY;
     
     // console.log('workcomponent this.scrollY: ' + this.scrollY);
      // this.img1Captionblock = document.getElementById('img1Captionblock').getBoundingClientRect().top
      //                     + window.scrollY  - (window.innerHeight*0.8) ;
    //   this.img1Imageblock = document.getElementById('img1Imageblock').getBoundingClientRect().top
    //                       + window.scrollY  - (window.innerHeight*0.8)  ;
    //   this.img2Captionblock = document.getElementById('img2Captionblock').getBoundingClientRect().top
    //                       + window.scrollY  - (window.innerHeight*0.8) ;
    //   this.img2Imageblock = document.getElementById('img2Imageblock').getBoundingClientRect().top
    //                       + window.scrollY  - (window.innerHeight*0.8)  ;
    //   this.innerHeight = window.innerHeight;
    //   this.scrollY = window.scrollY;
    //   if(this.scrollY > this.MaxScrollY) {
    //     this.MaxScrollY = this.scrollY;
    //   }
      // this.resize();
    },
    scrollTopSec1: function( ){
        this.scrollTopHeight = this.sec1SelectTop - this.scrollY;
        if(this.scrollY > 0){
             window.scrollBy({
                top: this.scrollTopHeight,
                behavior: "smooth",
            });
        }
        // setTimeout(() => {
        //     this.sec1Select = true;
        //     this.isHidden = true;
        //         setTimeout( () => {
        //             let link = 'about';
        //             let link_path = '/about';
        //             this.$store.commit( link );
        //             setTimeout( () => {
        //                 this.$router.push({ path: link_path });
        //                 this.sec1Select = false;
        //                 this.isHidden = false;
        //             }, 500);
        //         }, 1500);
        // },1000 );
    },
    scrollTopSec2: function( ){
        this.scrollTopHeight = this.sec2SelectTop - this.scrollY;
        if(this.scrollY > 0){
             window.scrollBy({
                top: this.scrollTopHeight,
                behavior: "smooth",
            });
        }
        // setTimeout(() => {
        //     this.sec2Select = true;
        //     this.isHidden = true;
        //     setTimeout( () => {
        //         let link = 'contact';
        //         let link_path = '/contact';
        //         this.$store.commit( link );
        //         setTimeout( () => {
        //             this.$router.push({ path: link_path });
        //             this.sec2Select = false;
        //             this.isHidden = false;
        //         }, 500);
        //     }, 1500);
        // },1000 );
    },
    // resize(){
    //    this.mainPos = (this.innerHeight - 300 -50 )  * -1  ;
    // }
  // this.scrollY = (window.scrollY * 0.1) - 190;
  //      this.scrY = window.scrollY;
  //      this.sec1 =  
  //      document.getElementById('hSec1').getBoundingClientRect().top 
  //      + window.scrollY - (window.innerHeight*0.5);
  //    if( this.scrY > this.sec1){
  //       this.isDspSec1 = true;
  //     }
    link_commit(link, link_path) {
      this.$store.commit( link );
      setTimeout( () => {
        this.$router.push({ path: link_path });
      }, 500);
    },
    init(){
      // console.log('init: ');
      this.$store.commit( 'projects' );
    //   this.innerHeight = window.innerHeight;
      this.scrollY = window.scrollY;
      this.windowH = window.innerHeight;
    //   this.sec1Position = document.getElementById('historyTop').getBoundingClientRect().top + window.scrollY;
      this.sec1SelectTop = document.getElementById('sec1SelectTop').getBoundingClientRect().top + window.scrollY;
      this.sec2SelectTop = document.getElementById('sec2SelectTop').getBoundingClientRect().top + window.scrollY;
      // if(this.scrollY > this.MaxScrollY) {
      //   this.MaxScrollY = this.scrollY;
      // }
      // this.resize();
      // console.log('workcomponent Init  this.scrollY: ' + this.scrollY);
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
  // width:100%;
  height: 35vh;
  padding: 1rem 1rem;
  // border: 1px solid green;
  //横スクロール処理
  // width: auto;
  // min-width: 100vw;
  width: 100vw
}
.main-header-wrape{
  // border: 1px solid green;
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
  // border: 1px solid red;
  width: 100%;
  overflow: hidden;
  margin-bottom: 0.5rem;
  // cursor: pointer;
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
// .main-header p{
//   font-size: 1.6rem;
//   @media (min-width: 992){
//     font-size: 2rem;;
//   }
// }
.main-content{
  // height: 75vh;
  height:100%;
  background-color: $main-contents-color;
  color: $main-contents-text;
  //横スクロール処理
  // width: auto;
  // min-width: 100vw;
  width: 100vw;
} 

//main-footer--------------------------------------

.main-footer{
  padding: 1rem 1rem;
  background-color: $footer-color-color;
  color: $footer-color-text;
// 横スクロール処理
  // width: auto;
  // min-width: 100vw;
  width: 100vw;
  
}
.main-footer-logo-section{
 position: relative;
 width:100%;
 height: 20rem;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 align-items: center;
 padding: 2rem;
}
.main-footer-logo-section a img{
  width: 15rem;
  height: auto;
}
.laptop-menu{
  position: relative;
  width:100%;
  height: 15rem;
  @media (min-width: 992px){
    height: 5rem;
  }
  // border: 3px solid white;
  overflow: hidden;
}
.m-menu-wrap{
  position: absolute;
  top: 50%;
  left: 50%;
  z-index:1;
  transform: translate(-50%,-50%);
  // border: 3px solid red;
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
// .menu_items_row{
//   flex-direction: row;
// }
// .menu_items_column{
//   flex-direction: column;
// }
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
    // transition: .1s all ease-in;
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

.main-footer-sepalater{
 width: 100%;
 height: 2rem;
 display: flex;
 justify-content: center;
 align-items: center;
}
.main-footer-sepalater .line{
  width:80%;
  height: 1px;
  background-color: #fff;
}
.main-footer-police{
  position: relative;
  width:100%;
  height: 20rem;
  @media (min-width: 992px){
    height: 10rem;
  }
//  border: 3px solid white;
}
.main-footer-police-wrap{
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
  // border: 3px solid red;
  width:80%;
  height: 100%;
  // cursor: pointer;
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
.main-footer-police-wrap .copy-light {
  flex-basis: auto;
  @media ( min-width: 992px){
    flex-basis: 50%;
  }
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
  // border: 1px solid red;
}
.history-altanative{
  position: relative;
  width: 100%;
  height: 100%;
  // border: 5px solid red;
  @media (min-width: 992px){
    margin-bottom: calc( #{$section-block-height} / 2);
  }
}

.history-footer{
  position: relative;
  width: 100%;
  height: 10rem;
  // border: 1px solid red;
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
  // border: 1px solid red;

}
.grid-container{
  position: relative;
  width: 100%;
  height: 100%;
  display:flex;
  flex-wrap: wrap;
  // margin-top:5rem;
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
  // border:  3px solid yellow;
  position: relative;
  width: 100%;
  height: $section-block-height;
  // padding: 1.6rem;
  // @media (min-width: 992px){
  //   padding: 6rem 0 6rem 6rem ;
  // } 
  // @media (min-width: 1200px){
  //   padding: 6rem 0 6rem 12rem ;
  // } 
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
  // border:  5px dotted indigo;
}
.altanative-wrap-right{
  margin-top: 0;
  @media (min-width: 992px){
    margin-top: calc( #{$section-block-height}  / 2);
    
  }
  
  // background-color: rgba(0,0,0,.5);
  //  border: 1px solid blue;
}
.altanative-wrap-left{
  margin-top: 0;
  // background-color: rgba(0,0,0,.7);
}
.image-group{
  // border: 1px solid red;
  position: relative;
  width: 100%;
  height: 70%;
  overflow:hidden;
  @media (min-width: 992px){
    position: absolute;
    // z-index: 0;
    top: 50%;
    right: 0%;
    width: 80%;
    height: 66.6%;
    transform: translate(0, -50%);
  }
  background-color: rgba(0,0,0,1);
}
.image-group-right{
  @media (min-width: 992px){
  top: 50%;
  left: 0%;
  }
}
.image-group-left{
  @media (min-width: 992px){
  top: 50%;
  right: 0%;
  }
}

.fullScreenImageLeft{
  // @media (min-width: 992px){
    animation: trnLeft 1.5s  ease-in forwards;
  // }
}
@keyframes trnLeft{
  30% {
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    transform: translate(0, -50%);
    }
  100% {
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    transform: translate(0, -50%);
    }
}
.fullScreenImageRight{
  animation: trnRightMov 1.5s  ease-in forwards;
  @media (min-width: 992px){
    animation: trnRight 1.5s  ease-in forwards;
  }
}
@keyframes trnRight{
  30% {
    
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    // transform: translate(0, 0%);
    transform: translate(0, -10rem);
    }
  100% {
    margin-top: 0;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    // transform: translate(0, 0%);
    transform: translate(0, -10rem);
    }
}
@keyframes trnRightMov{
  30% {
    
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    // transform: translate(0, 0%);
    transform: translate(0, calc( (-10rem + #{$section-block-height}) * -1 ) );
    }
  100% {
    margin-top: 0;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    // transform: translate(0, 0%);
    transform: translate(0, calc( (-10rem + #{$section-block-height}) * -1 ) );
    }
}


.img-wrap{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  // &:hover{
  //   border:3px solid red;
  // }

}
.subscribe-group{
  // border: 3px dotted indigo;
  // cursor: pointer;
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
    // border: 1px solid black;
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
  // cursor: pointer;
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
  // &:hover{
  //   border:3px solid red;
  // }
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
    top: 0;
    left: 0;
    // min-width: 100%;
    // min-height: 100%;
    // width: auto;
    // height: auto;
    width: 100%;
    height: 100%;
  }
</style>
