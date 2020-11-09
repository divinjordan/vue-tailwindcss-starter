<template>
    <div>
        <label :for="id" class="block text-sm font-medium leading-5 text-gray-700">{{ label }}</label>
        <input :id="id" :type="type ? type : 'text'" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-green-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
    </div>
</template>
<script>
export default{
    props: ['label','id','type'],
    data(){
        return {
        }
    }
}
</script>