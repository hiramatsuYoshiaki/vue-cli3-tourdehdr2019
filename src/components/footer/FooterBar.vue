<template>
  <div class="footerBar" >
      <footer>
        <div class="container-fluid">
          <div class="row">
              <div class="col-12">
                <div class="footer-header">footer header</div>
              </div>
              <div class="col-12">
                <section class="footer-section">footer section</section>
              </div>
              <div class="col-12">
                <div class="footer-footer">footer footer</div>
              </div>
          </div>
        </div>
      </footer>
  </div>
</template>
<script>
 export default {
  name: 'FooterBar',
  props: {
    msg: String
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
.footerBar{
  position: relative;
  width: 100%;
  height: $footer-height;
  background-color: $footer-color;
  color: $footer-text;
  overflow: hidden;
}
footer{
  padding: 1rem 0;
}

</style>
