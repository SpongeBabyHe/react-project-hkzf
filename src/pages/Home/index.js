import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { TabBar } from "antd-mobile";
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import "./index.css";

// TabBar 组件
const BottomTabBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value) => {
    navigate(value);
  };

  const tabs = [
    {
      key: "/home",
      title: "Home",
      icon: <AppOutline className="tab-icon" />,
    },
    {
      key: "/home/news",
      title: "News",
      icon: <MessageOutline className="tab-icon" />,
    },
    {
      key: "/home/houseList",
      title: "Rent",
      icon: <UnorderedListOutline className="tab-icon" />,
    },
    {
      key: "/home/profile",
      title: "Me",
      icon: <UserOutline className="tab-icon" />,
    },
  ];

  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div >
          <Outlet />
        </div>

        {/* TabBar */}
        <div >
          <BottomTabBar />
        </div>
      </div>
    );
  }
}