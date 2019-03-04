<template>
  <div class="carouselFullScreenBasic">
    <div id="vue-carousel" class="vue-carousel">
      <transition :name="transition_name">
        <div class="vue-carousel_body"
          :key="index"
          v-for="(content, index) in contents"
          v-if="visible_content == index"
          :style="{backgroundColor: content.bg_color}">
          <div class="slider-content" >
                <div class="title">
                    <h2>{{ content.title }}</h2>
                    <h2>{{ content.title }}</h2>
                    <h2>{{ content.title }}</h2>
                </div>
                <div class="link">
                    {{ content.title }}
                </div>
          </div>
        </div>
      </transition>

      <div class="vue-carousel_nav">
        <button @click="back()" 
        :disabled="visible_content == 0">PREV</button>
        <button @click="next()" 
        :disabled="visible_content == contents.length - 1">NEXT</button>
      </div>
      <div class="vue-carousel_footer">
        <div class="vue-carousel_footer_dot" 
        v-for="(contents, index) in contents" :key="index" 
        :class="{'is-visible' : visible_content == index}"></div>
      </div>

    </div>
  </div>
  
</template>

<script>
//  import HeaderLogo from '@/components/header/HeaderLogo.vue' 
//  import MobileMenu from '@/components/header/MobileMenu.vue' 
 export default {
  name: 'CarouselFullScreenBasic',
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
.carouselFullScreenBasic{
//   width: 100vw;
//   height: 100vh;
  // margin-top: $header-height;
  // width:  100vw;
  // margin-top: $header-height; // 5rem;
  // margin-bottom: $footer-height; // 5rem;
}
.vue-carousel{
  position: relative;
  overflow: hidden;
  //   width: 300px;
  //   height: 200px;
  width: 100vw;
  height: 100vh;
  
  

  &_body{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
  }
  &_nav{
    position: absolute;
    top: 50%;
    right: 0;
    width: 6rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    color: black;
  }
  &_footer{
    position: absolute;
    bottom: 0;
    left: 0;
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: space-between;
    width: 200px;
    border: 1px solid black;

    &_dot{
     background-color: #212121;
     background-color: red;
    //   border-radius: 50%;
      height: 5px;
      width: 25px;
      &.is-visible{
        background-color: #212121;
        opacity: .5;
      }
    }

  }
  
}
.slider-content{
    width: 50%;
    height: 25%;
    padding: 1.6rem 10rem;
    border: 1px solid black;
}
    
.title{
    color: green;
}

.link{
    color: blue;

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
