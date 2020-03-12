
import React, { Component } from 'react'

import { getCityList } from '../../utils/api/city'

export default class CityList extends Component {


    //生命周期  用来操作dom 发送ajax请求
    componentDidMount(){
        this.getCityList()
    }
    //获取城市列表数据

    getCityList = async()=>{
        const res = await getCityList()
        console.log('城市列表数据',res);
    }

    render() {
        return (
            <div>
                <h1>CityList</h1>
            </div>
        )
    }
}
