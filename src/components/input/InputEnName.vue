<template>
    <label :ref="`inputGroup${name}`" class="inputGroup">
        <span class="inputGroup__name" :class="{'inputGroup__name--required': required}">{{name}}</span>
        <input class="inputGroup__input" v-model="_value" />
    </label>
</template>
<script>
import { widthMixins } from './_inputMixins'
export default {
    mixins: [widthMixins],
    props: {
        name: {
            type: String,
            default: ''
        },
        value: {
            type: [String, Number],
            required: true,
            default: ''
        },
        required: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        _value: {
            get() {
                return this.value
            },
            set(newValue) {
                this.$emit("input", newValue)
            }
        },
        _message: {
            get() {
                return this.message
            },
            set(newValue) {
                this.$emit("update:message", newValue)
            }
        },
    },
    watch: {
        _value(newValue, oldValue) {
            if (this.checkEnglishName(newValue)) {
                this._value = newValue
            } else if (newValue === "") {
                this._value = newValue
            } else {
                // 正規檢核不通過
                this._value = oldValue
            }
        }
    },
    methods: {
        checkEnglishName(string) {
            // console.log(string)
            const regex = /^[a-zA-Z \-',]+$/
            return regex.test(string)
        },
    }
}
</script>
<style lang="scss" scoped src="./_input.scss">
</style>