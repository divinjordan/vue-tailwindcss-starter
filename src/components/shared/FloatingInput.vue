<template >
     <div class="relative my-4 border-2 focus-within:border-blue-500 px-3 pt-6">
          <input class="block w-full appearance-none focus:outline-none bg-transparent" type="text" name="username" placeholder=" " />
          <label for="username" class="absolute top-0 -z-1 duration-300"> Username </label>
      </div>
</template>
<script>
export default{
}
</script>
<style>
input:focus-within ~ label,
input:not(:placeholder-shown) ~ label {
    transform: scale(0.75,0.75) translate(0,-1.5rem);
}

input:focus-within ~ label{
    @apply text-green-500;
}

/* In order to align the label, we should set this */
input ~ label{
   transform-origin: 0%;
}

</style>