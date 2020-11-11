<template>
<i class="inline-block">
    <svg v-if="name == 'open_document'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer2" fill="none" stroke-miterlimit="10" :stroke-width="stroke" d="M10 2v60h44V18L38 2H10z" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer2" fill="none" stroke-miterlimit="10" :stroke-width="stroke" d="M38 2v16h16" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer1" fill="none" stroke-miterlimit="10" :stroke-width="stroke" d="M32 48V26m-7.6 9l7.6-9 7.6 9" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
    <svg v-if="name == 'bin'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer2" fill="none" :strole-width="stroke" stroke-miterlimit="10" :stroke-width="stroke" d="M6 10h52m-36 0V5.9A3.9 3.9 0 0 1 25.9 2h12.2A3.9 3.9 0 0 1 42 5.9V10m10.5 0l-2.9 47.1a5 5 0 0 1-4.9 4.9H19.3a5 5 0 0 1-4.9-4.9L11.5 10" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer1" fill="none" :strole-width="stroke" stroke-miterlimit="10" :stroke-width="stroke" d="M32 18v36M22 18l2 36m18-36l-2 36" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
</i>
</template>

<script>
export default {
    props: ['size', 'color', 'name', 'stroke'],
    computed: {
        classes() {
            return `stroke-current text-${this.$props.color} w-${this.$props.size} h-${this.$props.size}`
        }
    }
}
</script>
