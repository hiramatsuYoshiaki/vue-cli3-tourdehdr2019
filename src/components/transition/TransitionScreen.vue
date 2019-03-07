<template>
    <!-- <div class="transitionScreen" v-show="show"
    :style="{ 'background-image': 'url(' + img + ') '  }">
        <div class="bg_filter"></div>
    </div> -->
    <!-- <transition appear > -->
    <div class="transitionScreen" >
        <!-- <div class="pageChenge" v-if="isChenge"></div> -->
        <!-- <div class="pageChenge" ></div> -->
    </div>
    <!-- </transition> -->
</template>


<script>
 export default {
  name: 'TransitionScreen',
  props: {
    msg: String,
    img: String,
  },
  data(){
      return{
          isChenge: true,
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
.transitionScreen{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  background-color: #212121;
  opacity: 1;

  // position:absolute;
  // top: 0;
  // left: 0;
  // z-index: 1000;
  // width: 100%;
  // height: 100%;
  // background-color: rgba(9,0,51,1);
  // background-color: #212121;
  // background-color: red;
  // opacity: 1;
  transform: translateX(100%);

}
.v-enter-active, .v-leave-active {
    transition: all .5s 3.5s;
}
.v-enter, .v-leave-to {
    opacity: 1;
    transform: translateX(0);
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
// .bg_filter{
//       background-color: rgba(9,0,51,1);
//       position: fixed;
//       top: 0;
//       left: 0;
//       min-width: 100%;
//       min-height: 100%;
//       width: auto;
//       height: auto;
//   }


</style>
