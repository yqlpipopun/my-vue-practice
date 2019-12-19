<template>
    <div>
        <h1>Vuex API示範</h1>
        <table class="table mt-3">
            <thead>
                <tr>
                    <td>Symbol</td>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row,index) in symbolListRes.symbolsList" :key="index">
                    <td>{{row.symbol}}</td>
                    <td>{{row.name}}</td>
                    <td>{{row.price}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    async mounted() {
        await this.getSymbolList()
    },
    computed: {
        ...mapGetters(["symbolListRes"])
    },
    methods: {
        ...mapActions(["getSymbolList"])
    }
}
</script>