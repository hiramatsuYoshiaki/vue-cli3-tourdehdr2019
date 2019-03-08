<template>
  <div class="worksContent">
    <main>
      <div class="main-header">
        <section class="main-header-text">
          head-line
        </section>
      </div>

      <transition name="mainCon" appear>
        <div id="mainContent" class="main-content">
        <!-- <div id="mainContent" class="main-content" 
        v-bind:style="{ transform: 'translateY(' + mainPos + 'px )'  }"> -->
            <section class="main-content-title">head-line</section>
            <section class="main-content-body">body-line</section>
        </div>
      </transition>

      <!-- <div class="main-footer">
        <section class="main-footer-logo">head-line</section>
        <section class="main-footer-menu">body-line</section>
        <section class="main-footer-police">head-line</section>
      </div> -->
      <!-- <div class="container-fluid">
        <div class="row">
            <div class="col-12">
              <div class="main-header">
                <div class="main-header-wrape">
                  <p>main header</p>
                  <h1>Vue-cli3 Template Works</h1>
                </div>
              </div>
            </div>
            <div class="col-12">
              <section class="main-section">
                <p>main section</p>
                <h1>Vue-cli3 Template Detail</h1>
                <ul>
                  <li>
                    <p>unit</p>
                    <p>unit</p>
                    <p>unit</p>
                    <p>unit</p>
                    <p>unit</p>
                  </li>
                </ul>
              </section>
            </div>
            <div class="col-12">
              <div class="main-footer">
                <p>main footer</p>
                <h3>h-works vue tenplate v0.1</h3>
              </div>
            </div>
        </div>
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
  data() {
    return{
      mainPos: -500,
      innerHeight: 0,
      mainContentPos: 0,
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
      this.mainContentPos = document.getElementById('mainContent').getBoundingClientRect().top ;
      this.innerHeight = window.innerHeight;
      this.resize();
    },
    init(){
      this.mainContentPos = document.getElementById('mainContent').getBoundingClientRect().top ;
      this.innerHeight = window.innerHeight;
     
      this.resize();
    },
    resize(){
       this.mainPos = (this.innerHeight - 300 -50 )  * -1  ;
    }
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
  height: calc( 100vh - #{ $header-height } ) ;
  padding: 1rem 1rem;
  border: 1px solid green;
  //横スクロール処理
  width: auto;
  min-width: 100vw;
}
.main-content{
  position: absolute;
  top: 30vh;
  left: 0;
  // z-index: 1;
  width:100%;
  height: 200vh;
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
.mainCon-enter-active, .mainCon-leave-active {
    // transition: all .5s 1s ease-out;
     //transition: all .1s  .5s  cubic-bezier(0.320, 0.625, 0.580, 1.000);//sharp
    //  transition: all .5s  1s  cubic-bezier(0.170, 0.935, 0.305, 1.000)//stylish
    // transition: all 1s  .5s  cubic-bezier(0.330, 1.700, 0.510, 0.820);//bounds
     transition: all 1s  .5s  cubic-bezier(0.545, 0.080, 0.520, 0.975);//soft
}
.mainCon-enter, .mainCon-leave-to {
    // opacity: 1;
    transform: translateY(2000px);
    // position: absolute;
    // top: 30vh;
    // left: 0;
}
</style>
