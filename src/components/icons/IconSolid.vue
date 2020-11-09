<template>
<i class="inline-block">
    <svg v-if="name == 'add'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer1" d="M53 29H35V11a3 3 0 0 0-6 0v18H11a3 3 0 0 0 0 6h18v18a3 3 0 0 0 6 0V35h18a3 3 0 0 0 0-6z"></path>
    </svg>
    <svg v-if="name == 'angle_right'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer1" d="M40 31.998L26 18l-4 4.486 9.515 9.512L22 41.513 26 46l14-14.002z"></path>
    </svg>
    <svg v-if="name == 'house'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer1" d="M56 25l7.917 7.576c.175.169-.674.424-.917.424h-7v29a1 1 0 0 1-1 1H42a1 1 0 0 1-1-1V45a1 1 0 0 0-1-1H24a1 1 0 0 0-1 1v17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V33H1a.548.548 0 0 1-.381-.942L32 1.723l14.039 13.571-.026-4.281a2 2 0 0 1 2-2.012H54a2 2 0 0 1 2 2z"></path>
    </svg>
    <svg v-if="name == 'info_help'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer1" d="M32 0a32 32 0 1 0 32 32A32.037 32.037 0 0 0 32 0zm-2.977 15.037a3.62 3.62 0 0 1 4.96 0 3.509 3.509 0 0 1 1.02 2.469 3.5 3.5 0 1 1-7 0 3.512 3.512 0 0 1 1.02-2.469zm6.98 34.97h-8v-4H30V28.024h-1.996v-4H34v21.985h2.004z"></path>
    </svg>
</i>
</template>

<script>
export default {
    props: ['size', 'color', 'name'],
    computed: {
        classes() {
            return `fill-current text-${this.$props.color} w-${this.$props.size} h-${this.$props.size}`
        }
    }
}
</script>
