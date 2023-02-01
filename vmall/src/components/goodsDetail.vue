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
  <!-- Price promotion, countdown, start-->
    <div class="goodsPriceDiv">
      <div>
        <p class="p1">Limited</p>
        <p class="p2">
          <small>$</small>
          799
          <span>$899</span>
        </p>
      </div>
      <!--Counting down-->
      <div class="goodsPriceRight">
        <span class="p3">Counting down</span>
			<van-count-down :time="countDownTime">
				<template #default="timeData">
					<span class="countDownTime_block">{{ timeData.hours }}</span>
					<span class="countDownTime_colon">:</span>
					<span class="countDownTime_block">{{ timeData.minutes }}</span>
					<span class="countDownTime_colon">:</span>
					<span class="countDownTime_block">{{ timeData.seconds }}</span>
				</template>
			</van-count-down>
      </div>
    </div>
  <!-- Price, countdown, end-->
  <!-- Product name,promotion,description, start-->
  <div class ="goodsTitleWrap">
    <h1>[NEW] HW 50 Pro 128GB</h1>
		<span>[Delivery]①$50 ②V1-V5 $10 | Click for more info>></span>
		<div class="getPromotion" @click="showPromotionFn">
			<label class="p1">Promotion</label>
			<ul class="p2">
				<li>
					<p class="p3">$50</p>$50
				</li>
				<li>
					<p class="p4">Points</p>Points
				</li>
			</ul>
		</div>
