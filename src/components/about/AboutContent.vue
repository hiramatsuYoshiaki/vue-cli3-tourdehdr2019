<template>
  <div class="aboutContent">
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
      <!-- <div class="container-fluid">
        <div class="row">
            <div class="col-12">
              <div class="main-header">
                <div class="main-header-wrape">
                  <p>main header</p>
                  <h1>Vue-cli3 Template About</h1>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="main-content">
                <p>main content</p> 
                <section class="main-section">
                  <p>main section1</p> 
                  <h1>Vue-cli3 Template Text</h1>
                  <h1>h1:2.5rem</h1>
                  <h2>h2:2.0rem</h2>
                  <h3>h3:1.75rem</h3>
                  <h4>h4:1.5rem</h4>
                  <h5>h5:1.25rem</h5>
                  <h6>h6:1.0rem</h6>
                  <p>p:1.0rem</p>
                </section>
                <section class="main-section">
                  <p>main section2</p> 
                  <h1>Vue-cli3 Template Detail</h1>
                </section>
              </div>
            </div>
            <div class="col-12">
              <div class="main-footer">
                <p>main footer</p>
                <h3>h-Works vue tenplate v0.1</h3>
              </div>
            </div>
        </div>
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

</style>
