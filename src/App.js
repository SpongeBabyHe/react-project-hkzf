import React from "react";
//导入组件
import { Button } from "antd-mobile";
//导入路由组件
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//导入Home和CityList组件
import Home from "./pages/Home";
import CityList from "./pages/CityList";

function App() {
  return (
    <Router>
      <div className="App">
        {/* 项目根组件<Button>登陆</Button> */}


        {/* 配置导航菜单 */}
        <Link to="/home">首页</Link>
        <Link to="/citylist">城市选择</Link>
        {/* 配置路由 */}
        <Route path="/home" Component={Home}></Route>
        <Route path="/citylist" Component={CityList}></Route>
      </div>
    </Router>

  );
}

export default App;
