<template>
<!-- headerSearchWarp 顶部搜索框 START-->
  <div class='headerSearchWarp'>
   <img class='logo' src="https://res.vmallres.com/portal/1.11.6.303/h5/images/logo_red.png" />
   <!-- search button area -->
   <div class='searchBtn' >
     <svg class='magnifierLogo' width="16" height="16" viewBox="0 0 1024 1024"><path d="M744.758 704.861l143.275 143.25c12.497 12.497 12.497 32.758 0 45.255s-32.758 12.497-45.255 0l-143.686-143.691c16.388-13.702 31.662-28.692 45.666-44.814zM442.667 85.333c197.35 0 357.333 159.984 357.333 357.333 0 88.502-32.174 169.489-85.464 231.903v0l-0.944 1.101c-2.851 3.312-5.762 6.571-8.731 9.776l9.674-10.877c-3.963 4.641-8.042 9.179-12.233 13.61-2.5 2.643-5.032 5.239-7.602 7.796-0.895 0.89-1.782 1.764-2.674 2.633-2.996 2.92-6.063 5.806-9.18 8.637-1.208 1.097-2.431 2.193-3.663 3.282-2.857 2.525-5.744 4.995-8.67 7.419-0.589 0.488-1.169 0.965-1.75 1.441-61.596 50.386-140.317 80.613-226.098 80.613-197.35 0-357.333-159.984-357.333-357.333s159.984-357.333 357.333-357.333zM442.667 149.333c-162.004 0-293.333 131.33-293.333 293.333s131.33 293.333 293.333 293.333c162.004 0 293.333-131.33 293.333-293.333s-131.33-293.333-293.333-293.333z" fill="#000000" fill-opacity="0.6"></path></svg>
     <p> search page start from here</p>
   </div>
   <svg class='accountLogo' width="24" height="24" viewBox="0 0 1024 1024"><path d="M661.333 128c176.731 0 320 143.269 320 320 0 174.964-140.418 317.131-314.708 319.957l-5.292 0.043h-72.085l-161.287 161.294c-11.997 11.997-31.15 12.477-43.719 1.44l-1.536-1.44c-11.997-11.997-12.477-31.15-1.44-43.719l1.44-1.536 170.667-170.667c5.501-5.501 12.799-8.792 20.514-9.303l2.113-0.070h85.333c141.385 0 256-114.615 256-256 0-139.971-112.334-253.705-251.767-255.966l-302.9-0.034c-141.385 0-256 114.615-256 256 0 139.971 112.334 253.705 251.767 255.966l4.233 0.034h32c17.673 0 32 14.327 32 32 0 17.042-13.322 30.972-30.12 31.946l-1.88 0.054h-32c-176.731 0-320-143.269-320-320 0-174.964 140.418-317.131 314.708-319.957l5.292-0.043h298.667zM298.667 394.667c29.455 0 53.333 23.878 53.333 53.333s-23.878 53.333-53.333 53.333c-29.455 0-53.333-23.878-53.333-53.333s23.878-53.333 53.333-53.333zM512 394.667c29.455 0 53.333 23.878 53.333 53.333s-23.878 53.333-53.333 53.333c-29.455 0-53.333-23.878-53.333-53.333s23.878-53.333 53.333-53.333zM725.333 394.667c29.455 0 53.333 23.878 53.333 53.333s-23.878 53.333-53.333 53.333c-29.455 0-53.333-23.878-53.333-53.333s23.878-53.333 53.333-53.333z" fill="#000000" fill-opacity="1"></path></svg>
   <p class='mallMember'> Log in </p>  
   </div>
<!-- headerSearchWarp END-->

<!-- Goods Type 产品类别 START -->
  <div class='goodsTypeBtn'>
    <van-tabs v-model:active='goodsTypeVal'>
      <van-tab v-for='n in goodsTypeDataObj.arr' :title='n.txt' />
    </van-tabs>

  </div>
<!-- Goods Type END-->

<!-- Swipe START -->
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for='n in swipeObj.arr'> 
    <img :src="n.imgurl"  width="300" height="100"/>
  </van-swipe-item>
</van-swipe>
<!-- Swipe END -->

<!-- Grid, Draggable goods START -->
<div class='goodsDragBtnList'>
    <!-- Only to create a container for scroll,width is 200%-->
    <div style='width:200%'>
      <van-grid :column-num="6" >
        <van-grid-item v-for='n in gridGoodsObj.arr'>
          <img :src="n.imgurl" />
          <p>{{n.txt}}</p>
        </van-grid-item>
      </van-grid>
    </div>
</div>
<!-- Grid, Draggable goods END -->

<!-- limitBuy START -->
<div class='limitBuy'>
  <p class='title_1'>Limited Time Purchase</p>
  <em class='title_2'>Quick Hands</em>

  <!-- Count Down timer START-->
  <van-count-down class='countDownSty' :time="countDownTime">
    <template #default="timeData">
      <span class="block">{{ timeData.hours }}</span>
      <span class="colon">:</span>
      <span class="block">{{ timeData.minutes }}</span>
      <span class="colon">:</span>
      <span class="block">{{ timeData.seconds }}</span>
    </template>
  </van-count-down>
  <!-- Count Down timer END-->
  <!-- Countdown products START-->
  <van-row class='limitGoodSty'>
    <van-col span="6" v-for='n in limitGoodsObj.arr'>
      <img :src="n.imgurl" />
      <p class='price_1'>{{n.price}} </p>
      <b class='price_2'>{{n.ol_price}}</b>
    </van-col>
  </van-row>
  <!-- Countdown products END-->
