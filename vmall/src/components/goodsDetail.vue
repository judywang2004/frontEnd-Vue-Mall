<template>
  <!-- swipe container-->
  <div class='swipeWrap'>
    <!-- return to previous page-->
    <div class="goBackPage" @click="goBackPageFn">
      <svg t="1653448154730" class="iconLeft" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3611" width="300" height="300"><path d="M767.7 480.9H207.1l217.7-217.7c12.3-12.3 12.3-32.4 0-44.7l-0.7-0.7c-12.3-12.3-32.4-12.3-44.7 0.1L107 490.3c-12.3 12.3-12.3 32.4 0 44.7l0.6 0.7c0.1 0 0.2 0.1 0.2 0.1l271.1 271.1c12.5 12.5 32.9 12.5 45.4 0s12.5-32.9 0-45.4L206.7 543.9h561c17.3 0 31.5-14.2 31.5-31.5s-14.2-31.5-31.5-31.5z" fill="#ffffff" p-id="3612"></path><path d="M864.1 512.6a31.8 31.7 0 1 0 63.6 0 31.8 31.7 0 1 0-63.6 0Z" fill="#ffffff" p-id="3613"></path></svg>
    </div>
    <!--right top corner popup icon-->
    <div class='popupWrap' @click='popupWrapFn'>
			  <svg t="1653448550904" class="iconRight" viewBox="0 0 1073 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5825" width="300" height="300"><path d="M121.904762 902.095238m-121.904762 0a2.5 2.5 0 1 0 243.809524 0 2.5 2.5 0 1 0-243.809524 0Z" p-id="5826" fill="#ffffff"></path><path d="M536.380952 512m-121.904762 0a2.5 2.5 0 1 0 243.809524 0 2.5 2.5 0 1 0-243.809524 0Z" p-id="5827" fill="#ffffff"></path><path d="M536.380952 121.904762m-121.904762 0a2.5 2.5 0 1 0 243.809524 0 2.5 2.5 0 1 0-243.809524 0Z" p-id="5828" fill="#ffffff"></path><path d="M121.904762 121.904762m-121.904762 0a2.5 2.5 0 1 0 243.809524 0 2.5 2.5 0 1 0-243.809524 0Z" p-id="5829" fill="#ffffff"></path><path d="M121.904762 512m-121.904762 0a2.5 2.5 0 1 0 243.809524 0 2.5 2.5 0 1 0-243.809524 0Z" p-id="5830" fill="#ffffff"></path><path d="M536.380952 902.095238m-121.904762 0a2.5 2.5 0 1 0 243.809524 0 2.5 2.5 0 1 0-243.809524 0Z" p-id="5831" fill="#ffffff"></path><path d="M950.857143 902.095238m-121.904762 0a2.5 2.5 0 1 0 243.809524 0 2.5 2.5 0 1 0-243.809524 0Z" p-id="5832" fill="#ffffff"></path><path d="M950.857143 121.904762m-121.904762 0a2.5 2.5 0 1 0 243.809524 0 2.5 2.5 0 1 0-243.809524 0Z" p-id="5833" fill="#ffffff"></path><path d="M950.857143 512m-121.904762 0a2.5 2.5 0 1 0 243.809524 0 2.5 2.5 0 1 0-243.809524 0Z" p-id="5834" fill="#ffffff"></path></svg>
    </div>
    <!-- right popup menu-->
    <div class="popUpMenu" v-if='isPopUpMenuShow'>
      <p>Home</p>
      <p>Search</p>
      <p>Category</p>
      <p>Cart</p>
      <p>My</p>
    </div>
    <!-- swipe start-->
    <van-swipe 
        @change="onChangeImgFn"
        class="myswipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="n in swipeImgData.arr.goodsImg">
          <img :src="n"/>
        </van-swipe-item>
    </van-swipe>
    <!-- Display img index n of totalImg-->
    <div class="imgInx">{{swipeImgInx}}/{{ swipeImgLengt }}</div>
    </div>
    <!-- Swipe end-->
    <!-- Price, countdown, start-->
    <div class="goodsPriceDiv">
      <p>8388</p>

    </div>
    <!-- Price, countdown, end-->

</template>

<script>
import axios from 'axios'
import requestFn from '@/utils/https'
import {ref,reactive,onMounted} from 'vue'

//Note: it's useRoute instead of useRouter (no r)
import {useRoute, useRouter} from 'vue-router'

export default{
    name:'goodsDetail',
    data(){
        return {
            msg:'Detail page'
        }
    },
    setup(){
        //route
        const route = useRoute();
        const router = useRouter();
        //console.log(route.query)
       //swipe photo link data
       let swipeImgData = reactive({arr:[]})
       let swipeImgLengt =ref(0)
       let swipeImgInx = ref(1)
       //swipe onchange
       const onChangeImgFn = (inx)=>{
          swipeImgInx.value = inx+1;
       }
       const goBackPageFn = () =>{
          router.push({
              path:'/category'
          })
       }
       // display able ?
      let isPopUpMenuShow = ref(false)
      // top right pop up menu
      const popupWrapFn = ()=>{
        isPopUpMenuShow.value = !isPopUpMenuShow.value
      }

       requestFn({
            url:'getGoodsDetail',
            method:'get',
            data:{
                key:route.query.goodsKey
        }
       })
       .then(_d=>{
        //console.log(_d.data);
        swipeImgData.arr = _d.data[0];
        swipeImgLengt.value = _d.data[0].goodsImg.length;
       });

       return{
        swipeImgData,
        swipeImgLengt,
        onChangeImgFn,
        swipeImgInx,
        goBackPageFn,
        isPopUpMenuShow,
        popupWrapFn
       }
    }
}

</script>

<style scoped>
.myswipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background: #fff;
}
.swipeWrap{
    position: relative;
}
.swipeWrap .imgInx{
    width:35px;height:20px;background:rgb(92, 7, 7);
    border-radius:10px;position:absolute;
    right:10px;bottom:10px;z-index:99;
    color: #fff;line-height: 20px;text-align:center;
}
/* go back page */
.goBackPage{
	position: absolute;left: 20px;top: 20px;
	background: #666;border-radius: 100%;z-index: 99;
	width: 32px;height: 30px;padding: 2px 0 0 0;
}
.goBackPage .iconLeft{
	width: 28px;height: 28px;
}

/* right top corner icon */
.popupWrap{
	width: 32px;height: 26px;position: absolute;top: 20px;right: 20px;
	background: #666;border-radius: 100%;z-index: 99;
	padding:6px 0 0 0;
}
.popupWrap .iconRight{
	width: 20px;height: 20px;
}

/* top right corner popup menu */
.popUpMenu{
	width: 104px;height: auto;border-radius: 10px;
	border:1px solid #000;position: absolute;
	right: 10px;top: 51px;z-index: 99;
	background: #fff;opacity: .8;
}
.popUpMenu p{
	height: 25px;text-align: center;border-bottom: 1px solid #000;
	line-height: 25px;
}
/* Price CountingDown  */
.goodsPriceDiv{
	width:100%;height: 56px;
	background-image: linear-gradient(90deg, #FF313F 0%, #FF935A 100%);
}
.goodsPriceDiv p{
	font-size: 33px;color:#fff;font-weight: bold;
}
/* Price, countdown, start */
.goodsPriceDiv{
	width:100%;height: 56px;
	background-image: linear-gradient(90deg, #FF313F 0%, #FF935A 100%);
}
.goodsPriceDiv p{
	font-size: 33px;color:#fff;font-weight: bold;
}
</style>
