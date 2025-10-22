import React from "react";
import { Swiper, Grid } from "antd-mobile";
import nav1 from "../../assets/images/nav1.png";
import nav2 from "../../assets/images/nav2.png";
import nav3 from "../../assets/images/nav3.png";
import group1 from "../../assets/images/group1.jpeg";
import group2 from "../../assets/images/group2.jpg";
import "./index.scss";

const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg'
];

const navs = [
  {
    id: 1,
    img: nav1,
    title: '整租',
    path: '/home/rent'
  },
  {
    id: 2,
    img: nav2,
    title: '合租',
    path: '/home/rent'
  },
  {
    id: 3,
    img: nav3,
    title: '地图找房',
    path: '/home/rent'
  },
  {
    id: 4,
    img: nav1, // 使用 nav1 作为第四个图标
    title: '去出租',
    path: '/home/rent'
  },
];
// 样例数据，实际数据需要从后端获取
const groupItems = [
  {
    id: 1,
    title: '家住回龙观',
    img: group1,
    num: 2000
  },
  {
    id: 2,
    title: '宜居四五环',
    img: group2,
    num: 2000
  },
  {
    id: 3,
    title: '烟火三里屯',
    img: group1,
    num: 2000
  },
  {
    id: 4,
    title: '紧邻十号线',
    img: group1,
    num: 2000
  },
];
// 样例数据，实际数据需要从后端获取
const newsItems = [
  {
    id: 1,
    title: '最新资讯1',
    time: '2025-01-01',
    img: group1,
    content: '最新资讯1内容',
  },
  {
    id: 2,
    title: '最新资讯2',
    time: '2025-01-01',
    img: group1,
    content: '最新资讯2内容',
  },
  {
    id: 3,
    title: '最新资讯3',
    time: '2025-01-01',
    img: group1,
    content: '最新资讯3内容',
  },
];
export default class Index extends React.Component {
  render() {
    return (
      <div className="index-container">
        {/* 轮播图 */}
        <Swiper loop autoplay>
          {images.map((src, index) => (
            <Swiper.Item key={index}>
              <img
                src={src}
                alt={`轮播图${index + 1}`}
                className="swiper-image"
              />
            </Swiper.Item>
          ))}
        </Swiper>
        {/* 导航 */}
        <Grid columns={4} gap={8} className="nav-grid-container">
          {navs.map((nav) => (
            <Grid.Item key={nav.id}>
              <div>
                <img src={nav.img} alt={nav.title} />
                <span>{nav.title}</span>
              </div>
            </Grid.Item>
          ))}
        </Grid>
        {/* 推荐租房小组 */}
        <div>
          <h3>
            租房小组<span>更多</span>
          </h3>
          <Grid columns={2} gap={8} className="group-grid-container">
            {groupItems.map((item) => (
              <Grid.Item key={item.id}>
                <div>
                  <div>
                    <p>{item.title}</p>
                    <span>{item.num}人</span>
                  </div>
                  <img src={item.img} alt={item.title} />
                </div>
              </Grid.Item>
            ))}
          </Grid>
        </div>
        {/* 最新资讯 */}
        <div>
          <h3>
            最新资讯<span>更多</span>
          </h3>
          <Grid columns={1} gap={8} className="news-grid-container">
            {newsItems.map((item) => (
              <Grid.Item key={item.id}>
                <div>
                  <img src={item.img} alt={item.title} />
                  <div>
                    <p>{item.title}</p>
                    <div className="news-meta">
                      <span>{item.content}</span>
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              </Grid.Item>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}