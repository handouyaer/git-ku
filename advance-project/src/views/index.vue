<script setup>
      import alyrUserFoot from '@/components/users/alyrUserFoot.vue'
        //引入子组件
        import { onMounted, ref } from 'vue';
        // import alyrArticleList from '@/components/articles/alyrArticleList'
        //弹窗
        import alyrDrawer from '../components/articles/alyrDrawer.vue';
        //滚动条
        import alyrScrollbar from '../components/articles/alyrScrollbar.vue';
               
        //文章列表
        import { useArticleStore } from '@/stores/articles'
        const articleStore = useArticleStore()

        const articleCats = ref([])

        const getData = async () => {
            await articleStore.getArticleCat()
            articleCats.value = articleStore.articleCats
        }

        onMounted(() => getData())

        </script>

        <template>
<div>
        <!--弹窗-->
        <alyrDrawer :articleCats="articleCats" :articleList="articleList"/>        
        <!-- 滚动-->
        <alyrScrollbar :articleCats="articleCats"/>           
        <!-- 文章列表 -->



        <alyrArticleList  />
    </div>
    <alyrUserFoot/>
        </template>
        
        <style scoped>
        div {
            background: #09dcec;

        }


        </style>
        
        
        