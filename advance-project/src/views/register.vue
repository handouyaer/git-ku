<template>
    <!-- 1表单的数据主要参考http://api.jqrjq.cn/doc.html#/jqr/mobile-controller/eRegisterUsingPOST -->
    <!-- 2 数据格式
    {
        "email": "",
        "password": "",
        "userName": ""
    }    

    3.问题  
       图片圆角
       userName,邮箱和密码加上图标
    -->
<div class="register-box">

    <div class="image-preview">
        <img style="width: 100px; height: 100px" src="@/assets/images/head.jpg" :zoom-rate="1.2" 
            :initial-index="4" fit="cover" />
    </div>

<div class="register-form">
    <el-form ref="formRef" :rules="rules" :model="loginForm" class="demo-dynamic">

        <el-form-item prop="userName">
            <el-input class="input-name" v-model="loginForm.userName" placeholder="请输入你的姓名" autofocus />
        </el-form-item>

        <el-form-item prop="email">
            <el-input class="input-email" v-model="loginForm.email" placeholder="请输入你的邮箱" />
        </el-form-item>

        <el-form-item prop="password">
            <el-input class="input-password" v-model="loginForm.password" placeholder="请输入你的密码" show-password />
        </el-form-item>

        <el-form-item prop="repassword">
            <el-input class="input-repassword" v-model="loginForm.password" placeholder="请确认你的密码" show-password />
        </el-form-item>
        <div class="register-btn">
        <el-form-item>
            <el-button class="btn-login" type="success" @click="submitForm()">用户注册</el-button>
            <el-button class="btn-register" type="primary" @click="$router.push('/')">用户登录</el-button>
        </el-form-item>
    </div>
    </el-form>
</div>
</div>
</template>
  
<script setup>
import { ref } from 'vue'
import { registerAPI } from '../apis/user';
import {useRouter} from 'vue-router'
const router = useRouter()
const url =
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const loginForm = ref({
    password: "",
    repassword: '',
    email: ""
})

const rules = {
    email: [
            {
                required: true,
                message: '请输入你的邮箱',
                trigger: 'blur',
            },
            {
                type: 'email',
                message: '请输入格式正确的邮箱',
                trigger: ['blur', 'change'],
            },
        ],
        userName: [
            {
                required: true,
                message: '请输入你的姓名',
                trigger: 'blur',
            },
        ],
        password: {
            required: true,
            message: '密码不能为空',
            trigger: 'blur',
        },


}

const formRef = ref(null)
const submitForm = () => {
    const { email,password,userName } = loginForm.value
    console.log(email)
    console.log(password)
    console.log(userName)

    formRef.value.validate( async (valid) => {
        console.log(valid)
        if(valid) {
            //TODO login
            const res = await registerAPI( { email,password,userName } )
            if(res.data.success) {
                //提示
                ElMessage({type:'success', message: '注册成功'})
                //跳转页面,push 和 replace两种跳转, replace是防止用户重复返回登录
                router.replace({ path:'/' })
            } else {
                ElMessage({type:'warning', message: res.data.msg})
            }
        } 
    })

}


</script>

<style scoped >


.image-preview img {
    border-radius: 50%;
}
.register-btn {
    display: flex;
    justify-content: center;
}
.register-form {
    margin-top: 20%;
}
.register-box {
    height: 2vh;
    position: relative;
}
.input-name, .input-password, .input-email, .input-repassword{
  width: 60%;
  margin-left: 10vh;
}


.el-form-item__content {
    justify-content: center;
}

.image-preview {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20%;

}

</style>
  