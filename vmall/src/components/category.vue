<template>
<!-- Header search  top-->
<div class='headWrap' >
<!-- Within Search Field-->
    <div class='searchBtn'>
        <!-- mini magnifier icon -->
        <svg class='miniMagIcon' width="16" height="16" viewBox="0 0 1024 1024"><path d="M744.758 704.861l143.275 143.25c12.497 12.497 12.497 32.758 0 45.255s-32.758 12.497-45.255 0l-143.686-143.691c16.388-13.702 31.662-28.692 45.666-44.814zM442.667 85.333c197.35 0 357.333 159.984 357.333 357.333 0 88.502-32.174 169.489-85.464 231.903v0l-0.944 1.101c-2.851 3.312-5.762 6.571-8.731 9.776l9.674-10.877c-3.963 4.641-8.042 9.179-12.233 13.61-2.5 2.643-5.032 5.239-7.602 7.796-0.895 0.89-1.782 1.764-2.674 2.633-2.996 2.92-6.063 5.806-9.18 8.637-1.208 1.097-2.431 2.193-3.663 3.282-2.857 2.525-5.744 4.995-8.67 7.419-0.589 0.488-1.169 0.965-1.75 1.441-61.596 50.386-140.317 80.613-226.098 80.613-197.35 0-357.333-159.984-357.333-357.333s159.984-357.333 357.333-357.333zM442.667 149.333c-162.004 0-293.333 131.33-293.333 293.333s131.33 293.333 293.333 293.333c162.004 0 293.333-131.33 293.333-293.333s-131.33-293.333-293.333-293.333z" fill="#000000" fill-opacity="0.6"></path></svg>
        <p class ='pIcon'>search </p>
    </div>

    <!-- membership btn account-->
    <svg class='accountSvg' width="24" height="24" viewBox="0 0 1024 1024"><path d="M661.333 128c176.731 0 320 143.269 320 320 0 174.964-140.418 317.131-314.708 319.957l-5.292 0.043h-72.085l-161.287 161.294c-11.997 11.997-31.15 12.477-43.719 1.44l-1.536-1.44c-11.997-11.997-12.477-31.15-1.44-43.719l1.44-1.536 170.667-170.667c5.501-5.501 12.799-8.792 20.514-9.303l2.113-0.070h85.333c141.385 0 256-114.615 256-256 0-139.971-112.334-253.705-251.767-255.966l-302.9-0.034c-141.385 0-256 114.615-256 256 0 139.971 112.334 253.705 251.767 255.966l4.233 0.034h32c17.673 0 32 14.327 32 32 0 17.042-13.322 30.972-30.12 31.946l-1.88 0.054h-32c-176.731 0-320-143.269-320-320 0-174.964 140.418-317.131 314.708-319.957l5.292-0.043h298.667zM298.667 394.667c29.455 0 53.333 23.878 53.333 53.333s-23.878 53.333-53.333 53.333c-29.455 0-53.333-23.878-53.333-53.333s23.878-53.333 53.333-53.333zM512 394.667c29.455 0 53.333 23.878 53.333 53.333s-23.878 53.333-53.333 53.333c-29.455 0-53.333-23.878-53.333-53.333s23.878-53.333 53.333-53.333zM725.333 394.667c29.455 0 53.333 23.878 53.333 53.333s-23.878 53.333-53.333 53.333c-29.455 0-53.333-23.878-53.333-53.333s23.878-53.333 53.333-53.333z" fill="#000000" fill-opacity="1"></path></svg>
</div>

<!--sidebar + goods container --> 
<!-- Layout 1 : Vant's layout -->
<van-row style='position: relative;left:0;top:60px;'>
  <van-col span="6">
  <!-- side bar-->
    <van-sidebar 
        :style="{height:domHeight}"
        class='sidebarSty' v-model="sidebarActiveVal" @change="onChangeFn">
        <van-sidebar-item  v-for='n in sidebarItemObj.arr' :title = "n.sideName"/>
    </van-sidebar>
    </van-col>
  <van-col span="18">
  <!-- Main contents goods -->
    <div class='sideGoodsWrap' :style="{height:domHeight}">
        <b>{{sideBarGetObj.arr.title}} </b>
        <!-- Grid Components,goods list-->
        <van-grid :column-num="3">
             <van-grid-item 
                v-for="n in sideBarGetObj.arr.goods"
                @click="GoodsDetailFn(n)">
                <img :src="n.imgurl" />
                <p>{{n.goodsName}}</p>
             </van-grid-item>
        </van-grid>
    </div>
  </van-col>
