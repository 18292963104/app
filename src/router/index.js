import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';
import store from '@/store';
import { removeToken } from '@/utils/token';

Vue.use(VueRouter)

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;


VueRouter.prototype.push = function (location, reslove, reject) {
    if (reslove && reject) {
        originPush.call(this, location, reslove, reject)
    } else {
        originPush.call(this, location, ()=>{}, ()=>{})
    }
}

VueRouter.prototype.replace = function (location, reslove, reject) {
    if (reslove && reject) {
        originReplace.call(this, location, reslove, reject)
    } else {
        originReplace.call(this, location, ()=>{}, ()=>{})
    }
}

const router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {y: 0}
      }
})

router.beforeEach(async (to, from, next ) => {
    const { token,  userInfo } = store.state.user
    if (token) {
        if (['/login', '/register'].includes(to.path) ) {
            next('/')
        } else {
            if (userInfo.name) {
                next()
            } else {
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    await store.dispatch('userLogOut')
                    next('./login')
                }
            } 
        }
    } else {
        if (['/trade', '/pay', '/paysuccess', '/center'].includes(to.path)) {
            next('/login')
        } else {
            next()
        }
    }
})

export default router;
