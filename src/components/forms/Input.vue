<template>
  <div>
    <!-- input text -->
    <div v-if="!field.type || field.type == 'text'" class="mt-6">
      <label
        :for="`input_${field.name}`"
        class="block text-sm font-medium leading-5 text-gray-700"
        >{{ field.label }}</label
      >
      <input
        @input="$emit('update:model', $event)"
        :value="model"
        :placeholder="field.placeholder ? field.placeholder : ''"
        :id="`input_${field.name}`"
        class="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      />
    </div>

    <!-- textarea -->
    <div class="mt-6" v-if="field.type == 'textarea'">
      <label
        :for="`input_${field.name}`"
        class="block text-sm leading-5 font-medium text-gray-700"
      >
        {{ field.label }}
      </label>
      <div class="rounded-md shadow-sm">
        <textarea
          @input="$emit('update:model', $event)"
          :value="model"
          :placeholder="field.placeholder ? field.placeholder : ''"
          :id="`input_${field.name}`"
          rows="3"
          class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        ></textarea>
      </div>
      <p class="mt-2 text-sm text-gray-500" v-if="field.small">
        {{ field.small ? field.small : "" }}
      </p>
    </div>

    <!-- select options -->
    <div class="mt-6" v-if="field.type == 'select'">
      <label
        :for="`select_${field.name}`"
        class="block text-sm font-medium leading-5 text-gray-700"
        >{{ field.label }}</label
      >
      <select
        :id="`select_${field.name}`"
        :value="model"
        @change="$emit('update:model', $event)"
        class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      >
        <option
          v-for="option in field.options"
          :value="option.value"
          :key="`select_${field.name}_${option.value}`"
        >
          {{ option.label }}</option
        >
      </select>
    </div>

    <!-- radio buttons -->
    <div class="block mt-6" v-if="field.type == 'radio'">
      <span class="text-gray-700 font-medium text-sm leading-5">{{
        field.label
      }}</span>
      <p class="text-gray-500 text-sm" v-if="field.small">{{ field.small }}</p>
      <div class="mt-2">
        <div
          v-for="option in field.options"
          :key="`radio${field.name}_${option.value}`"
        >
          <label
            class="inline-flex items-center"
            :for="`radio_${field.name}_option${option.value}`"
          >
            <input
              @change="$emit('update:model', $event)"
              :value="option.value"
              :checked="model == option.value"
              :id="`radio_${field.name}_option${option.value}`"
              type="radio"
              class="form-radio h-4 w-4 text-green-600 transition duration-150 ease-in-out"
            />
            <span
              class="ml-2 text-gray-700 text-sm block font-medium leading-5"
              >{{ option.label }}</span
            >
          </label>
        </div>
      </div>
    </div>

    <!-- checkbox options -->
    <div class="block mt-6" v-if="field.type == 'checkbox'">
      <span class="text-gray-700 font-medium text-sm leading-5">{{
        field.label
      }}</span>
      <p class="text-gray-500 text-sm" v-if="field.small">{{ field.small }}</p>
      <div class="mt-2">
        <div
          v-for="option in field.options"
          :key="`${field.name}_checkbox_${option.value}`"
        >
          <label
            class="inline-flex items-center"
            :for="`checkbox_${field.name}_option${option.value}`"
          >
            <input
              @change="$emit('update:model', $event)"
              :value="option.value"
              :checked="model.includes(option.value)"
              :id="`checkbox_${field.name}_option${option.value}`"
              class="form-checkbox text-green-600 transition duration-150 ease-in-out"
              type="checkbox"
            />
            <span class="ml-2">{{ option.label }}</span>
          </label>
        </div>
      </div>
    </div>

    <input-prepend 
    :field="field"
    :model="model"
    v-if="field.type == 'prepend'"
     @prepend="$emit('update:model',$event)"
    />

    <input-avatar
      v-if="field.type == 'avatar'"
      @upload="$emit('update:model',$event)"
      @error="$emit('error',$event)"
      :field="field"
    />

    <input-file
      @upload="$emit('update:model', $event)"
      @error="$emit('error',$event)"
      @remove="$emit('event',$event)"
      v-if="field.type == 'file'"
      :field="field"
    />
  </div>
</template>

<script>
export default {
  props: ["field", "model"],
  data() {
    return {
      value: this.$props.model,
    };
  },
  components:{
    'input-avatar': require("@/components/forms/InputAvatar.vue").default,
    'input-file': require("@/components/forms/InputFile.vue").default,
    'input-prepend': require('@/components/forms/InputPrepend.vue').default
  },
  mounted(){
    console.log("input mounted");
  }
};
</script>
