
//地图找房

import React, { Component } from 'react'

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
                <div id="container">
                    
                </div> 
            </div>
        )
    }
}
