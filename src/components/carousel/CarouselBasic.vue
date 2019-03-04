<template>
  <div class="carouselBasic">
    <div id="vue-carousel" class="vue-carousel">

      <transition :name="transition_name">
        <div class="vue-carousel_body"
          :key="index"
          v-for="(content, index) in contents"
          v-if="visible_content == index"
          :style="{backgroundColor: content.bg_color}">
          {{ content.title }}
        </div>
      </transition>

      <div class="vue-carousel_footer">
        <button @click="back()" :disabled="visible_content == 0">PREV</button>
        <div class="vue-carousel_footer_dot" v-for="(contents, index) in contents" :key="index" :class="{'is-visible' : visible_content == index}"></div>
        <button @click="next()" :disabled="visible_content == contents.length - 1">NEXT</button>
      </div>

    </div>
  </div>
  
</template>

<script>
//  import HeaderLogo from '@/components/header/HeaderLogo.vue' 
//  import MobileMenu from '@/components/header/MobileMenu.vue' 
 export default {
  name: 'CarouselBasic',
//   components: {
//     MobileMenu,
//     HeaderLogo,
//   },
  props: {
    msg: String
  },
   data () {
      return {
       contents: [{
          title: 'Content 1',
          bg_color: '#7bbff9',
        },{
          title: 'Content 2',
          bg_color: '#f16972',
        },{
          title: 'Content 3',
          bg_color: '#20d2a3',
        }],

        transition_name: 'show-next',
        visible_content: 0,
      }
  },
  methods: {
    back(){
      this.transition_name = 'show-prev';
      this.visible_content--;
    },
    next(){
      this.transition_name = 'show-next';
      this.visible_content++;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
.carouselBasic{
    padding: 10rem;
  // width: 100%;
  // height: 100%;
  // margin-top: $header-height;
}
.vue-carousel{
  height: 200px;
  overflow: hidden;
  position: relative;
  width: 300px;
  &_body{
    color: #fff;
    height: 150px;
    left: 0;
    line-height: 150px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%;    
  }
  &_footer{
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: space-between;
    position: absolute;
    top: 150px;
    width: 100%;
    &_dot{
     background-color: #abc2ce;
      border-radius: 50%;
      height: 6px;
      width: 6px;
      &.is-visible{
        background-color: #7b94f9;
      }
    }
  }
}

.show-next-enter-active, .show-next-leave-active,
.show-prev-enter-active, .show-prev-leave-active  {
  transition: all .4s;
}
.show-next-enter, .show-prev-leave-to {
  transform: translateX(100%);
}
.show-next-leave-to, .show-prev-enter {
  transform: translateX(-100%);
}
</style>
