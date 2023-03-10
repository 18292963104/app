import { reqGetUserAdd, reqGetTradeOrder } from '../api/index'

const state ={
    addInfo: [],
    tradeOrder: {}
}

const mutations = {
    USERADDRESS(state, add){
        state.addInfo = add
    },
    USERTRADEAUTH(state, order){
        state.tradeOrder = order
    }
}

const actions = {
    async getUserAdd({commit}){
        let res = await reqGetUserAdd()
        if (res.code === 200) {
            commit('USERADDRESS', res.data)
        }
    },
    async getUserTradeOrder({commit}){
        let res = await reqGetTradeOrder()
        if (res.code === 200) {
            commit('USERTRADEAUTH', res.data)
        }
    }
}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}