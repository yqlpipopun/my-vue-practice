<template>
    <div class="dialogTable">
        <p>{{name}}</p>
        <!-- {{table}} -->
        <div class="dialogTable__table">
            <table>
                <tbody>
                    <tr v-for="(row,index) in table" :key="index">
                        <!-- <input type="checkbox" /> -->
                        <td>{{row.symbol}}</td>
                        <td>{{row.name}}</td>
                        <td>{{row.price}}</td>
                        <td>
                            <button class="btn btn-primary" @click="$emit('input', row)">選取</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        },
        table: {
            type: Array,
            default: () => {
                return []
            }
        }
    },

}
</script>
<style lang="scss" scoped>
.dialogTable {
    background-color: white;
    position: fixed;
    // width: 600px;
    overflow-x: scroll;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .dialogTable__table {
        overflow-y: scroll;
        height: 400px;
    }
}
</style>