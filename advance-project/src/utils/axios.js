//引入axios
import axios from "axios";
import { useUserStore } from '@/stores/users'
import router from "../router";


//创建axios实例
const instance = axios.create({
    baseURL: 'https://api.jqrjq.cn/',
    timeout: 6000
})



// 请求拦截器
instance.interceptors.request.use((config) => {
    const userStore = useUserStore()
    const token = userStore.token
    // console.log(token);
    
    if(token) {
        config.headers.token = token
    }


    return config;
}, (err) => {
    return Promise.reject(err)
})
//响应拦截器
instance.interceptors.response.use((res) => {

    if(res.data.code == 2005) {
       
        console.log(res.data.code);
        router.push('/')
        console.log('跳转后');
        
    }
  
    return res
}, (err) => {
    
    return Promise.reject(err)
})
export default instance;