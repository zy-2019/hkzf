import React from 'react';

import {BrowserRouter as Router, Route,Switch,Redirect } from 'react-router-dom'

import Home from './pages/Home'
import CityList from './pages/CityList'
import Map from './pages/Map'
import NotFound from './pages/NotFound'


function App() {
  return (
    <div className="App">

        <Router>
          <Switch>
            {/* 重定向 */}
             <Redirect exact from='/' to='/home'></Redirect>
             <Redirect exact from='/home' to='/home/index'></Redirect>

            {/* 一级路由 */}
            {/* home 下配置二级路由 */}
            <Route path ='/home' component={Home}></Route>
            <Route path ='/citylist' component={CityList}></Route>
            <Route path ='/map' component={Map}></Route>
            {/* 404页面 */}
            <Route component={NotFound}></Route>
          </Switch>
        </Router>


    </div>
  );
}

export default App;
