import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { defineStore } from 'pinia'
import { userinfoallAPI } from '@/apis/user'
const userInfo = ref({})
const res = ref({})
const token = ref('')


export const useUserStore = defineStore('user', () => {
    


    const getUserInfo = async ({email, password}) => {
        const res = await loginAPI( {email, password} )
 
        userInfo.value = res.data

        token.value = res.data.data.userinfo.token
        
    }

    const clearUserInfo = () => {

        userInfo.value = {}
        token.value = ''
    }

    //获取全部usesrinfo
    const userinfoAll = ref({})
    const getUserinfoall = async () => {
        const res = await userinfoallAPI()
        userinfoAll.value= res.data.data.userinfos
    }
    

  
    return { userInfo, getUserInfo,res,clearUserInfo,token,userinfoAll,getUserinfoall }
},{
    //持久化插件
    //pinia一刷新数据就没了
    persist:true
  }
  )
  