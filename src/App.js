import React from "react";
//导入组件
import { Button } from "antd-mobile";
//导入路由组件
import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate } from 'react-router-dom'
//导入Home和CityList组件
import Home from "./pages/Home";
import CityList from "./pages/CityList";
import News from "./pages/News";

function App() {
  return (
    <Router>
      <div className="App">
        {/* 项目根组件<Button>登陆</Button> */}


        {/* 配置导航菜单 */}
        {/* <ul>
          <li><Link to="/home">首页</Link></li>
          <li><Link to="/citylist">城市选择</Link></li>
        </ul> */}


        {/* 配置路由 */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />}>
            <Route index element={<div>欢迎来到首页</div>} />
            <Route path="news" element={<News />} />
          </Route>
          <Route path="/citylist" element={<CityList />}></Route>
        </Routes>

      </div >
    </Router >

  );
}

export default App;
