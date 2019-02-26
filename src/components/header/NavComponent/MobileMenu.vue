<template>
  <div class="MobileMenu" >
    <div class="m-bar ">
        <div class="m-bar-wrap" v-on:click="active = !active">
            <div class="upper-bar" v-bind:class="{ close_upper: active, open_upper: !active }"></div>
            <div class="under-bar" v-bind:class="{ close_under: active, open_under: !active }"></div>
        </div>
        
      <!-- <div class="menu-wrap" v-bind:class="{ menuExpanded: active }"> -->
      <!-- <div class="menu-wrap" > -->
          
          <!-- <div class="menu" v-on:click="active = !active">
              <div class="bar" v-bind:class="{ bar_expand_color: active, bar_color: !active }"></div>
              <div class="menu-text" v-bind:class="{ menu_text_color_exp: active, menu_text_color: !active }">MENU</div>
          </div> -->
          <!-- <div class="menu" >
              <div class="bar" ></div> -->
              <!-- <div class="menu-text" >MENU</div> -->
          <!-- </div> -->
          <!-- <nav v-bind:class="{ on_nav: active }">
            <div  id="nav_bg" v-bind:class="{ open_menu: active }"></div>
            <section id="nav_body " >
                <div class="nav-inner" v-on:click="active = false">
                    <div class="nav_item" v-bind:class="{ on_item: active }">
                      <span><router-link to="/" >HOME</router-link></span>
                      <span><router-link to="/project" >STAGE</router-link></span>
                      <span><router-link to="/awards" >AWARDS</router-link></span>
                    </div>
                </div>
            </section>
          </nav> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: {
    msg: String
  },
  data () {
      return {
          active: true,
          scrollY: 0,
          isScroll: false,
      }
 },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);
  },
 methods: {
   handleScroll() {
      this.scrollY = window.scrollY;
      if(this.scrollY > 250){
        this.isScroll = true;
      }else{
        this.isScroll = false;
      }
   }
 },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../assets/scss/common/data/thema.scss";
.MobileMenu{
    width:100%;
    height: 100%;
    // height:$header-height; //5rem;
    position: absolute;
    z-index: 1000;
    display:block;
    top: 0;
    left: 0;
    z-index: 100;
    // background-color: rgba(256,256,256,.8);
    // color: #fff;
    // border: 1px solid yellow;
}
// .fadeOut{
//     display:none !important;
// }

//menu-humberger-menu
.m-bar{
    position: absolute;
    top: 0;
    left: 0 ;
    width:2rem;
    height:2rem;
    margin:1rem 1rem;
    z-index: 101;
    cursor: pointer;
    // background-color: rgba(0,0,0,1);
    // color: #fff;
}
.m-bar-wrap{
    position:relative;
    width:100%;
    height: 100%;
    overflow: hidden;
}
.upper-bar, .under-bar {
    position: absolute;
    top: 50%;
    left: 0;
    width: 2rem;
    height: 2px;
    background-color: #fff;
}
.close_upper{
    transform-origin: center center;
    transform: translateY(-.25rem) ;  
}
.open_upper{
    transform-origin: center center;
    transform: rotate(45deg) ; 
}

.close_under{
    transform-origin: center center;
    transform: translateY(.25rem) ; 
}
.open_under{
    transform-origin: center center;
    transform: rotate(-45deg) ; 
}
// .upper-bar{
//     position: absolute;
//     top: 50%;
//     left: 0;
//     width: 2rem;
//     height: 2px;
//     margin-top: 33.3333%;
//     background-color: yellow;
//     transform-origin: center center;
//     transform: rotate(-45deg) ;
// }

// .under-bar{
//     position: absolute;
//     top: 50%;
//     left: 0;
//     width: 2rem;
//     height: 2px;
//     margin-top: 66.6666%;
//     background-color: red;
//     transform-origin: center;
//     transform: rotate(45deg) ;
// }


.menu-wrap {
    transition: all .5s;
    cursor: pointer;
    position: relative;
    width: 100%;
    display: flex;
    // justify-content: flex-start;
    justify-content: center;
    // justify-content: flex-end;
 }
