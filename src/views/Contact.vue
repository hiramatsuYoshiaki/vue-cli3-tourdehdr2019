<template>
<div class="contact">
  <div class="contactWrap">
    <TransitionScreen msg="bgImage" 
    v-bind:img= bgImage pageView="contact"  />
      <HeaderBar msg="HeaderBar"
                 navMenu="contact"
                 v-bind:headerScrollType="false"
                 v-bind:headerFixedType="true"
                 v-bind:headerStikyType="false"
                
                
      />
      <BgImageFull msg="bgImage"
                   v-bind:img= bgImage />
      <ContactContent msg="ContactContent"/>
  </div>
</div>
</template>


<script>
// @ is an alias to /src
import ContactContent from '@/components/contact/ContactContent.vue'
import HeaderBar from '@/components/header/HeaderBar.vue'
import BgImageFull from '@/components/background/BgImageFull.vue'
import TransitionScreen from '@/components/transition/TransitionScreen.vue'


export default {
  name: 'Contact',
  components: {
    ContactContent,
    HeaderBar,
    BgImageFull,
    TransitionScreen,

  },
  data () {
    return {
      bgImage: require("../assets/img/img3668.jpg"),
    }
  }
}
</script>
<style scoped lang="scss">
@import "../assets/scss/common/data/thema.scss";
.contact{
  position: relative;
  margin: 0;
  padding:0;
}
.contactWrap{
  background-color: $body-color;
  color: $body-text;
}
</style>
