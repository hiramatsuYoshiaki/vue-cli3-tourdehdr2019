<template>
  <div class="worksContent">
    <main>
      <div class="main-header">
        <section class="main-header-wrape">
          <div class="transiton-box ">
            <transition name="carousel-pop-up" appear>
              <h1>WORKS COMPONENT </h1>
            </transition>
          </div>
          <div class="transiton-box ">
            <transition name="carousel-pop-up" appear>
            <p>HEADER TITLE</p>
            </transition>
          </div>
          <div class="transiton-box ">
            <transition name="carousel-pop-up" appear>
            <p>path:/works </p>
            </transition>
          </div>
        </section>
      </div>

      <transition name="mainCon" appear>
        <div  class="main-content">
            <!-- <section class="main-content-title">head-line</section>
            <section class="main-content-body">body-line</section> -->
            
            <!-- section component -->
            <div class="col2-content">
              <div class="col-block left-block">
                <div class="section-block caption-section">

                  <div v-for="(h1LeftArrey, index) in h1LeftArreys " :key="index">
                    <div class="transition-box" >
                      <transition v-bind:name="h1LeftArrey.tName" appear>
                        <div><p>{{h1LeftArrey.tText}}</p></div>
                      </transition>
                    </div>
                  </div>
                  <!-- <div class="transiton-box ">
                    <transition name="carousel-pop-up" appear>
                      <p>Alprime Capital AG (“Alprime”) is a Swiss investment boutique focusing on alternative investments. It was approved as an asset manager of collective investment schemes by the Swiss Financial Market Supervisory Authority (FINMA) in summer 2018. Alprime was established in Baar (Canton Zug/Switzerland) as a spin-off from Progressive Capital Partners Ltd in April 2018. Alprime is owned entirely by its co-founders who also manage the company.</p>
                    </transition>
                  </div>
                  <div class="transiton-box ">
                    <transition name="carousel-pop-up" appear>
                      <p>At Alprime our aim is to provide uncorrelated investment products with stable asset growth. We are convinced that our product offering provides a valuable addition to every portfolio.</p>
                    </transition>
                  </div>
                  <div class="transiton-box ">
                    <transition name="carousel-pop-up" appear>
                      <p>It is our ambition to accept the challenges of changing market environments. We are constantly striving to find new and innovative ways to put our funds to work and to differentiate ourselves from other market players in order to achieve better results for our clients. Our risk management is essential in everything we do since the trust of our clients is the most important asset we have.</p>
                    </transition>
                  </div> -->

                </div>
              </div>
              <div class="col-block right-block">
                <div class="section-block image-section">

                  <div v-for="(h1RightArrey, index ) in h1RightArreys " :key="index">
                    <div class="transition-box" >
                      <transition v-bind:name="h1RightArrey.tName" appear>
                        <div><h1>{{h1RightArrey.tText}}</h1></div>
                      </transition>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

            <!-- image component alternation 1-->
            <div class="alternationImage-content alternation-row">
              <div class="col-block text-block">
                <div id="img1Captionblock" class="section-block caption-section">
                  <div class="caption-group">
                    <div v-for="(img1Arrey, index ) in img1Arreys " :key="index">
                      <div class="transition-box" >
                        <transition v-bind:name="img1Arrey.tName" >
                            <h1 v-if="MaxScrollY > img1Captionblock">{{img1Arrey.tText}}</h1>
                        </transition>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div id="img1Imageblock" class="col-block image-block ">
                 <div class="image-section-block  image-section">
                  
                  <transition name="box-shadow-move" >
                    <div class="box-shadow" v-if="MaxScrollY > img1Imageblock">
                      <img v-bind:src="imgURL1" >
                    </div>
                  </transition>

                  <transition name="ripple" >
                    <img v-bind:src="imgURL1" v-if="MaxScrollY > img1Imageblock"  alt="img1">
                  </transition>

                  <div class="image-filter">
                    <img v-bind:src="imgURL1">
                  </div>

                </div>
              </div>
              
            </div>

            <!-- image component alternation 2-->
            <div class="alternationImage-content alternation-revers">
              <div id="img2Captionblock" class="col-block text-block">
                <div  class="section-block caption-section">
                  <div  v-for="(img2Arrey, index ) in img2Arreys " :key="index">
                    <div class="transition-box" >
                      <transition v-bind:name="img2Arrey.tName" >
                          <h1 v-if="MaxScrollY > img2Captionblock">{{img2Arrey.tText}}</h1>
                      </transition>
                    </div>
                  </div>
                </div>
              </div>
              <div id="img2Imageblock" class="col-block image-block ">
                 <div class="image-section-block  image-section">
                  <transition name="ripple" >
                    <img v-bind:src="imgURL2" v-if="MaxScrollY > img2Imageblock"  alt="img2">
                  </transition>
                </div>
              </div>
            </div>

        </div>
      </transition>
      <div class="main-footer">
        <section class="main-footer-logo">head-line</section>
        <section class="main-footer-menu">body-line</section>
        <section class="main-footer-police">head-line</section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'WorksContent',
  props: {
    msg: String,
  },
     data () {
      return {
        imgURL1: require("../../assets/img/img1578.jpg"),
        imgURL2: require("../../assets/img/fuji1.jpg"),
        imgURL3: require("../../assets/img/img4130b.jpg"),
        imgURL4: require("../../assets/img/img3668.jpg"),

        scrollY: 0,
        MaxScrollY: 0,
        innerHeight: 0, 

        h1LeftArreys:[
          {tName: "carousel-pop-up1", 
           tText: "Alprime Capital AG (“Alprime”) is a Swiss investment boutique focusing on alternative investments. It was approved as an asset manager of collective investment schemes by the Swiss Financial Market Supervisory Authority (FINMA) in summer 2018. Alprime was established in Baar (Canton Zug/Switzerland) as a spin-off from Progressive Capital Partners Ltd in April 2018. Alprime is owned entirely by its co-founders who also manage the company." },
          {tName: "carousel-pop-up2",  tText:
           "At Alprime our aim is to provide uncorrelated investment products with stable asset growth. We are convinced that our product offering provides a valuable addition to every portfolio." },
          {tName: "carousel-pop-up3",  tText:
           "It is our ambition to accept the challenges of changing market environments. We are constantly striving to find new and innovative ways to put our funds to work and to differentiate ourselves from other market players in order to achieve better results for our clients. Our risk management is essential in everything we do since the trust of our clients is the most important asset we have." },
        ],
        h1RightArreys:[
          {tName: "carousel-pop-up1",  tText: "At Alprime our mission" },
          {tName: "carousel-pop-up2",  tText: "is offering true alternatives" },
          {tName: "carousel-pop-up3",  tText: "to traditional investments" },
          {tName: "carousel-pop-up4",  tText: "by thinking outside the box." },
        ],

        img1Arreys:[
          {tName: "text-pop-up1",  tText: "Opportunities. Chances." },
          {tName: "text-pop-up2",  tText: "Our mission: Prime" },
          {tName: "text-pop-up3",  tText: "products and services." },
          {tName: "text-pop-up4",  tText: "Focusing on your needs." },
        ],
        img1Captionblock: 0,
        img1Imageblock: 0,

        img2Arreys:[
          {tName: "text-pop-up1",  tText: "Expertise. Spirit." },
          {tName: "text-pop-up2",  tText: "Prime experience and" },
          {tName: "text-pop-up3",  tText: "dedication. Focusing on" },
          {tName: "text-pop-up4",  tText: "risk and performance." },
        ],
        img2Captionblock: 0,
        img2Imagelock: 0,
      }
  },
  
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll);
    this.init();
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.img1Captionblock = document.getElementById('img1Captionblock').getBoundingClientRect().top
                          + window.scrollY  - (window.innerHeight*0.5) ;
      this.img1Imageblock = document.getElementById('img1Imageblock').getBoundingClientRect().top
                          + window.scrollY  - (window.innerHeight*0.5)  ;
      this.img2Captionblock = document.getElementById('img2Captionblock').getBoundingClientRect().top
                          + window.scrollY  - (window.innerHeight*0.5) ;
      this.img2Imageblock = document.getElementById('img2Imageblock').getBoundingClientRect().top
                          + window.scrollY  - (window.innerHeight*0.5)  ;
      this.innerHeight = window.innerHeight;
      this.scrollY = window.scrollY;
      if(this.scrollY > this.MaxScrollY) {
        this.MaxScrollY = this.scrollY;
      }

      
      // this.resize();
      
    },
    init(){
      this.innerHeight = window.innerHeight;
      this.scrollY = window.scrollY;
      // if(this.scrollY > this.MaxScrollY) {
      //   this.MaxScrollY = this.scrollY;
      // }
      // this.resize();
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
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
.worksContent{
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
  width:100%;
  height: 35vh;
  padding: 1rem 1rem;
  // border: 1px solid green;
  //横スクロール処理
  width: auto;
  min-width: 100vw;
}
.main-header-wrape{
  border: 1px solid green;
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
  border: 1px solid red;
  width: 100%;
  overflow: hidden;
  margin-bottom: 0.5rem;
  // cursor: pointer;
}
.main-content{
  // height: 75vh;
  height:100%;
  background-color: $main-contents-color;
  color: $main-contents-text;
  //横スクロール処理
  width: auto;
  min-width: 100vw;
} 

//section-2col
.col2-content{
  position: relative;
  width: 100%;
  height: 100%;
  display:flex;
  flex-wrap: wrap;
  // flex-direction: column;
  // @media (min-width: 992px){
  //   flex-direction: row;
  // }
}

.col-block{
  width: 100%;
  @media (min-width: 992px){
    width: 50%;
  }
}

.left-block{
  // background-color: rgba(0,0,0,.1);
  border:  1px solid red;
 
}
.right-block{
  // background-color: rgba(0,0,0,.3);
  border:  1px solid green;
}

.section-block{
  position: relative;
  width:100;
  height:100%;
  // margin: 1.6rem;
  padding: 1.6rem;
  @media (min-width: 992px){
    // margin: 8rem ;
    padding: 8rem ;
  } 
}
.image-section-block{
  position: relative;
  @media (min-width: 992px){
    // margin: 8rem 0;
    padding: 8rem 0;
  } 
}

.caption-section{
  border:  1px dotted red;
}
.image-section{
  border:  1px dotted yellow;
}

.caption-group{
  position: relative;
  @media (min-width: 992px){
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translateY(-50%);
  } 
  
  width: 100%;
  border: 1px solid yellow;
}
// alternation
.alternationImage-content{
  position: relative;
  width: 100%;
  height: 100%;
  display:flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.alternation-row{
  flex-direction: row;
}
.alternation-revers{
  flex-direction: row-reverse;
}

.text-block{
  // background-color: rgba(0,0,0,.1);
  border:  1px solid red;
  width: 100%;
  @media (min-width: 992px){
    width: 30%;
  }
 
}
.image-block{
  // background-color: rgba(0,0,0,.3);
  border:  1px solid green;
  // padding: 1rem;
  width: 100%;
  @media (min-width: 992px){
    width: 70%;
  }
}
.image-block .image-section{
  // overflow:hidden;
}

.image-block .image-section img{
  width: 100%;
  // @media (min-width: 992px){
  //   width: 70%;
  // }
  height: auto;
  clip-path: circle(150% at 0 100%);
}
.box-shadow{
  position: absolute;
  top:0;
  left: 0;
  background-color: rgba(0,0,0,.1);
  width: 100%;
  height: auto;
  transform: translate(-100px, 100px);
  img{
    opacity:0;
  }
  display: none;
  @media (min-width: 992px){
    display: block;
    margin-top: 8rem;
  }
}
.image-filter{
  position: absolute;
  z-index: 1;
  top:0;
  left: 0;
  background-color: rgba(250,250,250,.2);
  width: 100%;
  height: auto;
  img{
    opacity:0;
  }
  display:none;
  @media (min-width: 992px){
    display: block;
    margin-top: 8rem;
  }
  
}



.main-footer{
  padding: 1rem 1rem;
  width:100%;
  height: 50vh;
  background-color: $footer-color-color;
  color: $footer-color-text;
// 横スクロール処理
  width: auto;
  min-width: 100vw;
}
</style>
