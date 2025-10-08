import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//导入antd-mobile样式
import 'antd-mobile/es/global';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


