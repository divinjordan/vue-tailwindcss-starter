<template>
<div v-if="field.type == 'prepend'" class="mt-6">
      <label
        :for="`prepend_${field.name}`"
        class="block text-sm font-medium leading-5 text-gray-700"
      >
        {{ field.label }}
      </label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <span
          v-if="field.prepend"
          class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
        >
          {{ prepend[0] }}
        </span>
        <input
          @input="$emit('prepend',{target: {value: [prepend[0],$event.target.value]}})"
          :value="prepend[1]"
          :id="`prepend_${field.name}`"
          class="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          :placeholder="field.placeholder ? field.placeholder : ''"
        />
      </div>
</div>
</template>
<script>
export default{
    props:['field',"model"],
    data(){
        return {
        }
    },
    computed:{
      prepend(){
        return Object.entries(this.$props.model).map( ([key,val]) => val)
      }
    },
    mounted(){
      console.log(this.$props.model)
      console.log("input prepend mounted mounted")
    }
}
</script>
<style>
</style>