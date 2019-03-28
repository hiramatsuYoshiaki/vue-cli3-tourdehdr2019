<template>
  <div class="bgImageFull">

    <transition name="bgTran" appear>
      <div class="bgImage" 
      :style="{ 'background-image': 'url(' + img + ') '  }">
        <div class="bg_filter"></div>
      </div>
    </transition> 

  </div>
</template>


<script>
 export default {
  name: 'BgImageFull',
  props: {
    msg: String,
    img: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
.bgImageFull{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

//横スクロール処理
  // width: auto;
  // min-width: 100vw;
  width: 100vw;
}
.bgImage{
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  // width: 100%;
  // height: 100%;
  width: 100vw;
  height: 100vh;
  transform-origin:  center ;
}
.bg_filter{
      background-color: rgba(0,0,0,.6);
      position: fixed;
      top: 0;
      left: 0;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;

      //横スクロール処理
      min-width: 100vw;
  }
.bgTran-enter-active, .bgTran-leave-active {
    // transition: all .5s  .5s  ease-out;
     //transition: all .5s  .5s  cubic-bezier(0.320, 0.625, 0.580, 1.000);//sharp
     transition: all .5s  .5s  cubic-bezier(0.170, 0.935, 0.305, 1.000)//stylish
    // transition: all .5s  .5s  cubic-bezier(0.330, 1.700, 0.510, 0.820);//bounds
     //transition: all .5s  .5s  cubic-bezier(0.545, 0.080, 0.520, 0.975);//soft
}
.bgTran-enter, .bgTran-leave-to {
    opacity: .5;
    transform: scale(1.2);
}
</style>
