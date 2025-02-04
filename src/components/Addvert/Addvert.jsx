import React from 'react';
import addvert from "../images/addvert.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Addvert.css'
import Button from '../Button/Button';


export default function Addvert(){
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='addvert-slide'>
        <div className="addvert-slide__inner">
          <img src={addvert} alt="" />
          <div className="advert-slide__content">
            <h1 className=" addvert-title">Широкий ассортимент Одежды</h1>
            <p className=" addvert-text">Одежда от известные брендов у нас в каталоге.<br></br> Только качественные вещи.</p>  
            <Button>перейти в каталог</Button>
            <span>свайпни чтобы унать больше</span>
          </div>
        </div>
        
        
      </SwiperSlide>
      <SwiperSlide className='addvert-slide'>
        <div className="addvert-slide__inner">
          <img src={addvert} alt="" />
          <div className="advert-slide__content">
            <h1 className=" addvert-title">Широкий ассортимент Одежды</h1>
            <p className=" addvert-text">Одежда от известные брендов у нас в каталоге.<br></br> Только качественные вещи.</p>  
            <Button>перейти в каталог</Button>
            <span>свайпни чтобы унать больше</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='addvert-slide'>
        <div className="addvert-slide__inner">
          <img src={addvert} alt="" />
          <div className="advert-slide__content">
            <h1 className=" addvert-title">Широкий ассортимент Одежды</h1>
            <p className=" addvert-text">Одежда от известные брендов у нас в каталоге.<br></br> Только качественные вещи.</p>  
            <Button>перейти в каталог</Button>
            <span>свайпни чтобы унать больше</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='addvert-slide'>
        <div className="addvert-slide__inner">
          <img src={addvert} alt="" />
          <div className="advert-slide__content">
            <h1 className=" addvert-title">Широкий ассортимент Одежды</h1>
            <p className=" addvert-text">Одежда от известные брендов у нас в каталоге.<br></br> Только качественные вещи.</p>  
            <Button>перейти в каталог</Button>
            <span>свайпни чтобы узнать больше</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};