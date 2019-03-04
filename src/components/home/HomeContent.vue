<template>
  <div class="homeContent">
    <main>
      <div class="main-header">
        <section class="main-header-text">head-line</section>
      </div>
      <div class="main-content">
        <section class="main-content-title">head-line</section>
        <section class="main-content-body">body-line</section>
      </div>
      <div class="main-footer">
        <section class="main-footer-logo">head-line</section>
        <section class="main-footer-menu">body-line</section>
        <section class="main-footer-police">head-line</section>
      </div>
      <!-- <div class="slider-content"> -->
        <!-- <div class="slider-wrap1">
          <CarouselFullScreenBasic />
        </div> -->
        <!-- <div class="slider-wrap2">
          <CarouselBasic />
        </div> -->
      <!-- </div> -->

      <!-- <div class="slider-container">
        <div class="slide-panel">
          <div class="slide-items item1" >
            item1
          </div>
          <div class="slide-items item2">
            item2
          </div>
          <div class="slide-items item3">
            item3
          </div>
        </div>
      </div>

      <div class="nav-btn btn-prev" v-on:click="next_page()">prev</div>
      <div class="nav-btn btn-back"><router-link to="/works" >back</router-link></div> -->
    </main>
  </div>
</template>

<script>
// import CarouselBasic from '@/components/carousel/CarouselBasic.vue'
// import CarouselFullScreenBasic from '@/components/carousel/CarouselFullScreenBasic.vue'
export default {
  name: 'HomeContent',
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
.homeContent{
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
  height: 25vh;
  padding: 1rem 1rem;
  border: 1px solid green;
}
.main-content{
  width:100%;
  height: auto;
  padding: 1rem 1rem;
  border: 1px solid lightblue;
}
.main-footer{
  padding: 1rem 1rem;
  width:100%;
  height: 20vh;
  border: 1px solid yellow;
}
// .slider-content{
//   padding: 0;
// }
// .slider-wrap1{
//   width: 100%;
//   height: 100%;
// }
// .slider-wrap2{
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// }
// .main-header{
//   margin: 0;
//   padding: 0;
// }
// .slider-container{
//   position: absolute;
//   top: 0;
//   left: 0;
//   width:100vw;
//   height: 100vh;
//   overflow: hidden;
//   background-color: red;
//   border: 2px solid green;
// }

// .slide-panel{
//   position: absolute;
//   top: 0;
//   left: 0;
//   width:300vw;
//   height: 50vh;
//   background-color: black;
//   display: flex;
//   flex-direction: row;
//   transform: translateX(0);
//   }
// .slide-items{
//   width:100vw;
//   height: 50vh;
//   border: 1px solid white;
// }

// .item1{
//   background-color: green;
// }
// .item2{
//   background-color: yellow;
// }
// .item3{
//   background-color: indigo;
// }
// .nav-btn{
//   width: 10rem;
//   height: 3.2rem;
//   border: 1px solid white;
//   text-align: center;
//   cursor: pointer;
// }
// .btn-prev{
//   position:absolute;
//   top:50%;
//   right: 0;
// }
// .btn-back{
//   position:absolute;
//   top:55%;
//   right: 0;
// }


</style>
