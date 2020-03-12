
//默认首页

import React, { Component } from 'react'

//轮播图组件
import { Carousel,Flex,WingBlank,SearchBar, Result } from 'antd-mobile';

import {BASE_URL} from  '../../utils/axios'

import { getSwiper,getHouseGroups,getNews } from '../../utils/api/home/index'

import { getCityInfo } from '../../utils/api/city'


//导入首页样式
import './index.scss'

//栏目导航文件
import navs from '../../utils/lanmu'

//宫格布局
import { Grid } from 'antd-mobile';


export class Index extends Component {

    state = {

        currCity: {
          label: '',
          value: ''
        },

        data: [],  //轮播图状态数据

        //设置轮播图高度  默认占位
        imgHeight: 212,

        keyword:'', //顶部搜索关键字

        autoplay:false,  //数据回来前是不能自动播放设置为false

        Grid:[], //宫格数据

        News:[] //最新资讯数据
      }

      //声命周期挂载阶段  相当于vue中的moutend
    componentDidMount(){
        // this.getSwiper()
        // this.getHouseGroups()
        // this.getNews()
        this.getAllData()

        this.getCurrCity()
    }
    
    //获取当前定位城市信息
    getCurrCity = ()=>{

      const myCity = new window.BMap.LocalCity();

      myCity.get(async(Result)=>{
        let res = await getCityInfo(Result.name);

        console.log(res);

        if (res.status === 200) {
          this.setState({
            currCity: res.data
          })
        }
      })


    }


    //promise.all优化重构 处理首页所有接口调用

    getAllData = async ()=>{

      //获取轮播图数据

      //获取租房小组数据

      //获取首页资讯列表数据
      const res = await Promise.all([getSwiper(),getHouseGroups(),getNews()])

      console.log('首页所有接口数据' , res);
      
      if (res[0].status === 200) {
        this.setState({
          data:res[0].data,
          Grid:res[1].data,
          News:res[2].data
        },()=>{
          //有数据后在设置自动播放
          this.setState({
            autoplay:true 
          })
        })
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

    //渲染新闻列表的方法
    renderNews = ()=>{  
      return this.state.News.map(item => (
        <div className="news-item" key={item.id}>
          <div className="imgwrap">
            <img
              className="img"
              src={`${BASE_URL}${item.imgSrc}`}
              alt=""
            />
          </div>
          <Flex className="content" direction="column" justify="between">
            <h3 className="title">{item.title}</h3>
            <Flex className="info" justify="between">
              <span>{item.from}</span>
              <span>{item.date}</span>
            </Flex>
          </Flex>
        </div>
      ))
    }

    // 渲染顶部导航
    renderTopNav = () => {
      const { push } = this.props.history
      return (
        <Flex justify="around" className="topNav">
          <div className="searchBox">
            <div className="city" onClick={()=>push('/cityList')}>
              {this.state.currCity.label}<i className="iconfont icon-arrow" />
            </div>
            <SearchBar
              value={this.state.keyword}
              onChange={(v) => this.setState({ keyword: v })}
              placeholder="请输入小区或地址"
            />
          </div>
          <div className="map" onClick={()=>push('/map')}>
            <i key="0" className="iconfont icon-map" />
          </div>
        </Flex>
      )
    }

    //render 渲染dom树
    render() {
        return (
          <div>

            {/* 顶部导航 */}
            {
              this.renderTopNav()
            }

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

            {/* 首页最新资讯 */}
            {/* 最新资讯 */}
            <div className="news">
                <h3 className="group-title">最新资讯</h3>
                <WingBlank size="md">
                {
                  this.renderNews()
                }
                
                </WingBlank>
              </div> 

          </div>
        );
      }
}

export default Index
