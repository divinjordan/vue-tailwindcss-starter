<template>
<div>
    <div>
        <slot name="header"></slot>
    </div>
    <form-input v-for="item in fields" :key="item.name" :field="item" :model="values[item.name]" @update:model="setValue(item,$event.target.value)" />
    <div>
        <slot name="footer" :values="values">
            <div class="mt-6">
                <btn :label="submitText" @click="submit" />
            </div>
        </slot>
    </div>
</div>
</template>

<script>
import { extractProxy } from '@/helpers/forms';
export default {
    props: ['fields', 'values','submitText'],
    data() {
        return {
            values: {
                ...this.$props.values
            }
        }
    },
    methods: {
        submit() {
            this.$emit('onSubmit', this.values)
        },
        setValue(field, value) {
            if (field.type == 'checkbox') {
                // Get values. There are encoded as proxy object. Then we use Object.entries to extract them
                let vals = Object.entries(this.values[field.name]).map( ([key,val]) => val)
                // check is value is already check
                if(!vals.some( e => e == value))
                    // if it is check add it
                    vals.push(value)
                else
                    // else remove it
                    vals = vals.filter( e => e != value);

                // then we assign the new value.
                this.values[field.name] = vals;
            } else
                this.values[field.name] = value;

        }
    },
    components: {
        'form-input': require('@/components/forms/Input.vue').default,
        'btn': require("@/components/shared/Button.vue").default
    }
}
</script>
