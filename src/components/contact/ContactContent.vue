<template>
  <div class="contactContent">
    <main>
      <div class="container-fluid">
        <div class="row">
            <div class="col-12">
              <div class="main-header">
                <div class="main-header-wrape">
                  <p>main header</p>
                  <h1>Vue-cli3 Template Contact</h1>
                </div>
                
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
                <h3>h-Works vue tenplate v0.1</h3>
              </div>
            </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ContactContent',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
.contactContent{
    width: 100%;
    height: 100vh;
    // padding-top: $header-height;
    overflow: hidden;
}
main{
  margin: 0;
  padding: 0;
}
.main-header-wrape{
  margin: 5rem 0;
}
.main-header{
  padding: 1rem 0;
  width:100%;
  height: 25rem;
  border: 1px solid green;
}
.main-section{
  padding: 1rem 0;
  border: 1px solid lightblue;
}

.main-footer{
  padding: 1rem 0;
  width:100%;
  height: 20rem;
  border: 1px solid yellow;
}

</style>
