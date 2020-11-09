<template>
<div>
    <div class="text-sm text-gray-700 mt-3">
        <div class="inline-block" v-for="item in parents" :key="item.link">
            <router-link class="text-green-500 font-medium cursor-pointer" :to="item.link"> {{ item.text }} </router-link>
            <span class="mx-2"> / </span>
        </div>
        <div class="inline-block">   
            <span class="cursor-pointer"> {{ title }} </span>   
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:['parents','title'],
    data() {
        return {}
    },
}
</script>
<style>
</style>
