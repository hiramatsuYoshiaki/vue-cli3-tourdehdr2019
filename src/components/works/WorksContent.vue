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
                <div class="section-block left-section">
                  <p>Alprime Capital AG (“Alprime”) is a Swiss investment boutique focusing on alternative investments. It was approved as an asset manager of collective investment schemes by the Swiss Financial Market Supervisory Authority (FINMA) in summer 2018. Alprime was established in Baar (Canton Zug/Switzerland) as a spin-off from Progressive Capital Partners Ltd in April 2018. Alprime is owned entirely by its co-founders who also manage the company.</p>
                  <p>At Alprime our aim is to provide uncorrelated investment products with stable asset growth. We are convinced that our product offering provides a valuable addition to every portfolio.</p>
                  <p>It is our ambition to accept the challenges of changing market environments. We are constantly striving to find new and innovative ways to put our funds to work and to differentiate ourselves from other market players in order to achieve better results for our clients. Our risk management is essential in everything we do since the trust of our clients is the most important asset we have.</p>
                </div>
              </div>
              <div class="col-block right-block">
                <div class="section-block left-section">
                  <h1>At Alprime our mission is offering true alternatives to traditional investments by thinking outside the box.</h1>
                </div>
              </div>
            </div>
            <!-- image component alternation -->
            <div class="alternationImage-content alternation-row">
              <div class="col-block text-block">
                <div class="section-block left-section">
                  <h1>At Alprime our mission is offering true alternatives to traditional investments by thinking outside the box.</h1>
                </div>
              </div>
              <div class="col-block image-block">
                <div class="section-block left-section">
                  <img v-bind:src="imgURL1" alt="img1">
                </div>
              </div>
            </div>
            <div class="alternationImage-content alternation-revers">
              <div class="col-block text-block">
                <div class="section-block left-section">
                  <h1>At Alprime our mission is offering true alternatives to traditional investments by thinking outside the box.</h1>
                </div>
              </div>
              <div class="col-block image-block">
                <div class="section-block left-section">
                  <img v-bind:src="imgURL2" alt="img2">
                </div>
              </div>
            </div>

        </div>
      </transition>
      <!-- <div class="main-footer">
        <section class="main-footer-logo">head-line</section>
        <section class="main-footer-menu">body-line</section>
        <section class="main-footer-police">head-line</section>
      </div> -->
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
      }
  },
  // data() {
  //   return{
      // mainPos: -500,
      // innerHeight: 0,
      // mainContentPos: 0,
  //   }
  // },
  // mounted: function () {
  //   window.addEventListener('scroll', this.handleScroll);
  //   this.init();
  // },
  // destroyed: function () {
  //   window.removeEventListener('scroll', this.handleScroll);
  // },
  // methods: {
  //   handleScroll() {
  //     this.mainContentPos = document.getElementById('mainContent').getBoundingClientRect().top ;
  //     this.innerHeight = window.innerHeight;
  //     this.resize();
  //   },
  //   init(){
  //     this.mainContentPos = document.getElementById('mainContent').getBoundingClientRect().top ;
  //     this.innerHeight = window.innerHeight;
     
  //     this.resize();
  //   },
  //   resize(){
  //      this.mainPos = (this.innerHeight - 300 -50 )  * -1  ;
  //   }
  // },
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
.transiton-box{
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
  background-color: rgba(0,0,0,.1);
  border:  1px solid red;
 
}
.right-block{
  background-color: rgba(0,0,0,.3);
  border:  1px solid green;
}

.section-block{
  margin: 1.6rem;
  @media (min-width: 992px){
    margin: 8rem ;
  } 
}
.left-section{
  border:  1px dotted red;
}
.right-section{
  border:  1px dotted yellow;
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
.col-block{
  // width: 100%;
  // @media (min-width: 992px){
  //   width: 50%;
  // }
}
.text-block{
  background-color: rgba(0,0,0,.1);
  border:  1px solid red;
  width: 30%;
 
}
.image-block{
  background-color: rgba(0,0,0,.3);
  border:  1px solid green;
  width: 70%;
  padding: 1rem;
}
.image-block img{
  width: 100%;
  height: auto;
}


// .main-footer{
//   padding: 1rem 1rem;
//   width:100%;
//   height: 20vh;
//   background-color: $footer-color-color;
//   color: $footer-color-text;
//横スクロール処理
  // width: auto;
  // min-width: 100vw;
// }
</style>
