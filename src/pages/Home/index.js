
import React, { Component } from 'react'

import { Route } from 'react-router-dom'

import Index from '../Index'
import House from '../House'
import Profile from '../Profile'

import './index.css'

import { TabBar } from 'antd-mobile';

class Home extends Component {


    //tab状态数据
    state = {
        selectedTab: 'blueTab',
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
                    <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    >
                        <TabBar.Item
                        title="首页"
                        key="Life"
                        icon={
                            <i className="iconfont icon-ind"/>
                        }
                        //选中图标
                        selectedIcon={
                            <i className="iconfont icon-ind"/>
                        }
                        
                        selected={this.state.selectedTab === 'blueTab'}
                        badge={1}

                        //选中状态
                        onPress={() => {
                        this.setState({
                            selectedTab: 'blueTab',
                        });
                        }}
                        data-seed="logId"
                    >
                        </TabBar.Item>
                    </TabBar>
                </div>

            </div>
        )
    }
    
}

export default Home



