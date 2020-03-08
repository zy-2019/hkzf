
import React, { Component } from 'react'

import { Route,Link} from 'react-router-dom'

import Index from '../Index'
import House from '../House'
import Profile from '../Profile'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Link to ='/home/index'>默认</Link>
                <Link to ='/home/house'>房屋</Link>
                <Link to ='/home/profile'>个人中心</Link>
                
                <Route path ='/home/index' component={Index}></Route>
                <Route path ='/home/house' component={House}></Route>
                <Route path ='/home/profile' component={Profile}></Route>

            </div>
        )
    }
}
