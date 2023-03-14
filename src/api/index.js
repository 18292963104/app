import request from "./request";
import mockRequests from "./mockRequest"

export const reqCategoryList = () => request({url:'/product/getBaseCategoryList', method: 'get'})

export const  reqGetBannerlist = () => mockRequests.get('/banner')

export const  reqGetFloorlist = () => mockRequests.get('/floor')

export const reqGetSearchInfo = params => request({url:'/list', method: 'post', data: params})

export const reqGoodInfo = (skuId) => request({url:`/item/${skuId}`, method: 'get'})

export const reqAddOrUpdateShopCart = (skuId, skuNum) => request({url:`/cart/addToCart/${skuId}/${skuNum}`, method: 'post'})

export const requestCartList = () => request({url:'/cart/cartList', method: 'get'})

export const requestDeleteCart = (skuId) => request({url:`cart/deleteCart/${skuId}`, method: 'delete'})

export const requpdateCartList = (skuId, isChecked) => request({url:`cart/checkCart/${skuId}/${isChecked}`, method: 'get'})

export const reqVerifyCode = (phone) => request({url:`/user/passport/sendCode/${phone}`, method: 'get'})

export const reqRegisterUser = (data) => request({url:`/user/passport/register`, method: 'post', data})

export const reqLogin = (data) => request({url: '/user/passport/login', method: 'post', data})

export const reqUserInfo = () => request({url: '/user/passport/auth/getUserInfo', method: 'get'})

export const reqLogOut = () => request({url: '/user/passport/logout', method: 'get'})

export const reqGetUserAdd = () => request({url: '/user/userAddress/auth/findUserAddressList', method: 'get'})

export const reqGetTradeOrder = () => request({url: '/order/auth/trade', method: 'get'})

export const reqSubmitOrder = (tradeNo, data) => request({url: `/order/auth/submitOrder?${tradeNo}`, method: 'post', data})
