import request from "./request";
import mockRequests from "./mockRequest"

export const reqCategoryList = () => request({url:'/product/getBaseCategoryList', method: 'get'})

export const  reqGetBannerlist = () => mockRequests.get('/banner')

export const  reqGetFloorlist = () => mockRequests.get('/floor')