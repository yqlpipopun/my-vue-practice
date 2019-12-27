<template>
    <div class="tableAddable">
        <input v-model="currentIndex" />
        <table class="tableAddable__table">
            <thead>
                <tr class="table__row">
                    <th v-for="(cell, index) in headers" :key="index">{{cell.text}}</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table__row">
                    <td>幣別代號名稱</td>
                    <td>單位面額</td>
                    <td>NAV小數位數</td>
                </tr>
                <tr v-for="(row,index) in value" :key="index">
                    <td :colspan="headers.length">
                        <slot v-bind:row="row">{{row}}</slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
// import RowEditable from './RowEditable.vue'
export default {
    data: () => ({
        currentRowId: '',
        currentIndex: 0
    }),
    props: {
        value: {
            type: Array,
            default: () => {
                return Array
            }
        },
        headers: {
            type: Array,
            default: () => {
                return [
                    {
                        text: '幣別代號名稱',
                    },
                    {
                        text: '單位面額',
                    },
                    {
                        text: 'NAV小數位數',
                    }
                ]
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.tableAddable {
    .tableAddable__table {
        margin-left: 39px;
        border: solid 1px #c8c8c8;
        background-color: #c6d1ff;
        border-spacing: 0;
        td {
            padding: 0;
            border: solid 1px #c8c8c8;
            border-bottom: 0;
            &:not(:last-child) {
                border-right: 0;
            }
        }
    }
}
</style>