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
    <van-tabs v-model:active="goodsTypeVal">
      <van-tab v-for='n in goodsTypeDataObj.arr' :title="n.txt" />
    </van-tabs>

  </div>

<!-- Goods Type END-->


</template>

<script>
import axios from 'axios'
import {ref, reactive} from 'vue';
export default {
  name: 'indexWrap',
  data(){
    return {
      msg:'Vmall home'
    }
  },
  setup(){
    let goodsTypeVal = ref(0);

    // goodsTypeBtn
    let goodsTypeDataObj = reactive({arr:[]})
    axios.get('/api/goodsTypeData')
    .then(_d=>{
      console.log(_d.data)
      goodsTypeDataObj.arr = _d.data;
    })
    return { goodsTypeVal };
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

</style>
