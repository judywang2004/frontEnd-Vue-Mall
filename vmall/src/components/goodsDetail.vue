<template>
  <!-- swipe container-->
  <div class='swipeWrap'>
    <van-swipe class="myswipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
    </van-swipe>

  </div>

</template>

<script>
import axios from 'axios'
import requestFn from '@/utils/https'
import {ref,reactive,onMounted} from 'vue'

//Note: it's useRoute instead of useRouter (no r)
import {useRoute} from 'vue-router'

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
        //console.log(route.query)
       //swipe photo link data
       let swipeImgData = reactive({arr:[]})
       requestFn({
            url:'getGoodsDetail',
            method:'get',
            data:{
                key:route.query.goodsKey
        }
       })
       .then(_d=>{
        console.log(_d.data[0]);
       // swipeImgData.arr = _d.data[0];
       });

       return{
        swipeImgData
       }
    }
}

</script>

<style scoped>
.swipeWrap{

}
.myswipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
