<template>
  <div class="footerBar" >
    <footer>
      <dvi class="container-fluid">
        <div class="row">
            <div class="col-4 ">
                <div class="footer-item d-flex-start-center">left</div>
            </div>
            <div class="col-4 ">
                <div class="footer-item d-flex-center-center">left</div>
            </div>
            <div class="col-4 ">
                <div class="footer-item d-flex-end-center">right</div>
            </div>
        </div>
      </dvi>
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
.footerBar{
  position: relative;
  width: 100%;
  background-color: green;
}
.footerBar footer{
    width:100%;
    position: relative;
    border: 1px solid blue;
}
.footerBar .nav-item{
    padding: 0 1rem;
}
</style>
