<template>
    <div class="login-box">
    <div class="image-preview">
        <img class="image-head" style="width: 100px; height: 100px" src="@/assets/images/head.jpg" :zoom-rate="1.2"
            :initial-index="4" fit="cover" />
    </div>

    <div class="login-form">
    <!-- el-form绑定表单对象和规则对象 -->
    <el-form ref="formRef" :model="loginForm" :rules="rules"  class="demo-dynamic">
        <!-- // prop="email" 失去焦点时触发 -->
        <el-form-item prop="email"  >
        <!-- v-model="loginForm.email"绑定邮箱数据 -->
            <el-input class="input-email" v-model="loginForm.email" placeholder="请输入你的邮箱"  />
        </el-form-item>
        <el-form-item prop="password" >
            <el-input class="input-password" v-model="loginForm.password"  placeholder="请输入你的密码" />
        </el-form-item>

        <div class="login-btn">
        <el-form-item>
            <el-button class="btn-login" type="success" @click="submitForm()">用户登录</el-button>
            <el-button class="btn-register" type="primary" @click="$router.push('/register')">用户注册</el-button>
        </el-form-item>
    </div>
    </el-form>
</div>
</div>
</template>

<script setup>
import {  ref } from 'vue'
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/users';

const router = useRouter()
const loginForm = ref({
    password: "",
    email: ""
})

const rules = {
    email: [
            {
                required: true,
                message: '请输入你的邮箱',
                trigger: 'blur', //触发条件,失去焦点时触发
            },
            {
                type: 'email',
                message: '请输入格式正确的邮箱',
                trigger: ['blur', 'change'],
            },
        ],
        password: {
            required: true,
            message: '密码不能为空',
            trigger: 'blur',
            min: 6,
            max: 16,
        }

}

const formRef = ref(null)

const user = useUserStore()

const submitForm = () => {
    const { email, password } = loginForm.value
    console.log(email)
    console.log(password)
    formRef.value.validate( async (valid) => {
        // console.log(valid)
        if(valid) {
            //TODO login
            await user.getUserInfo({email, password})
            const { success, msg } = user.userInfo

            if(success) {
                //提示
                ElMessage({type:'success', message: '登录成功'})
                //跳转页面,push 和 replace两种跳转, replace是防止用户重复返回登录
                router.replace({ path:'/user' })
            } else {
                ElMessage({type:'warning', message: msg})
            }
        }
    })

}


const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>

<style scoped>

.el-input__inner {
    padding-right: 35px;
}
.image-head {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.login-form {
    margin-top: 20%;
  height: 12px;
  position: relative;

  background-repeat: repeat;


}
input-name, .input-password, .input-email, .input-repassword{
  width: 60%;
  margin-left: 10vh;
  margin-top: 20px;
}

.image-preview {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20%;

}

.login-btn {
    display: flex;
    justify-content: center;

}


</style>
