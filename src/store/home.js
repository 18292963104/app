import { reqCategoryList, reqGetBannerlist, reqGetFloorlist } from "@/api"

const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
}
const mutations = {
    CATEGORYLLIST(state, categoryList){
        state.categoryList = categoryList;
    },
    BANNERLIST(state, bannerList){
        state.bannerList = bannerList;
    },
    FLOORLIST(state, floorList){
        state.floorList = floorList;
    }
}
const actions = {
    async categoryList({commit}){
        let res = await reqCategoryList()
        if (res.code === 200) {
            commit('CATEGORYLLIST', res.data)
        }
    },
    async bannerList({commit}){
        let res = await reqGetBannerlist()
        if (res.code === 200) {
            commit('BANNERLIST', res.data)
        }
    },
    async floorList({commit}){
        let res = await reqGetFloorlist()
        if (res.code === 200) {
            commit('FLOORLIST', res.data)
        }
    }
}
const getters = {}

export default ({
    state,
    mutations,
    actions,
    getters
})