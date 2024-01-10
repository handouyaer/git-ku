<script setup>
        import { getArticleByCatIdAPI } from '@/apis/article'
        import { useArticleStore } from '@/stores/articles.js'
        import { ref } from 'vue';
        const drawer = ref(false)
        
        const props = defineProps({
            articleCats: Array,
            
        })

        const article = useArticleStore()
        

</script>

<template>
 
        <div class="pribtn">
              <div class="btn"  plain style="margin-left: 16px" @click="drawer = true">
            open
              </div>
        
          <el-drawer v-model="drawer"  :with-header="true" direction="ttb" title="请选择频道" >
            
            <!-- test2 -->
        <div class="de">
          <el-row :gutter="40">
          <el-col class="rw" :span="5"   v-for="item in articleCats" :key="item">
            <div class="de-inner">
            <div @click="article.getArticleListById(item.id)"  class="ebtn" type="danger"  plain  >{{item.catName}}</div>
            </div>
          </el-col>
          </el-row>
        </div>
        
          </el-drawer>
        </div>
      
</template>

<style scoped>
 .btn {
  margin-top: 10%;
  border-radius: 4px;
  width: 50px;
  height: 30px;
  text-align: center;
  border: 1px solid black;
  background: #F5F5F6;
  color: black;
 }

        /* 弹窗 */
        .pribtn {
          margin-top: 10px;
          margin-right: 10px;
          float: right;
        }
        
        .de-inner {
         margin-bottom: 20px;
        
          
        }
        .ebtn {
            margin-left: 30%;
            display: flex;
            /* flex-wrap: wrap; */
            width: 80px;
            background: #F5F5F6;
            text-align: center;
            height: 30px;
            justify-content: center;
            border-radius: 4px;
            margin: 10%;
            flex-shrink:0;
                /* justify-content: center; */
                text-overflow:clip;
                    overflow: hidden;
        }
</style>