// This is a template of vuex module
import { createTypes, createGetters, createMutations } from './_vuexTool';
import requestSync from './_vuexApi'

const types = createTypes([
    "getKeyMetrics",
    "getRating"
])

const state = {

}

const getters = {
    ...createGetters(types)
}

const actions = {
    getKeyMetrics: async (store, payload) => {
        const { symbol, period } = payload
        let url = `company-key-metrics/${symbol}`
        if (period) {
            url += `?period=${period}`
        }
        return await requestSync(store, types.getKeyMetrics, {
            url
        })
    },
    getRating: async (store, symbol) => {
        return await requestSync(store, types.getRating, {
            url: `company/rating/${symbol}`
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