<template>
<div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
    <div class="flex-1 flex justify-between sm:hidden">
        <div class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
            Previous
        </div>
        <div class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
            Next
        </div>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-baseline sm:justify-between">
        <div class="flex leading-5 h-5 items-baseline">
            <div class="leading-5 text-sm text-gray-700">
                Elements par page:
            </div>
            <label class="block ml-4 h-4">
                <select class="form-select text-xs block w-full mt-1" v-model="perPage">
                    <option>10</option>
                    <option>20</option>
                    <option>25</option>
                    <option>30</option>
                </select>
            </label>
        </div>
        <div>
            <nav class="relative z-0 inline-flex shadow-sm">
                <div @click="activePage = activePage - 1" v-if="showPrevious" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous">
                    <!-- Heroicon name: chevron-left -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </div>
                
                <item @click="activePage = 1" :current="1" :activePage="activePage"></item>
                <dashes v-if="pageCounter.showLeftDashes"/>
                <item @click="activePage = parseInt(item)" v-for="item in pageCounter.items" :key="`count${item}`" :current="item" :activePage="activePage"></item>
                <dashes v-if="pageCounter.showRightDashes" />
                <item @click="activePage = pageCount" :current="pageCount" :activePage="activePage"></item>

                <div @click="activePage = activePage + 1" v-if="showNext" class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next">
                    <!-- Heroicon name: chevron-right -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </nav>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['total'],
    data() {
        return {
            perPage: 10,
            activePage: 2,
            itemToShow: 7,
            staticItems: 2,
            staticPlaces: 4 // staticItems + 2 dashes
        }
    },
    computed: {
        pageCount(){
            return Math.ceil(this.$props.total / this.perPage);
        },
        showPrevious() {
            return this.pageCount > 1 && this.activePage != 1;
        },
        showNext() {
            return this.pageCount > 1 && this.activePage != this.pageCount;
        },
        pageCounter(){

            // variables that will be use
            let showLeftDashes = true;
            let showRightDashes = true;
            const items = [];
            let start =  2;
            let freePlaces = 0;

            // compute middle place
            const middleLeft = Math.ceil(this.itemToShow/2);
            const middleRight = this.pageCount - Math.floor(this.itemToShow/2)

            // compute free places and start
            if(middleLeft < this.activePage && this.activePage < middleRight){
                freePlaces = this.itemToShow - 4 // first position + last position + 2 dashes = 4
                start = this.activePage - Math.floor(freePlaces/2)
            }else if(middleLeft >= this.activePage){
                freePlaces = this.itemToShow - 3; // first position + last position + 1 dashes;
                start = 2;
                showLeftDashes = false;
            }else{
                freePlaces = this.itemToShow - 3;
                start = this.pageCount - 1; // start from the end.
                showRightDashes = false;
            }
    
            // filling
            let i = start;
            if(showRightDashes){
                while( freePlaces > 0){
                    items.push(i);
                    i++;
                    freePlaces--;
                }
            }else{
                while( freePlaces > 0){
                    console.log("dasd")
                    items.unshift(i);
                    i--;
                    freePlaces--;
                }
            }
         
            return {
                showLeftDashes,
                showRightDashes,
                items
            }
        }
    },
    mounted(){
    },
    components:{
        'item': require('@/components/pagination/PaginationItem.vue').default,
        'dashes': require('@/components/pagination/Dashes.vue').default
    }
}
</script>
