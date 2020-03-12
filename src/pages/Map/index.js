
//地图找房

import React, { Component } from 'react'


import { NavBar, Icon} from 'antd-mobile';

import './index.scss'

export default class Map extends Component {


    componentDidMount(){
        this.initMap()
    }

    //初始化百度地图

    initMap = () => {
        const { BMap } = window;
        const map = new BMap.Map("container");
        var point = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(point, 15);
    }

    render() {
        return (
            <div>   
                {/* 返回的导航 */}
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {
                        this.props.history.goBack()
                        }}
                    >
                    地图找房
                </NavBar>
                <div id="container"></div> 
            </div>
        )
    }
}
