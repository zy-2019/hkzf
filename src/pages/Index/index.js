
//默认首页

import React, { Component } from 'react'

//轮播图组件
import { Carousel,Flex } from 'antd-mobile';

import {BASE_URL} from  '../../utils/axios'

import { getSwiper,getHouseGroups } from '../../utils/api/home/index'

//导入首页样式
import './index.scss'

//栏目导航文件
import navs from '../../utils/lanmu'

//宫格布局
import { Grid } from 'antd-mobile';


export class Index extends Component {

    state = {
        data: [],  //轮播图状态数据

        //设置轮播图高度  默认占位
        imgHeight: 212,

        autoplay:false,  //数据回来前是false

        Grid:[] //宫格数据
      }

      //声命周期挂载阶段  相当于vue中的moutend
    componentDidMount(){
       
        this.getSwiper()
        this.getHouseGroups()
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
    //轮播图渲染列表
    readerSwiper = ()=>{
        return this.state.data.map(val => (
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
          ))
    }

    //渲染栏目导航
    getNavs = ()=>{
        return  navs.map((item)=>{
            return <Flex.Item onClick={() => console.log(1)} key={item.id}>
                     <img alt='' src={item.img} />
                     <p>{item.title}</p>
                 </Flex.Item>
        })
    }


    //获取租房小组数据
    getHouseGroups = async()=>{
      const res = await getHouseGroups()
      console.log(res);

      const { status, data } = res
      if (status === 200 ) {
          this.setState({
            Grid:data,
          })
      }else{
          alert('请求数据失败')
      }
    }

   
    render() {

        return (
          <div>
            {/* 轮播图 */}
            <Carousel
              autoplay={true}
              infinite //无限  相当于无缝轮播
            >   

            {/* 列表渲染 */}
              {
                this.readerSwiper()
              }
            </Carousel>

            {/* 栏目导航 */}
            <Flex className="nav">
               {
                  this.getNavs()
               }
            </Flex>

            {/* 租房小组 */}
            <div className="group">
                <Flex className="group-title" justify="between">
                <h3>租房小组</h3>
                <span>更多</span>
                </Flex>      
            </div>

            {/* 宫格布局 */}
            <Grid 
              data={this.state.Grid}
              square={false}
              hasLine={false}
              columnNum={2}
              renderItem={item => (
                <Flex className="grid-item" justify="between">
                    <div className="desc">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  <img src={`${BASE_URL}${item.imgSrc}`} alt="" />
                </Flex>
            )}
            />

            
          </div>
        );
      }
}

export default Index
