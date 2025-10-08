import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

//导入antd-mobile样式
import 'antd-mobile/es/global';
//样式导入的先后次序决定对页面最终渲染样式：后面导入的覆盖前面导入的
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