<!-- Promotion bottom pop up  menu-->
    <van-action-sheet
          v-model:show="isPromotionShow"
          cancel-text="Cancel"
          close-on-click-action
          title="Promotion"
          @cancel="onCancelPromotionBtn"
      >
          <div class="content"><h1>Promotion Content</h1></div>
    </van-action-sheet>
  </div>
  <!-- Product name,promotion,description, end-->

  <!-- product sku main start -->
	<div class="productSkuMain">
		<dl>
			<dt>Sale</dt>
			<dd>
				<em class="redEm">Full Price</em>
			</dd>
		</dl>
		<dl>
			<dt>Color</dt>
			<dd>
				<em>Black</em><em>Green</em><em>Blue</em><em class="redEm">White</em>
			</dd>
		</dl>
		<dl>
			<dt>Version</dt>
			<dd>
				<em class="redEm">128GB</em><em>256GB</em>
			</dd>
		</dl>
		<dl>
			<dt>Type</dt>
			<dd>
				<em class="redEm">Standard</em>
			</dd>
		</dl>
		<dl>
			<dt>Amount</dt>
			<dd><van-stepper v-model="stepperValue" /></dd>
		</dl>
		<dl>
			<dt>Insurance</dt>
			<dd>
				<em>Select</em><em class="redEm">S1</em><em class="redEm">S2</em>
			</dd>
		</dl>
	</div>
	<!-- Product sku main end -->

  <!-- deliver service start -->
	<div class="productSendAddress">
		<!-- send to -->
		<div class="item" style="margin-bottom:.6rem;" @click="addressPopUp">
			<label>Deliver area</label>
			<div class="send">
				<p>Pittsburgh</p>
				<span style="color:#f00;">In inventary</span>
			</div>
		</div>
		<!-- service -->
		<div class="item">
			<label>Shipping</label>
			<div class="serve">
				<p>Free shipping $48 </p>
				<p> 30 days return policy</p>
			</div>
		</div>
		<!-- city selection pop up -->
		<van-action-sheet
				v-model:show="isAddressShow"
				close-on-click-action
				title="Select States"
			>
			<van-area :area-list="areaList" @confirm="resultSelectAddress" />
		</van-action-sheet>
	</div>
	<!-- deliver service end -->

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
      //countDownTime
       const countDownTime = ref(30 * 60 * 60 * 1000);
      // product promotion bottom pop up menu
      const isPromotionShow = ref(false);
      const showPromotionFn=()=>{
          isPromotionShow.value = !isPromotionShow.value;
      }
    
      const onCancelPromotionBtn = () => {
        console.log('取消')
      };

      //product sku 
      const stepperValue = ref(1)

       return{
        isPromotionShow,
        onCancelPromotionBtn,
        swipeImgData,
        swipeImgLengt,
        onChangeImgFn,
        swipeImgInx,
        goBackPageFn,
        isPopUpMenuShow,
        popupWrapFn,
        isPopUpMenuShow,
        countDownTime,
        showPromotionFn,
        stepperValue

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
/* Price CountingDown  start*/
.goodsPriceDiv{
	width:100%;height: 56px;
	background-image: linear-gradient(90deg, #FF313F 0%, #FF935A 100%);
}

.goodsPriceDiv p.p1 {
	font-size: .3rem;
	color: #fff;
	font-weight: normal;
	position: absolute;
	left: .5rem;
}

.goodsPriceDiv p.p2 {
	font-size: 0.5rem;
  color:#fff;
  font-weight: bold;
  position: absolute;
  top: 12.5rem;
  left: .5rem;
}

.goodsPriceDiv p.p2 small {
	font-size: .5rem;
	font-size: normal;
}

.goodsPriceDiv p.p2 span {
	font-size: .5rem;
	text-decoration: line-through;
}

.goodsPriceRight {
	background-color: #fdf0e8;
	width: 3rem;
	height: 1rem;
	overflow: hidden;
	position: absolute;
	right: 0;
}

.goodsPriceRight span.p3 {
	font-size: .2rem;
	font-size: normal;
	color: #f00;
	display: block;
	margin: .1rem 0 0 0;
}

.countDownTime_colon {
	display: inline-block;
	margin: 0 4px;
	color: #ee0a24;
}

.countDownTime_block {
	display: inline-block;
	width: 22px;
	color: #fff;
	font-size: 12px;
	text-align: center;
	background-color: #ee0a24;
}

/* product name,promotion */
.goodsTitleWrap {
	margin: 0.4rem;
	padding: .4rem;
	background: #f5f5f5;
	text-align: left;
	border-radius: .3rem;
}

.goodsTitleWrap h1 {
	font-size: .45rem;
}

.goodsTitleWrap span {
	color: #f00;
}

/* product title，bonus */
.getPromotion {
	margin: .4rem 0;overflow:hidden;
}
.getPromotion label.p1{
	font-size: .2rem;float: left;margin-right: .4rem;
}
.getPromotion ul.p2{
	display:block;float: left;
}
.getPromotion ul.p2 li p.p3,
.getPromotion ul.p2 li p.p4{
	border-radius: .1rem;color:#f00;display:inline;
	border:1px solid #f00;padding:0 .2rem;margin-right: .2rem;
}
.content {
    padding: 16px 16px 160px;
}

/* product sku main start */
.productSkuMain{
	margin: 0.4rem;
	padding: .4rem;
	background: #f5f5f5;
	text-align: left;
	border-radius: .3rem;
}
.productSkuMain dl{
	clear:both;display:block;overflow:hidden;padding:.3rem 0;
}
.productSkuMain dl dt,
.productSkuMain dl dd{
	float: left;
}
.productSkuMain dl dt{
	margin-right: .3rem;
}
.productSkuMain dl dd em{
	padding:.2rem .3rem;background: #fff;margin-right: .3rem;
	border-radius: .2rem;
}
.productSkuMain dl dd em.redEm{
	color: #cf0a2c;
    background: rgba(207,10,44,.05);
}

/* deliver service start */
.productSendAddress{
	margin: 0.4rem;
    padding: 0.4rem;
    background: #f5f5f5;
    text-align: left;
    border-radius: 0.3rem;
}
.productSendAddress div.item{
	clear:both;overflow:hidden;
}
.productSendAddress div.item label{
	float: left;margin-right: .5rem;
}
.productSendAddress div.item div.send,
.productSendAddress div.item div.serve{
	float: left;line-height: .6rem;margin-top: -.03rem;
}
.productSendAddress div.item div.send p,
.productSendAddress div.item div.serve p{
	padding-left: .6rem;
	background-image: url('../assets/icon_1.png');
	background-repeat: no-repeat;
	background-size: .45rem;
}
</style>
