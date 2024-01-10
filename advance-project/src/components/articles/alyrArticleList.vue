
<template>
    <!-- <h3>{{ title }}</h3> -->
    <div class="middle"></div>
    <template v-for="item in articleList" :key="item.id">
        
        <div class="article" @click="articleItem(`${item.id}`)">

            <!-- 作者信息 -->
            <div class="article-item item-userinfoId">
                {{ getName(item.userinfoId) }}
            </div>

            <!-- 标题 -->
            <div class="article-item item-article-item">
                {{ jieQu(item.title,10) }}
            </div>
            

            <div class="article-item item-updateTime">
                {{ getFormat(item.articleCatId) }} | {{ dateFormat(item.updateTime) }}
            </div>


           
        </div>
    
    </template>
</template>

<script setup>
import { dayjs } from 'element-plus'
import { useRouter } from 'vue-router';
import { useArticleStore } from '@/stores/articles'
import { computed, onMounted, ref, toRaw, watch } from 'vue';
import { useUserStore  }  from '@/stores/users'
import { userinfoallAPI } from '@/apis/user'


const articleList = ref([])
const articleStore = useArticleStore()
const articleCats = toRaw(articleStore.articleCats)
const userStore = useUserStore()
const userinfoAll = toRaw(userStore.userinfoAll)




const getArticleList = async () => {
    await articleStore.getArticleList()
    articleList.value = articleStore.articleList
}
const getUserinfo = async () => {
    await userStore.getUserinfoall()
        

    //TODO bug
}




onMounted(() => getArticleList())
onMounted(() => getUserinfo())



//深层监听Drawer组件的点击后的articleList数据变化
watch(
    () => articleStore.articleList,
    () => articleList.value = articleStore.articleList

)



const router = useRouter()

const articleItem = (id) => {
    console.log("点击成功" + id);
    router.push(`/article/${id}`)
}


/**
 * 截取字符串
 * @param {字符串} str 
 * @param {长度} length 
 */

function jieQu(str,length){

    return str.substr(0,length)+"..."
}

function dateFormat(str){
    return dayjs(str).format('DD/MM/YYYY')
}


function getFormat(cateId) {

    const cateName = ref('')

     articleCats.forEach((item) => {
        if(cateId == item.id) {
           

            cateName.value = item.catName
        }
    })
return cateName.value

}



function getName(id) {
    const name = ref('暂无id')


    userinfoAll.forEach((item) => {
        if(id == item.id) {
            console.log(item.id)
            name.value = item.userName
        }
    })
   
    
        return name.value
   
}
</script>
<style scoped>
.item-userinfoId {
    margin-left: 20px;
}
.item-article-item {
    margin-left: 10px;
}

.item-updateTime {
    text-align: right;
    margin-right: 10px;
}
.middle {
    width: 100%;
    height: 10px;
    background-color: #F5F5F6;
}
.article {
    border: 1px #F5F5F6 solid;
    background-color: white;
   
}
</style>