import { reqVerifyCode, reqRegisterUser } from "@/api"

const state = {
    verifyCode: '',
}
const mutations = {
    GETVERIFYCODE(state, verifyCode){
        state.verifyCode = verifyCode;
    }
}
const actions = {
    async getVerifyCode({commit}, phone){
        let res = await reqVerifyCode(phone)
        if (res.code === 200) {
            commit('GETVERIFYCODE', res.data)
        } else {
            return Promise.reject(new Error('reject'))
        }
    },
    async userRegister({commit}, user){
        let res = await reqRegisterUser(user)
        if (res.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('reject'))
        }
    }
}
const getters = {
}

export default ({
    state,
    mutations,
    actions,
    getters
})