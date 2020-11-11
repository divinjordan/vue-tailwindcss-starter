<template>
  <div class="mt-6" v-if="field.type == 'avatar'">
    <label class="block text-sm leading-5 font-medium text-gray-700">
      {{ field.label }}
    </label>
    <div class="mt-2 flex items-center">
      <span
        class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
      >
        <svg
          class="h-full w-full text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
          v-if="value == undefined"
        >
          <path
            d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <img v-if="value" class="h-12 w-12 rounded-full" :src="value">
      </span>
      <span class="ml-5 rounded-md shadow-sm">
        <label
          type="button"
          for="input"
          class="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
        >
          {{ field.action }}
        </label>
        <input type="file" id="input" class="hidden" ref="input" @change="upload" />
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ["field"],
  data() { return {
    value: undefined
  }},
  methods: {
    upload() {
      console.log("Start upload");
      const element = this.$refs.input;
      const fd = new FormData();
      // Check if we have an image
      if(element.files[0].type.split('/')[0] != 'image'){
        const error = this.$props.field.errors && this.$props.field.errors.NOT_AND_IMAGE ? this.$props.field.errors.NOT_AND_IMAGE : "The uploaded file is not an image";
        this.$emit('error',error);
      }else{
        fd.append(this.$props.field.name,element.files[0]);
        axios.post(this.$props.field.url,fd)
        .then(res => {
          this.value = res.data.url;
          this.$emit('upload',{target : {value: res.data.url}})
        } )
        .catch( error => console.log(error))
      }
    }
  }
};
</script>
