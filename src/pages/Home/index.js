import React from "react";
import { Outlet } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>首页</h2>
        <Outlet />
      </div>
    )
  }
}