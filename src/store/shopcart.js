import { requestCartList, requestDeleteCart, requpdateCartList } from "../api"

const state = {
    cartList: []
}
const mutations = {
    CARTLIST(state, cartList){
        state.cartList = cartList;
    }
}
const actions = {
    async getCartList({commit}){
        let res = await requestCartList()
        if (res.code === 200) {
            commit('CARTLIST', res.data)
        }
    },
    async deleteCart({commit}, skuId){
        let res = await requestDeleteCart(skuId)
        if (res.code === 200) {
            return console.log('success');
        }else{
            return Promise.reject(new Error('reject'))
        }
    },
    async updateCartList({commit}, {skuId, isChecked}){
        let res = await requpdateCartList(skuId, isChecked)
        if (res.code === 200) {
           return console.log('success');
        }else{
           return Promise.reject(new Error('reject'))
        }
    },
    deleteAllChecked({dispatch, getters}){
        let promiseArr = []
        getters.cartList.forEach(item => {
            item.isChecked === 1 ? promiseArr.push(dispatch('deleteCart', item.skuId)) : ''
        });
        return Promise.all(promiseArr)
    }
}
const getters = {
    cartList(state){
        return state.cartList[0]?.cartInfoList || []
    }
}

export default ({
    state,
    mutations,
    actions,
    getters
})