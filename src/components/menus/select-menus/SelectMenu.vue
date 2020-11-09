<template>
<div class="relative">
    <span class="inline-block w-full rounded-md shadow-sm" @click="show = !show">
        <button type="button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" class="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            <div class="flex items-center space-x-3">
                <img :src="selectedItem.image" alt="" class="flex-shrink-0 h-6 w-6 rounded-full">
                <span class="block truncate">
                    {{ selectedItem.label }}
                </span>
            </div>
            <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
        </button>
    </span>
    <transition leave-active-class="transition ease-in duration-100" leave-class="opacity-100" leave-to-class="opacity-0">
        <div class="absolute mt-1 w-full rounded-md bg-white shadow-lg" v-show="show">
            <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="max-h-56 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">
                <select-menu-item @selected="selectItem($event)" v-for="option in options" :key="option.identifier" :isSelected=" selected == option.identifier " :option="option" />
            </ul>
        </div>
    </transition>
</div>
</template>
<script>
const image = "@/assets/avatar.jpg"
export default {
    data() {
        return {
            show: false,
            image: image,
            selected: "divin-jordan",
            options: [
                {
                    label: "Divin jordan",
                    identifier: 'divin-jordan',
                    image: "@/assets/img1.jpeg",
                },
                 {
                    label: "Afrika Kemi",
                    identifier: 'afrika-kemi',
                    image: "@/assets/img2.jpeg"
                }
            ]
        }
    },
    computed:{
        selectedItem(){
          return this.options.find( e => e.identifier == this.selected);
        }
    },
    methods: {
        selectItem(identifier){
            this.show = false;
            this.selected = identifier;
        }
    },
    components: {
        'select-menu-item': require('@/components/menus/select-menus/SelectMenuItem').default,
    }
}
</script>
