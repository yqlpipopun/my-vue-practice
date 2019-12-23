// This is a template of vuex module
import { createTypes, createGetters, createMutations } from './_vuexTool';
import requestSync from './_vuexApi'

const types = createTypes([
    "getSymbolList",
    "getBatchRequest"
])

const state = {

}

const getters = {
    ...createGetters(types)
}

const actions = {
    getSymbolList: async (store) => {
        return await requestSync(store, types.getSymbolList, {
            url: '/company/stock/list',
        })
    },
    getBatchRequest: async (store, symbols) => {
        const formattedSymbol = symbols.reduce((pre, cur, index) => {
            if (index == 0) {
                return `${pre}`
            } else {
                return `${pre},${cur}`
            }
        })
        return await requestSync(store, types.getBatchRequest, {
            url: `/stock/real-time-price/${formattedSymbol}`
        })
    }
}

const mutations = {
    ...createMutations(types)
}

export {
    state,
    getters,
    actions,
    mutations,
}