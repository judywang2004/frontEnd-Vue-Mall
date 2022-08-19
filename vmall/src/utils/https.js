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

    return config
},err=>{
    console.log(err)
})
//Response
axiosInstance.interceptors.response.use(config=>{

    return config
},err=>{
    console.log(err)
})
//public 

function requestFn(_config){

}