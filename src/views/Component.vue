<template>
    <div>
        <Row>
            <Dropdown v-model="stockSymbol" :name="'股票代號'" :options="symbolList"></Dropdown>
        </Row>
        <Row>選擇股票代號： {{stockSymbol}}</Row>
        <Row>
            <ButtonWFP @click="submitSymbol()">Submit</ButtonWFP>
        </Row>
        <div v-if="keyMetricsRes" class="component__table">
            <table>
                <thead>
                    <tr>
                        <td v-for="(td,key,index) in keyMetricsRes.metrics[0]" :key="index">{{key}}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row,index) in keyMetricsRes.metrics" :key="index">
                        <td v-for="(td,index) in row" :key="index">{{td}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data: () => ({
        stockSymbol: 'AAPL',
        symbolList: []
    }),
    async mounted() {
        if (!this.symbolListRes) {
            await this.getSymbolList()
        }
        const symbolsList = this.symbolListRes.symbolsList
        const formatList = symbolsList.map((option) => {
            return {
                text: option.name,
                value: option.symbol,
                click: () => { }
            }
        })
        this.symbolList = formatList
    },
    computed: {
        ...mapGetters(["symbolListRes", "keyMetricsRes"])
    },
    methods: {
        async submitSymbol() {
            const response = await this.getKeyMetrics({
                symbol: this.stockSymbol,
                period: 'quarter'
            })
            console.log({
                response
            })
        },
        ...mapActions(["getSymbolList", "getKeyMetrics"])
    }
}
</script>
<style lang="scss" scoped>
.component__table {
    overflow-x: scroll;
}
</style>