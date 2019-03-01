<template>
<div class="contact">
  <div class="contactWrap">
      <HeaderBar msg="HeaderBar"
                 v-bind:headrScrollType="true"
                 v-bind:headrFixedType="false"
                 v-bind:headrStikyType="false"
                 scroll=250
                 v-bind:logoPositionLeft="true"
                 v-bind:logoPositionCenter="false"
                 v-bind:logoPositionRight="false"
      />
      <ContactContent msg="ContactContent"/>
  </div>
</div>
</template>


<script>
// @ is an alias to /src
import ContactContent from '@/components/contact/ContactContent.vue'
import HeaderBar from '@/components/header/HeaderBar.vue'

export default {
  name: 'Contact',
  components: {
    ContactContent,
    HeaderBar,
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
