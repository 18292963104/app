import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from "../pages/Register";
import Search from '../pages/Search';

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
    routes: [
        {
            path: '/home',
            component: Home, 
            meta: {show: true},
            name: 'home'
        },
        {
            path: '/login',
            component: Login,
            meta: {show: false},
            name: 'login'
        },
        {
            path: '/register',
            component: Register,
            meta: {show: false},
            name: 'register'
        },
        {
            path: '/search/:keyword?',
            component: Search,
            meta: {show: true},
            name: 'search'
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})