</van-row>

<!-- Layout 2 -->
<!--
<div class='sideWrap'>
    <van-sidebar 
       class='sidebarSty'
       v-model="sidebarActiveVal" 
       @change="onChangeFn">
        <van-sidebar-item 
                v-for='n in sidebarItemObj.arr' 
                :title = "n.sideName"/>
    </van-sidebar>
    <div class='sideGoodsWrap'>
    </div>
</div>
-->
<!-- Footerbar navigation-->
 <footerbar />
</template>

<script>
import axios from 'axios'
import requestFn from '@/utils/https'
import {ref,reactive,onMounted} from 'vue'
import footerbar from '@/components/footerbar'
import {useRouter} from 'vue-router'

export default{
    name:'category',
    data(){
        return{
            msg:'category'
        }
    },
    components:{
        footerbar
    },
    setup(){
        //set container roll field height
        let domHeight = ref(0)
        //lifecycle, when page first loaded
        onMounted(()=>{
            //console.log(window.innerHeight)
            domHeight.value = (window.innerHeight - 120) + 'px';

            // when window's size changed
            window.addEventListener('resize',function(){
                //console.log(window.innerHeight)
                domHeight.value = (window.innerHeight - 120) + 'px';
            });

            requestFn({
                url:'/sidebarGetGoods',
                method:'get',
                data:{n:0}
            })
            .then(_d=>{
               // console.log(_d.data[0])
                sideBarGetObj.arr = _d.data[0];
            });
            
        });

        //sidebar index
        let sidebarActiveVal = ref(0)

        //get sidebar menu item related  return data -goods details
        let sideBarGetObj = reactive({arr:[]})

        //sidebar, listening onswitch event
        const onChangeFn = (inx)=>{
            //console.log(inx)
            requestFn({
                url:'/sidebarGetGoods',
                method:'get',
                data:{n:inx}
            })
            .then(_d=>{
               // console.log(_d.data[0])
                sideBarGetObj.arr = _d.data[0];
            });
        }

        //sidebar axios
        let sidebarItemObj = reactive({arr:[]})
        //get sidebar menu name
        requestFn({
            url:'/sidebarItemName',
            method:'get'
        })
        .then(_d=>{
            sidebarItemObj.arr = _d.data;
        })

        // router object
        const router = useRouter();
        //Grid components click event
        const GoodsDetailFn = (n)=>{
            // console.log(n)
           router.push({
                path:'/goodsDetail',
                query:{
                    goodsKey: n.goodsKey,
                }
           })
        }

        return{
            sidebarActiveVal,
            onChangeFn,
            sidebarItemObj,
            domHeight,
            sideBarGetObj,
            GoodsDetailFn
        }
    }
}
</script>

<style scoped>
.headWrap{
    height: 58px;width:100%;
   /* position: relative;*/
   position: fixed;left:0;top:0;
   z-index: 999;background:#fff;

}
.searchBtn{
    width: 255px;height: 40px;
    background: #eee;border-radius: 20px;
    position: absolute;left: 10px;top: 10px;
}

.searchBtn .miniMagIcon{
    position: absolute;left: 10px;top:10px;
}

.searchBtn p.pIcon{
    position: absolute;top:5px;left:30px;
    font-size: 16px;
}
.accountSvg{
    position: absolute;top: 17px;right: 5px;
}

/* Each Menu item related products */
.sideGoodsWrap{
    width: 100%;
    overflow-y:scroll;
}
.sideGoodsWrap b{
    display: block;text-align:left;
}
/* sidebar + goods container */
.sideWrap{
    padding-left: 90px;height: 400px;
    background: #666;
    position: relative;
}

/* Side Bar Nav */
.sidebarSty{
    position: absolute; top: 0;left: 0;
}

/*
 ::-webkit-scrollbar,
 Different browser has different ways to implement, it ha
 It has compilation issue.
 */
.sidebarSty::-webkit-scrollbar{ /*Safari works with or without space. Chrome works without space before : */
  display: none;
}
</style>
