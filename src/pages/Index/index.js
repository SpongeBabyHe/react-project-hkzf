import React from "react";
import { Swiper } from "antd-mobile";

// 替换为你的图片路径
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
      </div>
    );
  }
}