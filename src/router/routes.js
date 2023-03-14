import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from "../pages/Register";
import Search from '../pages/Search';
import Detail from '../pages/Detail'
import ShopCart from '../pages/ShopCart'
import Trade from '../pages/Trade'
import Pay from '../pages/Pay'

export default [
    {
        path: '/pay',
        component: Pay, 
        meta: {show: true},
        name: 'pay'
    },
    {
        path: '/trade',
        component: Trade, 
        meta: {show: true},
        name: 'trade'
    },
    {
        path: '/shopcart',
        component: ShopCart, 
        meta: {show: true},
        name: 'shopcart'
    },
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
        path: '/detail/:skuid',
        component: Detail, 
        meta: {show: false},
        name: 'detail'
    },
    {
        path: '/',
        redirect: '/home'
    }
]