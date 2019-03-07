<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div  v-if="isLoading">
      <LoadingWrite />
    </div>
    <div  v-if="!isLoading">
      <router-view /> 
    </div> 
    <!-- <router-view/> -->
  </div>
</template>
<script>
  import LoadingWrite from '@/components/transition/LoadingWrite.vue'
  export default{
    components: {
      LoadingWrite,
    },
    data () {
      return {
        isLoading: true,
      }
    },
    created() {
      //loading
        setInterval(() => {
          this.isLoading = false;
        }, 3000);
    },
  }
</script>
<style lang="scss">
 @import "./assets/scss/stylus.scss";
</style>