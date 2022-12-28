<template>
    <h1> {{msg}}</h1>

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
        console.log(route.query)
    }
}

</script>
