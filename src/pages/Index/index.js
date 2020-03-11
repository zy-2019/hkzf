import React, { Component } from 'react'

//轮播图
import { Carousel } from 'antd-mobile';

import axios from  'axios'


export class Index extends Component {

    
    state = {
        data: [],  //轮播图状态数据

        //设置轮播图高度
        imgHeight: 176,
      }

      //声命周期挂载阶段  相当于vue中的moutend
    componentDidMount(){
       
        this.getSwiper()


    }

    //   获取轮播图数据
    getSwiper= async ()=>{

       const res = await axios.get('http://api-haoke-dev.itheima.net/home/swiper')
        
       console.log(res);
       
       const { status, body } = res.data
       if (status === 200 ) {
           this.setState({
               data:body
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
            //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            //   afterChange={index => console.log('slide to', index)}
            >   

            {/* 列表渲染 */}
              {this.state.data.map(val => (
                <a
                  key={val.id}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={`http://api-haoke-dev.itheima.net${val.imgSrc}`}
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
