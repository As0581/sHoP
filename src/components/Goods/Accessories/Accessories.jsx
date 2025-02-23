import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../Stuff.css'
import stuffRow from '../../images/stuffRow.svg'
import Item from '../../Item/Item';
import testShoe from "../../images/cap.png"

export default function Accessories(content){
    return(
        <div className='container'>
            <div className="stuff">
            <div className="stuff-inner">
                <div className="stuff-text">
                    <h2 className="stuff-name">Аксессуары</h2>
                    <a href="#" className="suff-more__link">
                        <p className="stuff-more__text">больше товаров</p>
                        <img src={stuffRow} alt="" className="stuff-more__img" />
                    </a>
                </div>
                
                <div className="stuff-content">
                <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={5}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >

                <SwiperSlide>
                    <Item name={'Nike Air Brosman'} price={'1200'} img={testShoe}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Item name={'Nike Air Brosman'} price={'1200'} img={testShoe}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Item name={'Nike Air Brosman'} price={'1200'} img={testShoe}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Item name={'Nike Air Brosman'} price={'1200'} img={testShoe}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Item name={'Nike Air Brosman'} price={'1200'} img={testShoe}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Item name={'Nike Air Brosman'} price={'1200'} img={testShoe}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Item name={'Nike Air Brosman'} price={'1200'} img={testShoe}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Item name={'Nike Air Brosman'} price={'1200'} img={testShoe}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Item name={'Nike Air Brosman'} price={'1200'} img={testShoe}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Item name={'Nike Air Brosman'} price={'1200'} img={testShoe}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Item name={'Nike Air Brosman'} price={'1200'} img={testShoe}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Item name={'Nike Air Brosman'} price={'1200'} img={testShoe}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Item name={'Nike Air Brosman'} price={'1200'} img={testShoe}/>
                </SwiperSlide>

                </Swiper>
                </div>                
            </div>         
            </div>
            
    </div>
    )      
}