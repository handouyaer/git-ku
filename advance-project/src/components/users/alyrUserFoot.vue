<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/users';

const userStore = useUserStore()
const router = useRouter()

const quit = async () => {
    await userStore.clearUserInfo()
    router.replace('/')
}

</script>
<template>
    <div class="footer">
        <div class="foot-inner" @click="router.push('/index')"><p>主页面</p></div>
        <div class="foot-inner" @click="router.push('/user')"><p>个人页面</p></div>
        <div class="foot-inner" @click="quit"><p>退出菜单</p></div>
    </div>

</template>
<style scoped>
p {
    margin-top: 15px;
}
.foot-inner {
    float: left;
    width: 33.33%;
    height: 100%;
    text-align: center;
    border: 2px solid #F5F5F6;
    
}
.footer {
    width: 100%;
    height: 60px;
    background-color:white;
    display: flex;
    position: fixed;
    left: 0%;
    bottom: 0%;
    margin: 0;
    
}
</style>