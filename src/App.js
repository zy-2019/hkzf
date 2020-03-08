import React from 'react';

// import { Button } from 'antd-mobile';

import {BrowserRouter as Router, Route,Link,Switch } from 'react-router-dom'

import Home from './pages/Home'
import CityList from './pages/CityList'
import Map from './pages/Map'
import NotFound from './pages/NotFound'


function App() {
  return (
    <div className="App">
        {/* <Button type='primary'>按钮</Button> */}
        <Router>

          <Link to ='/home'>首页</Link>
          <Link to = '/citylist'>城市列表</Link>
          <Link to = '/map'>地图</Link>
          <Switch>
            <Route path ='/home' component={Home}></Route>
            <Route path ='/citylist' component={CityList}></Route>
            <Route path ='/map' component={Map}></Route>
            <Route component={NotFound}></Route>
          </Switch>
           
        </Router>


    </div>
  );
}

export default App;
