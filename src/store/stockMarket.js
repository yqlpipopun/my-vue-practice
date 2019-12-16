// This is a template of vuex module
import { createTypes, createGetters, createMutations } from './_vuexTool';
import requestSync from './_vuexApi'

const types = createTypes([
    "getMajorIndexes",
])

const state = {

}

const getters = {
    ...createGetters(types)
}

const actions = {
    getMajorIndexes: async (store) => {
        return await requestSync(store, types.getMajorIndexes, {
            url: '/majors-indexes',
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