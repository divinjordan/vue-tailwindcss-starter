<template>
<div>
    <div>
        <slot name="header"></slot>
    </div>
    <div>
        <div v-for=" (line,index) in grid" :key="index" class="flex w-100">
            <div v-for="item in line" :key="item" class="px-2" :class="line.length == 1 ? 'w-full' : `w-1/${line.length}`">
                <form-input @error="setError($event)" :field="fields[item]" :model="values[item]" @update:model="setValue(fields[item],$event.target)" />
            </div>
        </div>
    </div>
    <div class="px-2">
        <slot name="footer" :values="values">
            <div class="mt-6">
                <btn :label="submitText" @click="submit" />
            </div>
        </slot>
    </div>
</div>
</template>

<script>
import {
    extractProxy
} from '@/helpers/forms';
export default {
    props: ['defaultFields', 'defaultValues', 'submitText', 'grid'],
    data() {
        return {
            values: {
                ...this.$props.defaultValues
            },
            fields: {
                ...this.$props.defaultFields
            },
            errors: []
        }
    },
    methods: {
        submit() {
            this.$emit('onSubmit', this.values)
        },
        setValue(field, target) {
            let vals = target.value;
            if (field.type == 'checkbox') {
                // Get values. There are encoded as proxy object. Then we use Object.entries to extract them
                vals = Object.entries(this.values[field.name]).map(([key, val]) => val)
                // check is value is already check
                if (!vals.some(e => e == target.value))
                    // if it is check add it
                    vals.push(target.value)
                else
                    // else remove it
                    vals = vals.filter(e => e != target.value);
                // then we assign the new value.
                this.values[field.name] = vals;
            } else
                this.values[field.name] = vals;
            // validate field

            console.log("input values:", vals);

            // check is this field has an update sibling functionnality
            if (field.updateSiblings) {
                field.updateSiblings.forEach(element => {
                    const {
                        fieldName,
                        updateType
                    } = element
                    //switch update type
                    switch (updateType) {
                        case 'value':
                            //Trigger value = vals
                            //const targetValue = updateMap[vals];
                            this.values[fieldName] = element.valuesMap[vals];
                            break;
                        case 'attribute':
                            console.log("update attribute");
                            this.fields[fieldName][element.attribute] = element.attributesMap[vals]
                            break;
                    }
                })
            }
        },
        setError(error) {
            this.errors.push(error);
            console.log("new error", error);
        },
        updateField() {

        }
    },
    components: {
        'form-input': require('@/components/forms/Input.vue').default,
        'btn': require("@/components/shared/Button.vue").default
    },
    mounted(){
        console.log(this.$props.grid);
    }
}
</script>
