import { reqGetSearchInfo } from "@/api"

const state = {
    searchList: {}
}
const mutations = {
    GETSEARCHLIST(state, searchList){
        state.searchList = searchList;
    }
}
const actions = {
    async getSearchList({commit}, params={}){
        let res = await reqGetSearchInfo(params)
        if (res.code === 200) {
            commit('GETSEARCHLIST', res.data)
        } 
    }
}
const getters = {
    goodsList(state){
        return state.searchList?.goodsList || []
    },
    trademarkList(){
        return state.searchList?.trademarkList || []
    },
    attrsList(){
        return state.searchList?.attrsList || []
    },
}

export default ({
    state,
    mutations,
    actions,
    getters
})