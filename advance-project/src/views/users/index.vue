<template>

<div class="users">

    <div class="nav-i">
        <img src="@/assets/images/head.jpg" class="nav-img" alt="">
    </div>
    <div class="text-info">
        <p class="p-name">id:{{ userInfo.id }}</p>
       <p class="p-name">{{ userInfo.userName }}</p>
       <p class="p-name">{{ userInfo.email }}</p>
    </div>

    <div class="toolbars">
        <div class="tb-nav">踪迹</div>
        <div class="tb-nav">关注</div>
        <div class="tb-nav">评论</div>
    </div>

    <div class="users-content">
    <div class="article-content" v-for="item in userMenu">
        <p class="p-content" >{{ item.content }} ></p>
        <!-- <alyrUserNavs/> -->
    </div>
</div>



</div>

<alyrUserFoot/>

 </template>

 <script setup>

import { ref } from 'vue';
import { useUserStore } from '@/stores/users';
import alyrUserFoot from '@/components/users/alyrUserFoot.vue'

const userStore = useUserStore()
const userInfo = userStore.userInfo.data.userinfo

//用户功能菜单
const userMenu = ref([
    {
        content: "个人文章"
    },{
        content:"个人收藏"
    },{
        content:"个人评论"
    },{
        content:"个人关注"
    }
])
 </script>
 <style scoped>
.users {
    background-image: url("background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.nav-img {
    border-radius: 50%;
}
.users {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.nav-i,.text-info,.toolbars,.users-content {
    display: block;
    text-align: center;
    margin-top: 20px;
}

.nav-img {
    height: 130px;
    width: 130px;

}
.nav-i {
    margin-top: 20%;
    margin-bottom: 20%;
    width: 100%;

}
.toolbars {
    display:flex ;
    justify-content: center;
    margin-top: 10%;
    margin-bottom: 10%;

}
.tb-nav {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    &:hover {
        background-color: #030303;
        color: #ffffff;
    }
    font-size: 20px;
    color: #ffffff;
    border-radius: 10px;
    margin-left: 10px;
    margin-right: 10px;
    font-weight: bold;
}



.users-content {
    flex-wrap: wrap;
    align-items: center;
}
.p-content {
    margin-top: 10%;
    margin-bottom: 10%;
    width: 100%;
    height: 100%;


}
.article-content {
    padding-left: 2dvh;
    margin-top:5%;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: bold;

}
.p-name {
    font-size: 15px;
    color: #ffffff;
}
.p-content {
    margin-top: 5%;
    &:hover {
        color: white;
    }

    font-style: italic;
    font-size: 20px;
    width: 100%;
    height: 100%;
    font-weight: bold;
    color: #ffffff;
}
.users-content {
    margin-top: 10%;

}
 </style>