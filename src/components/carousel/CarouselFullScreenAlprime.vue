<template>
  <div class="carouselFullScreenAlprime">
    <div class="carousel-wrapper">
      <!-- nav -->
      <div class="carousel-nav">
        <div class="nav-position">
          <span v-on:click="back_page()"><i class="fas fa-angle-left"></i></span>
        </div>
        <div class="nav-position" >
          <span v-on:click="next_page()"><p><i class="fas fa-angle-right"></i></p></span>
        </div>
      </div>
      <!-- pagination -->
      <div class="carousel-pagination">
        <div class="pagination-position">
          <div class="pagination-box" v-on:click="back_page()">
            <div class="pagination-text">01</div>
            <div class="active-line"></div>
            <div class="pagination-mark"></div>
          </div>
          <div class="pagination-box" v-on:click="back_page()">
            <div class="pagination-text">02</div>
            <div class="active-line"></div>
            <div class="pagination-mark"></div>
          </div>
          <div class="pagination-box" v-on:click="back_page()">
            <div class="pagination-text">03</div>
            <div class="active-line"></div>
            <div class="pagination-mark"></div>
          </div>
        </div>
      </div>
      <!-- link -->
      <!-- <div id="vue-carousel" class="vue-carousel "> -->
      <!-- <div class="carousel-link"> -->
        <!-- <div class="link-position">
              <div class="vue-carousel-title"><h1>Image Title Text</h1></div>
              <div class="vue-carousel-title"><h2>Image Sub Title Text</h2></div>
              <div class="vue-carousel-detail"><p>Image Detail testTesxt</p></div>
              <div class="vue-carousel-link" v-on:click="next_page()"><p>Image link Next <span ><i class="fas fa-angle-right"></i></span></p></div>
        </div> -->
        <!-- <transition-group  v-bind:name="transition_name" > -->
        <!-- <transition-group > -->
          <!-- <div class="vue-carousel_body" :key="index"
              v-for="(content, index) in contents"
              v-if="visible_content == index"> -->
              <!-- fullscreen-img -->
              <!-- <div class="full-img-wrap" > -->
                <!-- <section class="text-section">
                  <div class="text-section_wrap">
                    <div class="vue-carousel-title"><h1>Image Title Text</h1></div>
                    <div class="vue-carousel-title"><h2>Image Sub Title Text</h2></div>
                    <div class="vue-carousel-detail"><p>Image Detail testTesxt</p></div>
                    <div class="vue-carousel-link" v-on:click="next_page()"><p>Image link Next <span ><i class="fas fa-angle-right"></i></span></p></div>
                  </div>
                </section> -->
                <!-- <div class="bg_filter"></div> -->
              <!-- </div> -->
          <!-- </div> -->
        <!-- </transition-group> -->
      <!-- </div> -->

      <div id="vue-carousel" class="vue-carousel ">
          <!-- slider -->
          <transition-group  v-bind:name="transition_name" >
            <div class="vue-carousel_body" :key="index"
                v-for="(content, index) in contents"
                v-if="visible_content == index">
                <!-- fullscreen-img -->
                <div class="full-img-wrap"
                    v-bind:style="{ 'background-image' : 'url(' + contents[index].imgURL + ')' }">
                  <!-- <section class="text-section">
                    <div class="text-section_wrap">
                      <div class="vue-carousel-title"><h1>Image Title Text</h1></div>
                      <div class="vue-carousel-title"><h2>Image Sub Title Text</h2></div>
                      <div class="vue-carousel-detail"><p>Image Detail testTesxt</p></div>
                      <div class="vue-carousel-link" v-on:click="next_page()"><p>Image link Next <span ><i class="fas fa-angle-right"></i></span></p></div>
                    </div>
                  </section> -->
                  <div class="bg_filter"></div>
                </div>
            </div>
          </transition-group>
          <transition-group v-bind:name="transition_name_link">
            <div class="vue-carousel_body_link" :key="content.id"
                v-for="(content) in contents"
                v-if="visible_content == content.id">
                <div class="carousel link">
                <div class="link-position">
                      <div class="vue-carousel-title"><h1>{{content.title }}</h1></div>
                      <div class="vue-carousel-detail"><p>{{content.detail }}</p></div>
                      <div class="vue-carousel-link" v-on:click="next_page()"><p>Image link Next:{{content.link }} <span ><i class="fas fa-angle-right"></i></span></p></div>
                </div>
                </div>
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
              id:0,
              title: 'img1',
              bg_color: '#7bbff9',
              imgURL: require("../../assets/img/img1578.jpg"),
              titel: 'title1',
              detail: 'detail1',
              link: 'link1',
            },{
              id:1,
              title: 'img2',
              bg_color: '#f16972',
              imgURL: require("../../assets/img/fuji1.jpg"),
              titel: 'title2',
              detail: 'detail2',
              link: 'link2',
            },{
              id:2,
              title: 'img3',
              bg_color: '#f16972',
              imgURL: require("../../assets/img/img4130b.jpg"),
              titel: 'title3',
              detail: 'detail3',
              link: 'link3',
            },{
              id:3,
              title: 'img4',
              bg_color: '#20d2d3',
              imgURL: require("../../assets/img/img3668.jpg"),
              titel: 'title4',
              detail: 'detail4',
              link: 'link4',
            }],
        transition_name: 'show-next',
        transition_name_link: 'show-next-link',
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
      this.transition_name_link = 'show-prev-alprime-link';
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
      this.transition_name_link = 'show-next-alprime-link';
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
      this.transition_name_link = 'show-next-alprime-link';
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
//nav
.carousel-nav{
  position:fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  z-index: 10;
  width: 10%;
  height: 50%;
  border: 1px solid  red;
}
.carousel-nav{
  .nav-position{
    border: 1px solid  yellow;
    // transform: rotate(-90deg);
    width:100%;
    margin: 3rem 2rem 3rem 0 ;
    @media(min-width: 996px){
      margin: 3rem 10rem 3rem 0;
    }
    text-align:center;
    cursor: pointer;
    &:hover{
      opacity: .5;
    }
  }
}
//pagination
.carousel-pagination{
  position:fixed;
  bottom: 0;
  left: 0;
  display: flex;
  z-index: 10;
  width: 90%;
  height: 20%;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid white;
}
.carousel-pagination{
  .pagination-position{
    border: 1px solid  yellow;
    // transform: rotate(-90deg);
    width:100%;
    height:6rem;
    margin: 0 1rem;
    @media(min-width: 996px){
      margin: 0 10rem ;
    }
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .pagination-box{
      position: relative;
      border: 1px solid  #fff;;
      width: 5rem;
      height:5rem;
      margin-right: 1rem;
      cursor: pointer;
      &:hover{
      opacity: .5;
      }
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      .pagination-text{
        width: 100%;
        height: 100%;
        line-height: 5rem;
        text-align: left;
      }
      .pagination-mark{
        position:absolute;
        bottom: 3px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: rgba(250,250,250,.5)
      }
      .active-line{
        position:absolute;
        bottom: 3px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: red;
      }
    }
  }
}
// carousel link
// .carousel-link{
//   position:fixed;
//   top: 50%;
//   left: 0;
//   display: flex;
//   z-index: 10;
//   width: 90%;
//   height: 50%;
//   transform:  translateY(-50%);
//   justify-content: flex-start;
//   align-items: center;
//   border: 1px solid white;
// }
// .carousel-link{
  .link-position{
    border: 1px solid  yellow;
    // transform: rotate(-90deg);
    width:100%;
    height:100%;
    margin: 0 1rem;
    @media(min-width: 996px){
      margin: 0 10rem ;
    }
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction:column;
  }
// }


//carousel
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
  &_body_link {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid  green;
 }

// .carousel-link{
  .link-position{
    border: 1px solid  yellow;
    // transform: rotate(-90deg);
    width:100%;
    height:100%;
    margin: 0 1rem;
    @media(min-width: 996px){
      margin: 0 10rem ;
    }
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction:column;
  }
}



// .img-wrap{
//   width: 50%;
//   height:  auto;
// }
// img{
//   width: 100%;
//   height: auto;
//   display:block;
// }
.full-img-wrap{
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.text-section{
  position: fixed;
  top: 50vh;
  left: 50vw;
  z-index:10;
  width: 50vw;
  height: 50vh;
  transform: translate(-50%, -50%);
  border: 1px solid  white;
  display: flex;
  justify-content: center;
  align-items: center;
  &_wrap{
    border: 1px solid  yellow;
  }
}
.vue-carousel-link{
  cursor: pointer;
}
.bg_filter{
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  background-color: rgba(0,0,0,.6);
  //横スクロール処理
  min-width: 100vw;
}




</style>
