
import React, { Component } from 'react'

import { Route } from 'react-router-dom'

import Index from '../Index'
import House from '../House'
import Profile from '../Profile'

import './index.css'

//引入tabbar 数据
import tabItems from '../../utils/tabBar-item'

import { TabBar } from 'antd-mobile';




class Home extends Component {

    //提取出来
    redderTabItems=()=>{
        return tabItems.map((item)=>{
            return (
                <TabBar.Item
                    title={item.title}  
                    key={item.title}
                    icon={
                        <i className={`iconfont ${item.icon}`}/>
                    }
                    //选中图标
                    selectedIcon={
                        <i className={`iconfont ${item.icon}`}/>
                    }
                    
                    selected={this.state.selectedTab === item.path}
                    //选中状态
                    onPress={() => {
                    this.props.history.push(item.path)
                    this.setState({
                        selectedTab: item.path,
                    });
                    }}
                >
                </TabBar.Item>
            )
        })
    }

    //tab状态数据
    state = {
        selectedTab: this.props.location.pathname  //把selectedTab默认值改为当前url参数
      };
   
    render() {
        return (
            
            <div>

                {/* 二级路由配置 */}
                <Route path ='/home/index' component={Index}></Route>
                <Route path ='/home/house' component={House}></Route>
                <Route path ='/home/profile' component={Profile}></Route>
                
                {/* 全局导航 */}
                <div className='barBox'>

                    {/* tabBar组件 */}
                    <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    >

                        {   
                           //调用
                            this.redderTabItems()
                        }
                        
                    </TabBar>
                </div>

            </div>
        )
    }
    
}

export default Home



