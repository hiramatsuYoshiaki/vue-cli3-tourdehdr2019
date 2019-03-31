<template>
<div class="projects">
    project 
  <div class="projectsWrap">
      <TransitionScreen msg="bgImage" v-bind:img= bgImage pageView="projects"  />
      <HeaderBar msg="HeaderBar"
                 navMenu="projects"
                 v-bind:headerScrollType= "true"
                 v-bind:headerFixedType= "false"
                 v-bind:headerStikyType= "false"
      />
      <BgImageFull msg="bgImage" v-bind:img= bgImage  />
      <projectsContent msg="projectsContent" pageView="projects"/>
  </div>
</div>
</template>


<script>
// @ is an alias to /src
import projectsContent from '@/components/projects/ProjectsContent.vue'
import HeaderBar from '@/components/header/HeaderBar.vue'
import BgImageFull from '@/components/background/BgImageFull.vue'
import TransitionScreen from '@/components/transition/TransitionScreen.vue'

export default {
  name: 'Projects',
  components: {
    projectsContent,
    HeaderBar,
    BgImageFull,
    TransitionScreen, 
  },
  data () {
    return {
      bgImage: require("../assets/img/img2722.jpg"),
    }
  },
}
</script>
<style scoped lang="scss">
@import "../assets/scss/common/data/thema.scss";
.projects{
  position: relative;
  margin: 0;
  padding:0;
}
.projectsWrap{
  background-color: $projects-body-color;
  color: $projects-body-text;
}
</style>
