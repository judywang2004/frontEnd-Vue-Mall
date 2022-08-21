/**
 * Wrap Axios functions
 * for future extend
 */

import axios from 'axios'

// interceptos
const axiosInstance = axios.create({
    baseURL: 'api'
})
// Reqeust 
axiosInstance.interceptors.request.use(config=>{
   // console.log( config)
    return config
},err=>{
    console.log(err)
})
//Response
axiosInstance.interceptors.response.use(config=>{

    return config
},err=>{
    console.log(err)
    switch(err.response.status){
        case 404:
            err.message = 'Request URL error'

    }
})
//public 

function requestFn( _config ){
    let {url,data, method} = _config;
    url = url || ''
    data = data || {}
    method = method || 'get'

    switch (method){
        case 'get':
            return axiosInstance.get(url,{params:data})
        case 'post':
           // return

        default:

    }

}

export default requestFn