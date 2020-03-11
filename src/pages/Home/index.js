
import React, { Component } from 'react'

import { Route } from 'react-router-dom'

import Index from '../Index'
import House from '../House'
import Profile from '../Profile'

import { TabBar } from 'antd-mobile';

class Home extends Component {


    //tab状态数据
    state = {
        selectedTab: 'redTab',
        fullScreen: true,
      };
   
    render() {
        return (
            <div>
                {/* 二级路由配置 */}
                <Route path ='/home/index' component={Index}></Route>
                <Route path ='/home/house' component={House}></Route>
                <Route path ='/home/profile' component={Profile}></Route>
                
                {/* 全局导航 */}
                <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                    <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    >
                        <TabBar.Item
                        title="首页"
                        key="Life"
                        icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        //选中图标
                        selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                        />
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



