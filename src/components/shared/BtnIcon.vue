<template>
 <button class="flex item-center p-2 rounded-md border border-green-500 btn-icon hover:bg-green-500 hover:text-white">
    <icon :name="name" :size="size" :stroke="stroke" class="btn-icon-icon text-green-500 hover:text-white"/>
</button>
</template>

<script>
import Icon from '@/components/icons/Icon'
export default {
    props: ['name','size','stroke'],
    components:{
        Icon
    }
}
</script>
<style>
.btn-icon:hover .btn-icon-icon{
    @apply text-white
}
</style>
