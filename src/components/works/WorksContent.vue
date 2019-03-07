<template>
  <div class="worksContent">
    <main>
      <div class="main-header">
        <section class="main-header-text">
          head-line
        </section>
      </div>
      <transition name="mainCon" appear>
        <div class="main-content" >
            <section class="main-content-title">head-line</section>
            <section class="main-content-body">body-line</section>
        </div>
      </transition>
      <div class="main-footer">
        <section class="main-footer-logo">head-line</section>
        <section class="main-footer-menu">body-line</section>
        <section class="main-footer-police">head-line</section>
      </div>
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
      // mainPos: 0,
      // innerHeight: 0,
    }
  },
  // mounted: function () {
  //   window.addEventListener('scroll', this.handleScroll);
  //   this.init();
  // },
  // destroyed: function () {
  //   window.removeEventListener('scroll', this.handleScroll);
  // },
  // methods: {
  //   handleScroll() {
  //     this.innerHeight = window.innerHeight;
  //     this.resize();
  //     this.scrollY = window.scrollY;
  //     if(this.scrollY > this.scroll){
  //         this.isScroll = true;
  //     }else{
  //         this.isScroll = false;
  //     }
  //   },
  //   init(){
  //     this.innerHeight = window.innerHeight;
  //     this.resize();
  //   },
  //   resize(){
  //      this.mainPos = this.innerHeight  * -0.75;
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
  height: calc( 100vh - #{ $header-height } ) ;
  padding: 1rem 1rem;
  border: 1px solid green;
}
.main-content{
  width:100%;
  height: auto;
  padding: 1rem 1rem;
  background-color: $main-contents-color;
  color: $main-contents-text;
  transform: translateY(-800px);
} 

.main-footer{
  padding: 1rem 1rem;
  width:100%;
  height: 20vh;
  // border: 1px solid yellow;
  background-color: $footer-color-color;
  color: $footer-color-text;
}
.mainCon-enter-active, .mainCon-leave-active {
    transition: all .5s 1s ease-out;
}
.mainCon-enter, .mainCon-leave-to {
    // opacity: 1;
    transform: translateY(-300px);
}
</style>
