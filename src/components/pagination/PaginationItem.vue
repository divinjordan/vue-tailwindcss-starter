<template>
 <div  class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium  hover:border-green-500 hover:text-white hover:bg-green-500 cursor-pointer  transition ease-in-out duration-150" :class="activePage == current ?'bg-green-500 border-green-500 text-white' : 'text-gray-700'">
                   {{ current }}
</div>
</template>
<script>
export default{
    props:['activePage','current']
}
</script>