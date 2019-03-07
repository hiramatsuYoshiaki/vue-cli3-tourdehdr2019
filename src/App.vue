<template>
  <div id="app">
    <!-- loding  ----------------------------------------->
    <!-- <div v-if="isLoading">
      <Spinner/>
    </div> -->
   
    <!-- <div  v-if="isLoading">
      <LoadingCounterBar2 :cnt="progress" />
    </div> -->

    <div  v-if="isLoading">
      <LoadingWrite />
    </div>

    <!-- transition  ----------------------------------------->

    <div  v-if="!isLoading">
        <TransitionScreen msg="bgImage" v-bind:img= bgImage pageView="loading"  />
    </div>

    <!-- contents  ----------------------------------------->
    <div  v-if="!isLoading">
      <router-view /> 
    </div> 
  </div>
</template>
<script>
  import LoadingWrite from '@/components/transition/LoadingWrite.vue'
  import TransitionScreen from '@/components/transition/TransitionScreen.vue'
  export default{
    components: {
      LoadingWrite,
      TransitionScreen,
    },
    data () {
      return {
        isLoading: true,
        bgImage: require("./assets/img/img1578.jpg"),
      }
    },
    created() {
      //loading setting
        setInterval(() => {
          this.isLoading = false;
        }, 3000);
    },
  }
</script>
<style lang="scss">
 @import "./assets/scss/stylus.scss";
</style>