<template>
    <div>
        <Row>
            <Dropdown v-model="stockSymbol" :name="'選擇股票代號'" :options="stockSymbols"></Dropdown>
            <InputName v-model="stockSymbol" :name="'或自行輸入'"></InputName>
        </Row>
        <Row>選擇股票代號： {{stockSymbol}}</Row>
        <Row>
            <ButtonWFP @click="submitSymbol()">Submit</ButtonWFP>
        </Row>
        <div v-if="keyMetricsRes.length!==0" class="component__table">
            <table class="table">
                <thead>
                    <tr>
                        <td v-for="(td,key,index) in keyMetricsRes" :key="index">{{key}}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row,index) in keyMetricsRes" :key="index">
                        <td v-for="(td,index) in row" :key="index">{{td}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data: () => ({
        stockSymbols: [
            {
                text: 'AAPL',
                value: 'AAPL',
            },
            {
                text: 'AMZN',
                value: 'AMZN'
            },
            {
                text: 'FB',
                value: 'FB'
            },
            {
                text: 'GOOG',
                value: 'GOOG'
            }
        ],
        stockSymbol: 'AAPL',
        keyMetricsRes: []
    }),
    methods: {
        async submitSymbol() {
            const response = await this.getKeyMetrics({
                symbol: this.stockSymbol,
                period: 'quarter'
            })
            this.keyMetricsRes = response.metrics
        },
        ...mapActions(["getKeyMetrics",])
    }
}
</script>
<style lang="scss" scoped>
.component__table {
    overflow-x: scroll;
}
</style>