<template>
  <div class="contactContent">
    <main>
      <!-- <div class="main-header">
        <section class="main-header-text">head-line</section>
      </div> -->
      <transition name="mainCon" appear>
        <div class="main-content">
          <!-- section component -->
            <div class="col2-content">
              <div class="col-block left-block">
                <div class="section-block left-section">
                  <div class="contact-title">
                    <h1>Please contact us for </h1>
                    <h1>further information </h1>
                    <h1>about Alprime Capital </h1>
                    <h1>and the products we can </h1>
                    <h1> offer to you.</h1>
                  </div> 
                </div>
              </div>
              <div class="col-block right-block">
                <div class="section-block left-section">
                  <p>hiramatsu3300@gmail.com</p>
                  <p>03-82-3300</p>
                  <p>azabu 143</p>
                  <p>minato ku</p>
                  <p>tokyo</p>
                  <p>japan</p>
                  <p>view on map</p>
                </div>
              </div>
            </div>
        </div>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ContactContent',
  props: {
    msg: String
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
.contactContent{
    position: relative;
    width: 100%;
    height: auto;
    padding-top: $header-height;
}
main{
  margin: 0;
  padding: 0;
}
.main-content{
  width:100%;
  height: calc( 100vh - #{ $header-height } );
  padding: 1rem 1rem;
  // border: 1px solid lightblue;
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
}
.col-block{
  width: 100%;
  @media (min-width: 992px){
    width: 50%;
    height: 100%;
  }
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // flex-direction: column; 
  padding: 1.6rem;
  @media (min-width: 992px){
    padding: 8rem ;
  }
}
.left-block{
  background-color: rgba(0,0,0,.1);
  border:  2px solid red;
}
.right-block{
  background-color: rgba(0,0,0,.3);
  border:  2px solid green;
}
.section-block{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.left-section{
  border:  3px dotted red;
}
.right-section{
  border:  3px dotted yellow;
}
// .contact-title{
//   width:100%;
//   height:50%;
// }
// .main-footer{
//   padding: 1rem 1rem;
//   width:100%;
//   height: 20vh;
//   border: 1px solid yellow;
//   background-color: $footer-color-color;
//   color: $footer-color-text;
//横スクロール処理
  // width: auto;
  // min-width: 100vw;
// }



</style>
