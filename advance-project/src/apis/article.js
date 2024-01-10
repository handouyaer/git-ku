/*
 * @Author: WWowo 15559597490
 * @Date: 2023-11-10 08:32:19
 * @LastEditors: WWowo 15559597490
 * @LastEditTime: 2023-11-10 10:25:05
 * @FilePath: \my_lesson_h5-6.0\src\http\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/http/index.js
//创建统一请求api
import axios from '@/utils/axios'
/**
  @author 艾力亚尔
  @params data 请求参数 json 格式
  @description 用户登录方法
*/
// const login=(data)=>{
//     return axios.request({
//         url:'',
//         method:'post',
//         data
//     })
// }

//文章列表
export const getArticleListAPI = () => {
    return axios.request({
        url: 'api/article/all'
    })
}

//文章标题(滚动)
export const getArticleCatAPI = () => {
    return axios.request({
        url: 'api/articleCat/all'
    })
}

//文章分类查文章
export const getArticleByCatIdAPI = (cateId) => {
    return axios.request({
        url: `/api/article/${cateId}`
    })
}

//文章信息分类id查
export const getCatByIdAPI = (cateId) => {
    return axios.request({
        url: `/api/articleCat/one`,
        data: `${cateId}`
    })
}

export const getCatById = (cateId) => {
    return axios.request({
        url: `/api/articleCat/one?id=${cateId}`,
       
    })
}

//根据文章id查文章
export const getAInfoByIdAPI = (id) => {
    return axios.request({
        url: `/api/article/one?id=${id}`,
    })
}




