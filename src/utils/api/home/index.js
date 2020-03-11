

//首页所有后端接口

import axios from  '../../axios'  //请求路劲不能错

//轮播图请求
export function getSwiper() {
    return axios.get('/home/swiper')
}

// 租房小组请求

export function getHouseGroups(area='AREA%7C88cff55c-aaa4-e2e0') {
    return axios.get('/home/groups',{
        params:{
            area
        }
    })
}


//最新资讯列表

export function getNews(area='AREA%7C88cff55c-aaa4-e2e0') {
    return axios.get('/home/news',{
        params:{
            area
        }
    })
}