<template>
<div class="about">
  <div class="aboutWrap">
      <HeaderBar msg="HeaderBar"
                 v-bind:headrScrollType="true"
                 v-bind:headrFixedType="false"
                 v-bind:headrStikyType="false"
                 scroll=250
                 v-bind:logoPositionLeft="true"
                 v-bind:logoPositionCenter="false"
                 v-bind:logoPositionRight="false"
      />
      <AboutContent msg="AboutContent"/>
  </div>
</div>
</template>


<script>
// @ is an alias to /src
import AboutContent from '@/components/about/AboutContent.vue'
import HeaderBar from '@/components/header/HeaderBar.vue'

export default {
  name: 'About',
  components: {
    AboutContent,
    HeaderBar,
  }
}
</script>
<style scoped lang="scss">
@import "../assets/scss/common/data/thema.scss";
.about{
  position: relative;
  margin: 0;
  padding:0;
}
.aboutWrap{
  background-color: $body-color;
  color: $body-text;
}
</style>

