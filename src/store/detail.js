import { reqGoodInfo, reqAddOrUpdateShopCart} from "@/api"

const state = {
    goodInfo: {}
}
const mutations = {
    GETGOODINFO(state, goodInfo){
        state.goodInfo = goodInfo;
    }
}
const actions = {
    async getGoodInfo({commit}, skuId){
        let res = await reqGoodInfo(skuId)
        if (res.code === 200) {
            commit('GETGOODINFO', res.data)
        }
    },
    async addOrUpdateShopCart({commit}, {skuId, skuNum}){
        let res = await reqAddOrUpdateShopCart(skuId, skuNum)
        if (res.code === 200) {
            console.log('save data success');
        }
    },
}
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || []
    },

}

export default ({
    state,
    mutations,
    actions,
    getters
})