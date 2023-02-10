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

export const requpdateCartList = (skuId, isChecked) => request({url:`cart/checkCart/${skuId}/${isChecked}`, method: 'delete'})
