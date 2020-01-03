<template>
    <div>
        <h1>Group By</h1>
        <table class="table">
            <thead>
                <tr>
                    <td>Rating</td>
                    <td v-for="number in rowLengthRating" :key="number">{{number}}</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(stocks,rating, index) in groypByRating" :key="index">
                    <th>{{rating}}</th>
                    <td v-for="(symbol,index) in stocks" :key="index">{{symbol}}</td>
                </tr>
            </tbody>
        </table>
        <table class="table">
            <thead>
                <tr>
                    <td>ROA</td>
                    <td v-for="number in rowLengthRoa" :key="number">{{number}}</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(stocks,rating, index) in groypByRoa" :key="index">
                    <th>{{rating}}</th>
                    <td v-for="(symbol,index) in stocks" :key="index">{{symbol}}</td>
                </tr>
            </tbody>
        </table>
        <table class="table">
            <thead>
                <tr>
                    <td>DCF</td>
                    <td v-for="number in rowLengthDcf" :key="number">{{number}}</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(stocks,rating, index) in groypByDcf" :key="index">
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
        groypByRoa: {},
        groypByDcf: {},
        rowLengthRating: 0,
        rowLengthRoa: 0,
        rowLengthDcf: 0
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
        console.log({
            stocks
        })
        const ratingSet = new Set()
        const RoaScoreSet = new Set()
        const dcfScoreSet = new Set()
        stocks.forEach(stock => {
            const { rating, ratingDetails } = stock
            //const { rating } = stock
            ratingSet.add(rating.rating)
            RoaScoreSet.add(ratingDetails.ROA.score)
            dcfScoreSet.add(ratingDetails.DCF.score)

        })
        /*console.log({
            RoaScoreSet
        })*/
        const groupByRating = {}
        const groupByRoaScore = {}
        const groupByDcfScore = {}
        const ratings = Array.from(ratingSet)
        const RoaScores = Array.from(RoaScoreSet)
        const dcfScores = Array.from(dcfScoreSet)
        ratings.forEach(rating => {
            const matchedStocks = stocks.filter(stock => {
                return stock.rating.rating === rating
            })
            const stockSymbols = matchedStocks.map(stock => {
                return stock.symbol
            })
            groupByRating[rating] = stockSymbols
        })
        RoaScores.forEach(RoaScore => {
            const matchedStocks = stocks.filter(stock => {
                return stock.ratingDetails.ROA.score === RoaScore
            })
            const stockSymbols = matchedStocks.map(stock => {
                return stock.symbol
            })
            groupByRoaScore[RoaScore] = stockSymbols
        })
        dcfScores.forEach(dcfScore => {
            const matchedStocks = stocks.filter(stock => {
                return stock.ratingDetails.DCF.score === dcfScore
            })
            const stockSymbols = matchedStocks.map(stock => {
                return stock.symbol
            })
            groupByDcfScore[dcfScore] = stockSymbols
        })
        this.groypByRating = groupByRating
        this.groypByRoa = groupByRoaScore
        this.groypByDcf = groupByDcfScore

        // 底下調整table寬度兼炫技請無視
        const stocksByRating = Object.values(groupByRating)
        const rowLengthsRating = stocksByRating.map(stocks => {
            return stocks.length
        })
        const maxLengthRating = rowLengthsRating.reduce(function(a, b) {
            return Math.max(a, b);
        });
        this.rowLengthRating = maxLengthRating
        // ROA
        const stocksByRoa = Object.values(groupByRoaScore)
        const rowLengthsRoa = stocksByRoa.map(stocks => {
            return stocks.length
        })
        const maxLengthRoa = rowLengthsRoa.reduce(function(a, b) {
            return Math.max(a, b);
        });
        this.rowLengthRoa = maxLengthRoa
        // DCF
        const stocksByDcf = Object.values(groupByDcfScore)
        const rowLengthsDcf = stocksByDcf.map(stocks => {
            return stocks.length
        })
        const maxLengthDcf = rowLengthsDcf.reduce(function(a, b) {
            return Math.max(a, b);
        });
        this.rowLengthDcf = maxLengthDcf
    },
    methods: {
        ...mapActions(["getRating"])
    }
}
</script>