import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';

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

export default new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {y: 0}
      }
})