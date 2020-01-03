<template>
    <div>
        <h1>Group By</h1>
        <table class="table">
            <thead>
                <tr>
                    <td>Rating</td>
                    <td v-for="number in rowLength" :key="number">{{number}}</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(stocks,rating, index) in groypByRating" :key="index">
                    <th>{{rating}}</th>
                    <td v-for="(symbol,index) in stocks" :key="index">{{symbol}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data: () => ({
        groypByRating: {},
        rowLength: 0
    }),
    async mounted() {
        const promise1 = this.getRating('AAPL')
        const promise2 = this.getRating('MSFT')
        const promise3 = this.getRating('FB')
        const promise4 = this.getRating('ZNGA')
        const promise5 = this.getRating('NVDA')
        const promise6 = this.getRating('WBA')
        const promise7 = this.getRating('AMZN')
        const promise8 = this.getRating('PIH')
        const allPromises = [promise1, promise2, promise3, promise4, promise5, promise6, promise7, promise8]
        const stocks = await Promise.all(allPromises)
        const ratingSet = new Set()
        stocks.forEach(stock => {
            const { rating } = stock
            ratingSet.add(rating.rating)
        })
        const groupByRating = {}
        const ratings = Array.from(ratingSet)
        ratings.forEach(rating => {
            const matchedStocks = stocks.filter(stock => {
                return stock.rating.rating === rating
            })
            const stockSymbols = matchedStocks.map(stock => {
                return stock.symbol
            })
            groupByRating[rating] = stockSymbols
        })
        this.groypByRating = groupByRating

        // 底下調整table寬度兼炫技請無視
        const stocksByRating = Object.values(groupByRating)
        const rowLengths = stocksByRating.map(stocks => {
            return stocks.length
        })
        const maxLength = rowLengths.reduce(function(a, b) {
            return Math.max(a, b);
        });
        this.rowLength = maxLength
    },
    methods: {
        ...mapActions(["getRating"])
    }
}
</script>