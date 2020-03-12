//城市相关的所有后端接口

import axios from  '../../axios'  //请求路劲不能错

//轮播图请求
export function getCityInfo(name) {
    //返回一个promise对象
    return axios.get('/area/info',{
        params:{
            name
        }
    })
}