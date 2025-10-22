import React from "react";
import { Swiper, Grid } from "antd-mobile";
import img1 from "../../assets/images/nav1.png";
import img2 from "../../assets/images/nav2.png";
import img3 from "../../assets/images/nav3.png";
import img4 from "../../assets/images/nav1.png";
import "./index.css";

const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg'
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
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </Swiper.Item>
          ))}
        </Swiper>
        <Grid columns={4} gap={8} className="nav-grid-container">
          <Grid.Item>
            <div>
              <img src={img1} alt="img1" />
              <span>整租</span>
            </div>
          </Grid.Item>
          <Grid.Item>
            <div>
              <img src={img2} alt="img2" />
              <span>合租</span>
            </div>
          </Grid.Item>
          <Grid.Item>
            <div>
              <img src={img3} alt="img3" />
              <span>地图找房</span>
            </div>
          </Grid.Item>
          <Grid.Item>
            <div>
              <img src={img4} alt="img4" />
              <span>去出租</span>
            </div>
          </Grid.Item>
        </Grid>
      </div>
    );
  }
}