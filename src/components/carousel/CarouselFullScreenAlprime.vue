<template>
  <div class="carouselFullScreenAlprime">
    <div class="carousel-wrapper">
      <div id="vue-carousel" class="vue-carousel ">
          <!-- nav -->
          <div class="fixed-layer">
            <div class="nav-position">
              <span v-on:click="back_page()"><i class="fas fa-angle-left"></i></span>
            </div>
            <div class="nav-position" >
              <span v-on:click="next_page()"><p><i class="fas fa-angle-right"></i></p></span>
            </div>
          </div>
          <!-- slider -->
          <transition-group  v-bind:name="transition_name" >
            <div class="vue-carousel_body" :key="index"
                v-for="(content, index) in contents"
                v-if="visible_content == index">
                <!-- fullscreen-img -->
                <div class="full-img-wrap "
                    v-bind:style="{ 'background-image' : 'url(' + contents[index].imgURL + ')' }"
                >
                <div class="bg_filter"></div>
                  <!-- <img v-bind:src="contents[index].imgURL" alt="slide image" id="section1"> -->
                </div>
                 <!-- <div class="full-img-Wrap">
                  <img v-bind:src="contents[index].imgURL" alt="slide image" id="section1">
                </div> -->

            </div>
          </transition-group>
      </div>
    </div>
</div>
</template>

<script>
 export default {
  name: 'CarouselFullScreenAlprime',
  props: {
    msg: String
  },
   data () {
      return {
        bg_cnt: 0,
        acrInterval: null,
        bg_acrInterval: null,
        arr_interval: [],
        
        contents: [{
              title: 'img1',
              bg_color: '#7bbff9',
              imgURL: require("../../assets/img/img1578.jpg"),
            },{
              title: 'img2',
              bg_color: '#f16972',
              imgURL: require("../../assets/img/fuji1.jpg"),
            },{
              title: 'img3',
              bg_color: '#f16972',
              imgURL: require("../../assets/img/img4130b.jpg"),
            },{
              title: 'img4',
              bg_color: '#20d2d3',
              imgURL: require("../../assets/img/img3668.jpg"),
            }],
        transition_name: 'show-next',
        visible_content: 0,
        contents_number: null,
      }
  },
  
  beforeDestroy () {
    // alert('beforeDestroy');
    // console.log('clearInterval')
    // clearInterval(this.bg_acrInterval)
    clearInterval(this.arr_interval.shift());
  },
  mounted: function() {
    this.contents_number = this.contents.length;
    this.autoSlide();
  },
  methods: {
    back_page() {
      // this.transition_name = 'show-prev';
      this.transition_name = 'show-prev-alprime';
      this.transition_text = 'show-prev-text';
      if((this.visible_content - 1) === -1) {
        this.visible_content = (this.contents_number - 1);
      }else{
        this.visible_content--;
      }
      clearInterval(this.arr_interval.shift());
      this.bg_acrInterval = setInterval(this.renderBg, 5000);
      this.arr_interval.push(this.bg_acrInterval);
    },
    next_page() {
      // this.transition_name = 'show-next';
      this.transition_name = 'show-next-alprime';
      this.transition_text = 'show-next-text';
      this.visible_content =  (this.visible_content + 1) % this.contents_number;
      clearInterval(this.arr_interval.shift());
      this.bg_acrInterval = setInterval(this.renderBg, 5000);
      this.arr_interval.push(this.bg_acrInterval);
    },
    autoSlide(){
      // alert('auto slidr');
      this.bg_acrInterval = setInterval(this.renderBg, 5000);
      this.arr_interval.push(this.bg_acrInterval);
      // alert(this.bg_acrInterval); 
      // console.log(this.bg_acrInterval);
    },
    renderBg: function(){
      // this.bg_cnt++
      // alert('cnt: ' + this.bg_cnt);
      this.transition_name = 'show-next-alprime';
      this.transition_text = 'show-next-text';
      this.visible_content =  (this.visible_content + 1) % this.contents_number;
      // this.arr_interval.push(this.bg_acrInterval);
      // if(this.bg_cnt > 2){
        // clearInterval(this.arr_interval.shift());
        // clearInterval(this.bg_acrInterval);
        // alert('stop interval');
      // }
    },

    // this.bg_acrInterval = setInterval(this.renderBg, 10);
     //  var element1 = document.getElementById(this.nextPositon);
      //    setTimeout(() => {
      //      element1.scrollIntoView({behavior: "smooth", block: "center"});

      //   }, 2000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
.carouselFullScreenAlprime{
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: calc( #{ $header-height } * -1 );
}
.carousel-wrapper{
  position:relative;
  width: 100vw;
  height:100vh;
  background-color: rgba(0,0,0, .5);
}
.vue-carousel {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  &_body {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   }
}
.img-wrap{
  width: 50%;
  height:  auto;
}
.full-img-wrap{
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
}

img{
  width: 100%;
  height: auto;
  display:block;
}
.bg_filter{
      background-color: rgba(0,0,0,.6);
      position: fixed;
      top: 0;
      left: 0;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      //横スクロール処理
      min-width: 100vw;
  }
//nav
.fixed-layer{
  position:fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  z-index: 10;
  width: 100vw;
  height: 100vh;
}
.fixed-layer{
  .nav-position{
    // transform: rotate(-90deg);
    width:12rem;
    margin: 3rem 2rem 3rem 0 ;
    @media(min-width: 996px){
      margin: 3rem 10rem 3rem 0;
    }
    text-align:right;
    cursor: pointer;
    &:hover{
      opacity: .5;
    }
  }
}

</style>
