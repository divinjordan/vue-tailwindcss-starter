<template>
<button :class="classes">
    <span class="flex">
        <Icon v-if="icon" :name="icon" class="mr-2" size="5" stroke="6"/> 
        <span>
            {{ label }}
        </span>
    </span>
</button>
</template>

<script>
import Icon from '@/components/icons/Icon'
const defaultStyle = "py-2 px-6 rounded-md text-sm font-medium"
export default {
    props: ['class','icon','label','color','outline'],
    computed: {
       classes (){  
           let color;
           // if button is outline
           if(this.$props.outline){
               color = "bg-white border border-green-500 text-green-500"
           }else{
               // if the button is not outline
               color = "bg-green-500 text-white"
           }
           return `${color} ${defaultStyle} ${this.$props.class}`
       } 
    },
    components:{
        Icon
    }
}

</script>
