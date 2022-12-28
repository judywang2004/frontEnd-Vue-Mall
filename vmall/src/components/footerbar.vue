<template>
    <van-tabbar 
        v-model="tabbarActive" 
        active-color="#ee0a24" 
        inactive-color="#000" 
        @change="onChangeFn"
        >
        <van-tabbar-item icon="home-o" to='/'>
            <span>Home</span>
            <template #icon="props">
                <img :src="props.active ? footer_icon1.active : footer_icon1.inactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item icon="search" to='/category'>Category</van-tabbar-item>
        <!--
        <van-tabbar-item icon="search-o" to='category'>
            <span>Category</span>
            <template #icon="props">
                <img :src="props.active ? footer_icon2.active : footer_icon2.inactive" />
            </template>
        </van-tabbar-item>
        -->
        <van-tabbar-item icon="friends-o">Search</van-tabbar-item>
        <van-tabbar-item icon="setting-o">
            <span>ShoppingCart</span>
                <template #icon="props">
                    <img src="https://res.vmallres.com//uomcdn/CN/cms/202104/20F93AA9D728CDE6DC1F6062DD85504C.png" />
               </template>
       </van-tabbar-item>
        <van-tabbar-item icon="setting-o">Setting</van-tabbar-item>
    </van-tabbar>
</template>


<script>
import {ref, reactive, onMounted} from 'vue';
export default{
    name:'category',
    data(){
        return{
            msg:'category page'
        }
    },
    setup(){
         // footer Navigation switch index
         
        let tabbarActive = ref(0);
        onMounted(()=>{
           // tabbarActive.value = localStorage.getItem('switchTabVal');
           //console.log(typeof localStorage.getItem('switchTabVal'))
           let _v = localStorage.getItem('switchTabVal');
           tabbarActive.value = Number( _v )
        })
         const onChangeFn = (inx) =>{
            console.log(inx)
            localStorage.setItem('switchTabVal',inx);
         }
            
            const footer_icon1 = {
                active: 'https://res.vmallres.com//uomcdn/CN/cms/202202/655C627E76D597D20ACAE2FFFE05A943.png',
                inactive:
                    'https://res.vmallres.com//uomcdn/CN/cms/202105/3F3570287DBE1F6B7DB01175AB00320D.png',
            };
            const footer_icon2 ={
                active: 'https://res.vmallres.com//uomcdn/CN/cms/202109/AF826B1519D3E68C5B06EA2B59473B7F.png',
                inactive: 'https://res.vmallres.com//uomcdn/CN/cms/202109/9F5EA6EB7E1171C30238D4D0F8B094BD.png',
            };
            return{
                tabbarActive,
                footer_icon1,
                onChangeFn
            }
    }
}
</script>

