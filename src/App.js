import React from "react";
//导入组件
import { Button } from "antd-mobile";
//导入路由组件
import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate } from 'react-router-dom'
//导入Home和CityList组件
import Home from "./pages/Home";
import CityList from "./pages/CityList";
import News from "./pages/News";
import HouseList from "./pages/HouseList";
import Profile from "./pages/Profile";
import Index from "./pages/Index";
import Map from "./pages/Map";



function App() {
  return (
    <Router>
      <div className="App">


        {/* 配置路由 */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />}>
            <Route index element={<Index />} />
            <Route path="news" element={<News />} />
            <Route path="houseList" element={<HouseList />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/cityList" element={<CityList />} />
          <Route path="/map" element={<Map />} />
        </Routes>

      </div >
    </Router >

  );
}

export default App;
