import React from "react";
import { NavBar } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const CityList = () => {
  const navigate = useNavigate();

  return (
    <div className="city-list-container">
      <NavBar onBack={() => navigate(-1)} className="nav-bar-container">城市列表</NavBar>
    </div>
  );
};

export default CityList;