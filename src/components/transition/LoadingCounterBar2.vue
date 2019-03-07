<template>
  <div class="LoadingCounterBar2">
    <p>Now Loading... </p>
    <div class="progress-bar" :style="{'width': cnt + '%'}" :class="{done: cnt >= 100}"></div>
    <h1 class="count">{{cnt}}%</h1>
  </div>
</template>

<script>
export default {
  name: 'LoadingCounterBar2',
  props: {
    // msg: String,
    cnt: Number
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.LoadingCounterBar2{
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
.progress-bar {
  position: absolute;
  top: 80%;
  height: 3px;
  background: rgba(250,250,250,.5);

}
.done {
  top: 0;
  height: 100%;
  width: 100%;
  transition: all .23s ease;
}
.count {
  position: absolute;
  top: 70%;
  width: 100%;
  text-align: center;
  font-weight: 100;
  font-size: 3em;
  margin-top: -1.33em;
  color:  rgba(250,250,250,.5);
}
</style>
