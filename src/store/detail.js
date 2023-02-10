import { reqGoodInfo, reqAddOrUpdateShopCart} from "@/api"
import { getUUID } from "@/utils/uuid_token";

const state = {
    goodInfo: {},
    uuid_token: getUUID()
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
            return console.log('save data success');
        } else {
            return Promise.reject(new Error('reject'))
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