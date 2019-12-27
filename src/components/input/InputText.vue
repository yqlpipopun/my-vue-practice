<template>
    <label :ref="`inputGroup${name}`" class="inputGroup">
        <span class="inputGroup__name" :class="{'inputGroup__name--required': required}">{{name}}</span>
        <input
            class="inputGroup__input"
            :value="value"
            @input="$emit('input', $event.target.value)"
        />
    </label>
</template>
<script>
// import { handleArrowMixin } from '@/components/Nav/arrowUp.js'
// import { widthMixins } from './_inputMixins'
export default {
    // mixins: [handleArrowMixin, widthMixins],
    props: {
        name: {
            type: String,
            default: ''
        },
        width: {
            type: [String, Number],
            default: '1'
        },
        value: {
            type: [String, Number],
            default: ''
        },
        required: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        const targetWidth = this.widths[this.width]
        const inputLabel = this.$refs[`inputGroup${this.name}`]
        inputLabel.style.minWidth = targetWidth
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped src="./_input.scss">
</style>