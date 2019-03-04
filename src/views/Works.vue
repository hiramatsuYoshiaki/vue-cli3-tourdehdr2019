<template>
<div class="works">
  <div class="worksWrap">
      <HeaderBar msg="HeaderBar"
                 navMenu="works"
                 v-bind:headrScrollType="true"
                 v-bind:headrFixedType="false"
                 v-bind:headrStikyType="false"
                
                 v-bind:logoPositionLeft="true"
                 v-bind:logoPositionCenter="false"
                 v-bind:logoPositionRight="false"
      />
      <BgImageFull msg="bgImage" v-bind:img= bgImage />
      <WorksContent msg="WorksContent"/>
  </div>
</div>
</template>


<script>
// @ is an alias to /src
import WorksContent from '@/components/works/WorksContent.vue'
import HeaderBar from '@/components/header/HeaderBar.vue'
import BgImageFull from '@/components/background/BgImageFull.vue'

export default {
  name: 'Works',
  components: {
    WorksContent,
    HeaderBar,
    BgImageFull,
  },
  data () {
    return {
      bgImage: require("../assets/img/fuji1.jpg"),
    }
  },
}
</script>
<style scoped lang="scss">
@import "../assets/scss/common/data/thema.scss";
.works{
  position: relative;
  margin: 0;
  padding:0;
}
.worksWrap{
  background-color: $body-color;
  color: $body-text;
}
</style>
