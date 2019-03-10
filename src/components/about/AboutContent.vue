<template>
  <div class="aboutContent">
    <main>
      <div class="main-header">
        <section class="main-header-text">head-line</section>
      </div>
      <transition name="mainCon" appear>
        <div class="main-content">
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
  name: 'AboutContent',
  props: {
    msg: String
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
.aboutContent{
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
  // height: calc( 100vh - #{ $header-height } ) ;//full header
  padding: 1rem 1rem;
  // border: 1px solid green;
  //横スクロール処理
  width: auto;
  min-width: 100vw;
}
.main-content{
  width:100%;
  // height: auto;
  height: 75vh;


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

</style>
