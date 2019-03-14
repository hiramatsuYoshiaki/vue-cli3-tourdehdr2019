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
            <section class="main-content-title">head-line</section>
            <section class="main-content-body">body-line</section>
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
}
.transiton-box{
  border: 1px solid red;
  width: 100%;
  overflow: hidden;
  margin-bottom: 0.5rem;
  // cursor: pointer;
}
.main-content{
  // position: absolute;
  // top: 30vh;
  // left: 0;
  width:100%;
  // height: 200vh;
  height: 75vh;
  padding: 1rem 1rem;
  background-color: $main-contents-color;
  color: $main-contents-text;
  //横スクロール処理
  width: auto;
  min-width: 100vw;
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
