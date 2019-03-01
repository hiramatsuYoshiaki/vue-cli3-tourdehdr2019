<template>
  <div class="homeContent">
    <main>
      <div class="container-fluid">
        <div class="row">
            <div class="col-12">
              <div class="main-header">
                <p>main header</p>
                <h1>Vue-cli3 Template Alprime</h1>
              </div>
            </div>
            <div class="col-12">
              <section class="main-section">
                <p>main section</p>
                <h1>Vue-cli3 Template Detail</h1>
                <ul>
                  <li>
                    <p>unit</p>
                    <p>unit</p>
                    <p>unit</p>
                    <p>unit</p>
                    <p>unit</p>
                  </li>
                </ul>
              </section>
            </div>
            <div class="col-12">
              <div class="main-footer">
                <p>main footer</p>
                <h3>h-works vue tenplate v0.1</h3>
              </div>
            </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeContent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
.homeContent{
    width: 100%;
    height: 200vh;
    padding-top: $header-height;
    overflow: hidden;
}
main{
  padding: 1rem 0;
}
.main-header{
  padding: 1rem 0;
}
.main-section{
  padding: 1rem 0;
}
.main-footer{
  padding: 1rem 0;
}

</style>
