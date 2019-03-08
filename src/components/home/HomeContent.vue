<template>
  <div class="homeContent">
    <main>

      <!-- <transition appear >
        <div class="pageChenge" v-if="isChenge"></div>
      </transition> -->

      <div class="main-header">
        <section class="main-header-text">head-line</section>
       
        <!-- <transition name="home">
          <div class="test enter" v-if="page === 'home' ">
              <h1 >page transition</h1>
          </div>
        </transition > -->
       
        <!-- <transition name="works">
          <div class="test leave" v-if="page === !'home' ">
              <h1 >page transition</h1>
          </div>
        </transition> -->
        
        <!-- <p>page: {{ page }}</p> -->
        <!-- <p>
          <button @click="clickHome" style="color: black">home</button>
          <button @click="clickWorks" style="color: black">works</button>
        </p> -->

        <!-- <p>{{ count }}</p> -->

        <!-- <p>
          <button @click="increment">+</button>
          <button @click="decrement">-</button>
        </p> -->

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
  data: function(){
    return {
      isChenge: true,
    }
  },
  //test storexxxxxxxxxxxxxxxxxxxxxxxx
  computed: {
    count () {
    return this.$store.state.count
    },
    
    page () {
    return this.$store.state.page
    },
  },
  //test storexxxxxxxxxxxxxxxxxxxxxxxx
   methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
     this.$store.commit('decrement')
    },
    clickHome () {
     this.$store.commit('clickHome')
    },
    clickWorks () {
     this.$store.commit('clickWorks')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
// .test{
//   position: absolute;
//   top: 25%;
//   left: 0;
//   width: 100%;
//   height: 25%;
//   background: green;
//   color: white;
//   display: flex;
//   justify-content: center;
//   align-items:center;
// }
// .enter{
//   top: 15%;
//   background: green;
//   transform: translateX(100%);
// }
// .leave{
//   top: 45%;
//   background: yellow;
//   transform: translateX(0);
// }
// .home-enter-active, .home-leave-active {
//     transition: all .5s;
// }
// .home-enter {
//     opacity: 1;
//     transform: translateX(0);
// }
// .home-leave-to {
//     opacity: 1;
//     transform: translateX(0);
// }
// .works-enter-active, .works-leave-active {
//     transition: all 1.5s ;
// }
// .works-enter, .works-leave-to {
//     opacity: 1;
//     transform: translateX(-100%);
// }

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
// .pageChenge{
//   position:absolute;
//   top: 0;
//   left: 0;
//   z-index: 300;
//   width: 100vw;
//   height: 100vh;
//   background-color: rgba(9,0,51,1);
//   background-color: #212121;
//   opacity: 1;
//   transform: translateX(100%);
// }
// .v-enter-active, .v-leave-active {
//     transition: all .5s 3.5s;
// }
// .v-enter, .v-leave-to {
//     opacity: 1;
//     transform: translateX(0);
// }

// .v-enter-active, .v-leave-active {
//     animation: pagechenge 2s ease 1.5s 3.5s;
//   }
// @keyframes pagechenge {
//   0% {
//     transform: translateX(0);
//   }

//   50% {
//     transform: translateX(0);
//   }

//   100% {
//     transform: translateX(0);
//   }
// }

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
  width:100%;
  height: auto;
  padding: 1rem 1rem;
  border: 1px solid lightblue;
  background-color: $main-contents-color;
  color: $main-contents-text;

//横スクロール処理
  width: auto;
  min-width: 100vw;
}
.main-footer{
  padding: 1rem 1rem;
  width:100%;
  height: 20vh;
  border: 1px solid yellow;
  background-color: $footer-color-color;
  color: $footer-color-text;

//横スクロール処理
  width: auto;
  min-width: 100vw;
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
