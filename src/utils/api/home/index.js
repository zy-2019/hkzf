

//首页所有后端接口

import axios from  '../../axios'  //请求路劲不能错

//轮播图请求
export function getSwiper() {
    return axios.get('/home/swiper')
}

// 栏目列表请求

export function getColumn() {
    return axios.get('')
}