</div>
<!-- limitBuy END -->

<!-- Advertisement Space START -->
<div class='adSpace'>
 <img alt="" draggable="false" src="https://images.unsplash.com/photo-1487537023671-8dce1a785863" />
</div>  
<!-- Advertisement Space END -->

<!-- footer START -->
<footerbar />
<!-- footer End -->

</template>

<script>
import axios from 'axios'
import requestFn from '@/utils/https'
import {ref, reactive} from 'vue';
import footerbar from '@/components/footerbar'
export default {
  name: 'indexWrap',
  data(){
    return {
      msg:'Vmall home'
    }
  },
  components:{
    footerbar
  },
  setup(){
    let goodsTypeVal = ref(0);

    // goodsTypeBtn
    let goodsTypeDataObj = reactive({arr:[]})
    requestFn({
             url:'/goodsTypeData',
             method: 'get' 
             })
             .then(_d=>{
               goodsTypeDataObj.arr = _d.data;
             });

    // swipe
    let swipeObj = reactive({arr:[]})
    requestFn({
             url:'/swipeData',
             method: 'get' 
             })
             .then(_d=>{
               swipeObj.arr = _d.data;
             });

    //Grid, Draggable goods 
    let gridGoodsObj = reactive({arr:[]})
    requestFn({
             url:'/gridGoodsData',
             method: 'get' 
             })
             .then(_d=>{
               gridGoodsObj.arr = _d.data;
             });
    

    //Count Down timer
    const countDownTime = ref(30 * 60 * 60 * 1000);

    //limitGoods
    let limitGoodsObj = reactive({arr:[]})
    requestFn({
             url:'/limitGoodsData',
             method: 'get' 
             })
             .then(_d=>{
               limitGoodsObj.arr = _d.data;
             });

   
    return {  goodsTypeVal, 
              goodsTypeDataObj,
              swipeObj,
              gridGoodsObj,
              countDownTime,
              limitGoodsObj
              
             };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* headerSearchWarp Start */
.headerSearchWarp{
 padding: 0 16px;
 position: relative;
 height: 60px;
}
.headerSearchWarp img.logo{
  position: absolute;
  left: 5px; top: 10px;
}
.headerSearchWarp .accountLogo{
  position: absolute;
  right:65px;top: 15px;
}
.headerSearchWarp .mallMember{
  position: absolute;
  right: 10px; top: 15px;
  display: block;
}
.searchBtn{
  position: absolute;
  top:10px; left:110px; width:185px; height:40px; 
  background: #74992e; border-radius: 20px;
}
.searchBtn p{
  position: absolute;top: 8px; left: 30px;
  overflow: hidden;
}
.magnifierLogo{
  position: absolute;left: 10px;top: 10px;

}

/* headerSearchWarp END */

/* Goods Type 产品类别 START */
.goodsTypeBtn{}
.goodsTypeBtn  ::v-deep .van-tab{
  background: #c3c3c3;
  margin-right: 8px;height: 30px;
  border-radius: 20px;
}
.goodsTypeBtn  ::v-deep .van-tabs__line{
  display: none;
}

/* Goods Type 产品类别 END */

/* Swipe Start */
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
/* Swipe END */

/* Grid, Draggable goods START */
.goodsDragBtnList{
  overflow-x:scroll;
}
/*
 ::-webkit-scrollbar,
 Different browser has different ways to implement, it ha
 It has compilation issue.
 */
.goodsDragBtnList ::-webkit-scrollbar{ /*Safari works with or without space. Chrome works without space before : */
  display: none;
}
.goodsDragBtnList img{
  width: 48px;height: 48px;
}
/* Grid, Draggable goods END */

/* limitBuy START */
.limitBuy{
  position:relative;
  background: #c0a1a1; margin: 0 12px;
  border-radius: 20px;height: 164px;
  overflow: hidden;
}
.limitBuy p.title_1{
  font-size:16px;font-weight:bold;
  position:absolute;left:10px;top:10px
}
.limitBuy em.title_2{
  position: absolute;top:15px;left: 190px;
  font-size: 12px; background-color: rgba(237, 111, 33, 0.1);
}

.limitBuy .colon {
    display: inline-block;
    margin: 0 4px;
    color: #ee0a24;
  }
.limitBuy .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #ee0a24;
  }
  .countDownSty{
    position:absolute;top: 15px; right: 30px;
  }
  .limitGoodSty{
    margin-top: 50px;
  }
  .limitGoodSty img{
    width:58px;height: 58px
  }
  .limitGoodSty p.price_1{color: #f00;font-weight: bold}
  .limitGoodSty b.price_2{color: #666;text-decoration-line: line-through;}
/* limitBuy END */

/*  Advertisement Space START */
.adSpace{
  margin: 0 16px;
  overflow: hidden;
  border-radius: 20px;
  margin-bottom: 70px;

}
/*  Advertisement Space END */
</style>
