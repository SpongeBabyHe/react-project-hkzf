import React from "react";
import { Swiper, Grid } from "antd-mobile";
import nav1 from "../../assets/images/nav1.png";
import nav2 from "../../assets/images/nav2.png";
import nav3 from "../../assets/images/nav3.png";
import "./index.css";

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

export default class Index extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}