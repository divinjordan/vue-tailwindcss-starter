<template>
 <div class="mt-6">
     <label class="block text-sm leading-5 font-medium text-gray-700">
         {{ field.label }}
     </label>
     <label :for="`${field.name}_input`" class="block mt-2 flex justify-between h-12 border border-gray-300 rounded-md items-center cursor-pointer">
       <div class="">
         <span v-if="value" class="text-gray-600 inline-block ml-4"> {{value}}</span>
         <div v-else class="text-gray-500 inline-block ml-4 placeholer-box flex items-center">
           <icon name="open_document" size="5" stroke="6" class="mr-2"/>
           <span class="font-medium hover:text-green-700"> {{ field.placeholder }} </span>
          </div>
       </div>
       <btn-icon v-if="value" name="bin" size="5" stroke="6" color="white" :class="'mr-2'" @click="remove"/>
       <btn v-else :for="`${field.name}_input`" icon="open_document" label="Uploader le fichier" class="mr-2" /> 
        <input type="file" :id="`${field.name}_input`" ref="input" class="hidden" @change="upload"/>
     </label>
 </div>
</template>

<script>
import axios from 'axios';
export default {
props:['field'],
    data() {
        return {
          value: undefined
        };
    },
    methods:{
      upload(){
        console.log('start upload')
        const field = this.$props.field;
        const file = this.$refs.input.files[0];
        console.log('The file',file);
        const allow = field.fileType ? file.fileType.split('/')[0] == field.fileType || file.fileType == field.fileType : true;
        if(allow){
          console.log("The file has the good type")
          const fd = new FormData();
          fd.append(field.name,file);
          axios.post(field.url,fd)
          .then( res => {
            console.log('upload with success');
            console.log(res);
            this.value = res.data.name;
            this.$emit('upload',{
              target:{
                value: res.data.url
              }
            })
          })
          .catch( error => {
            console.log(error);
            this.$emit('error', field.errors ? field.errors.STANDARD : 'And error occurs when trying to upload the file')
          })
        }else{
          console.log("The file has a wrong type");
          const error = field.errors ? field.errors.TYPE_ERROR : `The uploaded should have type : ${field.type}`
          this.$emit('error',error);
        }
      },
      remove(){
        axios.post(this.$props.field.removeUrl,{file:this.value})
        .then( res => {
          this.value = undefined;
          this.$emit('remove',{
            target: {
              value: undefined
            }
          });
        }).catch( error => {
          // Afficher le modal d'erreur
          console.log("Un erreur c'est produite");
        })
      }
    },
    components:{
      'btn': require('@/components/shared/Btn.vue').default,
      'icon': require('@/components/icons/Icon.vue').default,
      'btn-icon': require('@/components/shared/BtnIcon.vue').default
    }
};
</script>
<style>
.btn-icon:hover .btn-icon-icon{
  @apply text-white
}
</style>