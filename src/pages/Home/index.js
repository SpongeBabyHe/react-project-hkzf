import React from "react";

import { Route, Routes } from "react-router-dom";

import News from '../News';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        首页
        <Routes>
          <Route path="news" element={<News />} ></Route>
        </Routes>

      </div>
    )
  }
}