<template>
    <div class="containerOptional">
        <div class="containerOptional__header">
            <p class="header__name">{{name}}</p>
            <ToggleSwitch
                v-if="isOptional"
                class="header__toggle"
                v-model="localEnabled"
                :textOff="'不開放'"
                :textOn="'開放'"
            ></ToggleSwitch>
        </div>
        <div class="containerOptional__row">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        localEnabled: false
    }),
    props: {
        isOptional: {
            type: Boolean,
            default: false
        },
        value: {
            type: Object,
            default: () => {
                return {}
            }
        },
        name: {
            type: String,
            default: ''
        },
        enabled: {
            type: Boolean,
            default: false
        },
        fields: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    mounted() {
        this.fields.forEach(key => {
            const targetValue = this.value[key]
            // 這樣的轉換將0視為true, null undefined視為false
            if (!~~targetValue) {
                this.localEnabled = true
            }
        })
    },
    watch: {
        enabled() {
            this.localEnabled = this.enabled
        },
        localEnabled(newValue) {
            if (newValue === false) {
                const valueCopy = JSON.parse(JSON.stringify(this.value))
                this.fields.forEach(key => {
                    valueCopy[key] = ""
                })
                this.$emit('input', valueCopy)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.containerOptional {
    background-color: #f0eff1;
    padding: 8px 13px;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 84px;
        width: 5px;
        background-color: #1dd476;
    }
    .containerOptional__header {
        display: flex;
        > * {
            align-self: center;
        }
        .header__toggle {
            margin-left: 16px;
        }
    }
    .containerOptional__row {
        display: flex;
        flex-wrap: wrap;
        > *:not(:last-child) {
            margin-right: 24px;
        }
    }
}
</style>