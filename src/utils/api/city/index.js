//城市相关的所有后端接口

import axios from  '../../axios'  //请求路劲不能错

//获取当前城市
export function getCityInfo(name) {
    //返回一个promise对象
    return axios.get('/area/info',{
        params:{
            name
        }
    })
}


//获取城市列表数据
export function getCityList(level=1) {
    //返回一个promise对象
    return axios.get('/area/city',{
        params:{
            level
        }
    })
}