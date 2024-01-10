<template>
    <div class="navs">
        
        <div class="nav-item" v-for="item in navs" @click="tojump(item.url)">
            <span class="title">{{item.title}}</span>
            <el-icon class="icon" :size="20">
                <ArrowRight />
            </el-icon>
        </div>


    </div>
</template>
<script>
    export default{
        props:{
            navs:{
                type:Array,//[{title:'',icon:''},...]
                required:true,
            }
        },
        methods:{

            tojump(url){
                this.$router.push(url)

            }
        }
    }


</script>
<style scoped>
.nav-item {
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    border: 1px solid #ebe9e9;
    padding: 0 5px;

}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
}
</style>