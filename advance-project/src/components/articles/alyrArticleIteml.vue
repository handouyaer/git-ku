
<script setup>
import { useRouter } from 'vue-router';
import { getAInfoByIdAPI } from '@/http/index'
import { onMounted, ref } from 'vue';

const { currentRoute } = useRouter();
const route = currentRoute.value
const d = route.params 
const { id } = d


const AInfo = ref({})
const getAInfoById = async (id) => {
    console.log(id);
    
    const res = await getAInfoByIdAPI(id)
    console.log(res);
    AInfo.value = res.data.data.article
}

onMounted(() => getAInfoById(id))
</script>

<template>


    <p>{{ AInfo.id }}</p>
    <br>
    <p>{{ AInfo.updateTime }}</p>
    <br>
    <p>{{  AInfo.content }}</p>
</template>

<style>


</style>