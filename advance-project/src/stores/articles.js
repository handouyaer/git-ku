import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getArticleListAPI,getArticleCatAPI,getArticleByCatIdAPI } from '@/apis/article'

export const useArticleStore = defineStore('article', () => {
  
    const articleList = ref([])
    const getArticleList = async () => {
      const res = await getArticleListAPI()
      // console.log(res)
      articleList.value = res.data.data.articles
    }

    const articleCats = ref([])
    const getArticleCat =async  () => {
        const res = await getArticleCatAPI()
        articleCats.value = res.data.data.articleCats
  

    }

    const getArticleListById = async (id) => {
      const res = await getArticleByCatIdAPI(id)
      if(res.data.code == 2) {
        articleList.value = []
        
        return
      }
      
      articleList.value = res.data.data.articles

    }

  return { 
          articleList,
          getArticleList,
          articleCats,
          getArticleCat,
          getArticleListById
        }

},{
  //持久化插件
  //pinia一刷新数据就没了
  persist:true
}
)


