import { reqLogin, reqUserInfo, reqLogOut } from "@/api"
import { setToken, getToken, removeToken } from "@/utils/token"

const state = {
    token: getToken(),
    userInfo: {}
}
const mutations = {
    USERLOGIN(state, token){
        state.token = token
    },
    USERINFO(state, info){
        state.userInfo = info
    },
    CLEAEUSERINFO(state){
        state.token = ''
        state.userInfo = {}
        removeToken()
    }

}
const actions = {
    async userLogin({ commit }, data){
        let res = await reqLogin(data)
        if (res.code === 200) {
            commit('USERLOGIN', res.data.token)
            setToken(res.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('reject'))
        }
    },
   async getUserInfo({commit}){
        let res = await reqUserInfo()
        if (res.code === 200) {
            commit('USERINFO', res.data)
        } else {
            return Promise.reject(new Error('reject'))
        }
    },
    async userLogOut({commit}){
        let res = await reqLogOut()
        if (res.code === 200) {
            commit('CLEAEUSERINFO')
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