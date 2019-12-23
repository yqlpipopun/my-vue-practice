<template>
    <div>
        <h1>Vuex API示範</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>symbol</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(company, index) in companiesPriceList" :key="index">
                    <td>{{company.symbol}}</td>
                    <td>{{company.price}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data: () => ({
        companiesPriceList: []
    }),
    async mounted() {
        const response = await this.getBatchRequest(['AAPL', 'AMZN', 'FB', 'GOOG',])
        this.companiesPriceList = response.companiesPriceList
    },
    methods: {
        ...mapActions(["getBatchRequest"])
    }
}
</script>