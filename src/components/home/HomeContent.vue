<template>
  <div class="homeContent">
    <main>
        <div class="main-header">main header</div>
        <section class="main-section">main section</section>
        <div class="main-footer">main footer</div>
        <!-- <dvi class="container-fluid">
            <div class="row">
                <div class="col-12 ">
                    <div class="con-header ">content header</div>
                </div>
            </div>
        </dvi> -->
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
.homeContent{
    width: 100%;
    // height: 200vh;
    border: 1px solid #fff;
}
</style>
