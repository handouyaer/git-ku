//封装所有用户相关接口函数
import axios from '@/utils/axios'

//登录
export const loginAPI = ({email, password}) => {
    return axios.request({
        url: 'api/mobile/elogin',
        method: 'post',
        data: {
            email,
            password
        }
    })
}

//注册
export const registerAPI = ({
    email,
    password,
    userName
}) => {
    return axios.request({
        url: 'api/mobile/eregister',
        method: 'post',
        data: {
            email,
            password,
            userName
        }
    })
}

//根据userId查询userInfo
export const userinfoallAPI = (id) => {
    return axios.request({
        url: '/api/userinfo/all',
        data: {
            id
        }

    })
}

export const userinfoOne = (id) => {
    return axios.request({
        url: `/api/userinfo/one?id=${id}`,
        

    })
}