.menu{
    position: relative;
    width: 6rem;
}


// .menu-text{
//     position: absolute;
//     top: .2rem;
//     left: 2rem;
//     z-index: 100;
//     color: $nav_icon;
//     font-family: "Lato", "Open Sans", sans-serif;
//     font-size: 1.2rem;
//     font-weight: 400;
//     line-height:  2.4rem;
//     opacity:0;
//     @media (min-width: 1024px) {
//         opacity:1;
//     }
// }
// .menu_text_color_exp{
//     color: $nav_icon_exp !important;
//     transition: color  .25s .5s ;
// }
// .menu_text_color{
//     color: $nav_icon !important;
//     transition: color  .25s 2s ;
// }

// .b-a {
//     transition: all .5s;
//     content: "";
//     position: absolute;
//     left:0;
//     top:0;
//     height: .2rem;
//     width: 1.75rem;
//     border:none;
//  }
//  .bar {
//     @extend .b-a;
//     position: absolute;
//     top:1.125rem;
//     z-index: 100;
//     @media (min-width: 1024px) {
//     }
   
//     &:before {
//        @extend .b-a;
//        top: -0.5625rem;
//     }
//     &:after {
//        @extend .b-a;
//        top: 0.5625rem;
//     }
//  }
 
//  .bar_expand_color{
//     background-color: $nav_icon_exp;
//     transition-delay: .5s !important;
//     &:before, &:after{
//         background-color: $nav_icon_exp;
//         transition-delay: .5s !important;
//     }
//  }
//  .bar_color{
//     background-color: $nav_icon;
//     transition-delay: 1.25s !important;
    
//     &:before, &:after {
//         background-color: $nav_icon;
//         transition-delay: 1.25s !important;
//     }
//  }
//  .b-a-expanded {
//     transition: all .25s;
//     top: -0px;
//  }
//  .menuExpanded {
//     transition: all .5s;
//     line-height:  2.4rem;
//     .bar {
//         background-color: transparent !important;
//         transition: all .5s;
//         &:before {
//            @extend .b-a-expanded;
//            transform: rotate(45deg);
//         }
//         &:after {
//            @extend .b-a-expanded;
//            transform: rotate(-45deg);
//         }
//      }
//  }


//  nav {
//     top: 0;
//     left: 0;
//     position: absolute;
//     z-index: 1;
//     width: 100%;
//     height: 100%;
//     left: -9999px;
//     transition-delay: 1.25s; 
//     &.on_nav{
//         left: 0px ;
//         transition-delay: .2s; 
//     }
//     #nav_bg {
//          &::before{
//              content: "";
//              margin:-1rem;
//              transition: all 1s cubic-bezier(0.77, 0, 0.175, 1);
//              transform: scale(1, 1) translate(0%, -100%);
//              display: block;
//              width: 100vw;
//              height: 100vh;
//              border-radius: 0%;
//              background-color:$nav_bg_color;
//              position: fixed;
//             z-index: 10;
//             transform-origin: 0 0;
//             opacity: 1;
//          }
//      }
//      #nav_bg.open_menu{
//          &::before{
//             transition: all 1s cubic-bezier(0.77, 0, 0.175, 1);
//             transform: scale(1, 1) translate(0%, 100%) ;
//             transition-delay: .25s; 
//          }
//      }
    
//      #nav_body{
//          position:absolute;
//          top:0;
//          left:0; 
//          width:100%;
//          height:100%;
         
//      }
   
//     .nav-inner{
//         position: fixed;
//         width: 100vw;
//         height: 100vh;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;
//         background-color: $bg_color;
//         margin: -1rem;
       
        
//         .nav_item{
//             transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);
//             opacity: 0;
//             transform: translateX(100px);
//             transition-delay: .0s; 
//             &.on_item{
//                opacity: 1;
//                transform: translateX(0);
//                transition-delay: .5s; 
//             }
//             span{
//                 padding: 1rem;
//                 display: block;
//                 @media (min-width: 1024px){
//                     display: inline-block;;
//                 }
//             }
//         }
//      }
//  }
</style>
