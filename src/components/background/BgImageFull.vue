<template>
  <div class="bgImageFull" 
  :style="{ 'background-image': 'url(' + img + ') '  }">
    <div class="bg_filter"></div>
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
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;

}
.bg_filter{
      //black base
      background-color: rgba(0,0,0,.7);
      //blue
      // background-color: rgba(9,0,51,.7);
      position: fixed;
      top: 0;
      left: 0;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
  }

</style>
