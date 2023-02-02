import Mock from 'mockjs'
import banner from './banner.json'
import floor from './floor.json'

// webpack 默认暴露的有： 图片 and Json数据格式

Mock.mock('/mock/banner', {code: 200, data: banner})
Mock.mock('/mock/floor', {code: 200, data: floor})