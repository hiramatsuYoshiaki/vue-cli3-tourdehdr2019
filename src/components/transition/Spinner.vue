<template>
  <div class="spinner">
    <div>Now Loading ...</div>
    <div class="spinner1"> </div>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.spinner{
  position: absolute;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212121;

}
.spinner1 {
    position: relative;
    border-radius: 50%;
    border: 2px solid rgba(0, 126, 163, .3);
    background-color: transparent;
    border-right-color: rgba(0, 126, 163, 1);
    width: 30px;
    height: 30px;
    animation: spiner 1s linear infinite;
  }
  
  @keyframes spiner {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
 
</style>
