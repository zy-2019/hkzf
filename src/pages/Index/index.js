
//默认首页

import React, { Component } from 'react'

//轮播图组件
import { Carousel } from 'antd-mobile';

import {BASE_URL} from  '../../utils/axios'

import { getSwiper } from '../../utils/api/home/index'

export class Index extends Component {

    state = {
        data: [],  //轮播图状态数据

        //设置轮播图高度  默认占位
        imgHeight: 212,

        autoplay:false  //数据回来前是false
      }

      //声命周期挂载阶段  相当于vue中的moutend
    componentDidMount(){
       
        this.getSwiper()


    }

    //   获取轮播图数据
    getSwiper = async ()=>{

       const res = await getSwiper()
        
       console.log(res);//简化后只返回三个数据
       
       const { status, data } = res
       if (status === 200 ) {
           this.setState({
               data:data,
               
           },()=>{
               //有数据后在设置自动播放
               this.setState({
                   autoplay:true 
               })
           })
       }else{
           alert('请求数据失败')
       }
       
    }

    render() {
        return (
          <div>
            <Carousel
              autoplay={true}
              infinite //无限  相当于无缝轮播
            >   

            {/* 列表渲染 */}
              {this.state.data.map(val => (
                <a
                  key={val.id}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={`${BASE_URL}${val.imgSrc}`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </div>
        );
      }
}

export default Index
