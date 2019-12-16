<template>
    <div>
        <Row>
            <Dropdown v-model="stockSymbol" :options="symbolList" :name="'股票代號'"></Dropdown>
        </Row>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data: () => ({
        stockSymbol: '',
        symbolList: []
    }),
    async mounted() {
        if (!this.symbolListRes) {
            await this.getSymbolList()
        }
        const symbolsList = this.symbolListRes.symbolsList
        console.log({
            symbolsList
        })
        const formatList = symbolsList.map((option) => {
            return {
                name: option.name,
                value: option.symbol
            }
        })
        this.symbolList = formatList
    },
    computed: {
        ...mapGetters(["symbolListRes"])
    },
    methods: {
        ...mapActions(["getSymbolList"])
    }
}
</script>