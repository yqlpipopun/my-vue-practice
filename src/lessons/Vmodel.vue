<template>
    <div>
        <Row>
            <InputSearcher v-model="stock.symbol" @click="searchSymbols()">
                <DialogTable v-model="stock" :table="symbolsList" :name="'Searcher：基金代碼'"></DialogTable>
            </InputSearcher>
        </Row>
        <Row>
            <TableAddable v-model="fakeTable">
                <template v-slot:default="{row}">
                    {{row}}
                    <!-- <ContainerOptional>
                        <InputText :name="'申購'"></InputText>
                        <InputText :name="'單位面額'"></InputText>
                        <InputText :name="'Nav小數位數'"></InputText>
                        <InputText :name="'Nav小數位數'"></InputText>
                        <InputText :name="'Nav小數位數'"></InputText>
                    </ContainerOptional>
                    <ContainerOptional>
                        <InputText :name="'申購'"></InputText>
                        <InputText :name="'單位面額'"></InputText>
                        <InputText :name="'Nav小數位數'"></InputText>
                        <InputText :name="'Nav小數位數'"></InputText>
                        <InputText :name="'Nav小數位數'"></InputText>
                    </ContainerOptional>-->
                </template>
            </TableAddable>
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
        keyMetricsRes: [],
        stock: {},
        symbolsList: [],
        fakeTable: [
            {
                'A': 'A',
                'B': 'B',
                'C': 'C',
                'D': 'D',
            },
            {
                'A': 'A',
                'B': 'B',
                'C': 'C',
                'D': 'D',
            },
            {
                'A': 'A',
                'B': 'B',
                'C': 'C',
                'D': 'D',
            },
        ],
    }),
    methods: {
        async submitSymbol() {
            const response = await this.getKeyMetrics({
                symbol: this.stockSymbol,
                period: 'quarter'
            })
            this.keyMetricsRes = response.metrics
        },
        async searchSymbols() {
            const response = await this.getSymbolList()
            const symbolsList = response.symbolsList
            this.symbolsList = symbolsList;
        },
        ...mapActions(["getKeyMetrics", "getSymbolList"])
    }
}
</script>
<style lang="scss" scoped>
.component__table {
    overflow-x: scroll;
}
</style>