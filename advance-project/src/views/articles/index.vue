<template xmlns:c="http://www.w3.org/1999/XSL/Transform">
    <div class="article-div">
    <div class="btn-push">
        <el-icon  @click="iconPush"><ArrowLeft /></el-icon>
    </div>
    <div style="text-align: center;"><p>{{ AInfo.id }}</p></div>
    <div style="text-align: center;; color: red;margin-top: 20px;">
      <c:if catALL><p>文章分类：{{ catALL.catName }}</p></c:if>
    </div>

    
    <div class="AInfo-div">
    
    
    <p>{{  AInfo.content }}</p>
    <p style="margin-top: 20px;border-bottom: 1px solid red;width: 200px;">作者名称：{{userInfo.userName}}</p>
</div>
<div style="text-align: right; padding-right: 5%;"><p>{{ AInfo.updateTime }}</p></div>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getAInfoByIdAPI,getCatById } from '@/apis/article'
import { onMounted, ref } from 'vue';
import {userinfoOne} from '@/apis/user'
import { ArrowLeft } from "@element-plus/icons";

const router = useRouter()
const { currentRoute } = useRouter();
const route = currentRoute.value
const d = route.params 
const { id } = d


const AInfo = ref({})
const catALL=ref({})
const userInfo=ref({})
const getAInfoById = async (id) => {
    console.log(id);
    const res = await getAInfoByIdAPI(id)
    console.log(res);
    AInfo.value = res.data.data.article
    const catid=res.data.data.article.articleCatId
    const userid=res.data.data.article.userinfoId
    console.log(catid)
    const res2=await getCatById(catid)
    const res3=await userinfoOne(userid)
    if(res2.data.msg=="失败"){
        catALL.value.catName="文章分类不存在"
    }else{
        catALL.value=res2.data.data.articleCat
    
    }
    if(res3.data.msg=="失败"){
        userInfo.value.userName="用户不存在"
    }else{
        userInfo.value=res3.data.data.userinfo
    
    }
   
    console.log("res2"+res2)
    
    console.log(userInfo)
    console.log(catALL)
    
    
}
const iconPush = () => {
    router.push('/index')
}

onMounted(() => getAInfoById(id))
</script>
<style scoped>
.article-div {
    width: 414px;
}
.btn-push {
    width: 100%;
    height: 50px;
    background-color: #ffffff;
    position: relative;
    top: 0%;
    padding-top: 10px;
    padding-left: 10px;
}
.AInfo-div {
    width: 100%;
    height: 500px;
    background-color: white;
    clear: both;
    margin-top: 2%;
    padding: 20px;


}


</style>