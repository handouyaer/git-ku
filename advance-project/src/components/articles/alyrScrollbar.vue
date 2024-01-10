<script setup>
        import { useArticleStore } from '@/stores/articles.js'
const props = defineProps({
            articleCats: Array
        })
        const article = useArticleStore()
        
</script>

<template>
    <div class="scrollbar-div">
                <el-scrollbar>
                <div class="scrollbar-flex-content">
                    <p v-for="item in articleCats" :key="item" class="scrollbar-demo-item" @click="article.getArticleListById(item.id)">
                        {{ item.catName}}
                    </p>
                    
                </div>
            </el-scrollbar>
        </div>
</template>

<style scoped>
.scrollbar-div {
    height: auto;
}
/* 滚动条 */
.btn-nav {
            width: 30px;
            height: 30px;
            border: 1px solid black;
            float: right;
            position: relative;
            margin: 20px;
        }
        .scrollbar-flex-content {
            display: flex;
            background-color: white;
            
        }
        
        .scrollbar-demo-item {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 30px;
            margin: 15px;
            text-align: center;
            border-radius: 4px;
            background: #F5F5F6;
            color: black;
            padding: 0px 5px;
        }</style>