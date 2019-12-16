// This is a template of vuex module
import { createTypes, createGetters, createMutations } from './_vuexTool';
import requestSync from './_vuexApi'

const types = createTypes([
    "getSymbolList",
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