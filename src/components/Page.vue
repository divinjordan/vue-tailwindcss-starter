<template>
<div>
    <div class="bg-gray-100 py-8  flex justify-center" v-if="hasHeader">
        <div class="w-10/12">
            <h1 class="text-2xl"> {{ title }} </h1>
            <Breakcrumb :title="title" :parents="parents ? parents : [defaultParent]"/>
        </div>
    </div>
    <div class="py-8 flex justify-center" :class="!hasHeader ? 'bg-gray-100' : ''">
        <div class="w-10/12">
            <slot></slot>   
        </div>
    </div>
</div>
</template>

<script>
import IconSolid from '@/components/icons/IconSolid.vue';
import Breakcrumb from '@/components/shared/Breakcrumb.vue';

export default {
    props:['parents','title','hasHeader'],
    data() {
        return {
            defaultParent: {
                text: "Accueil",
                link:"/home"
            }
        }
    },
    components: {
        IconSolid,
        Breakcrumb
    }
}
</script>

<style>

</style>
