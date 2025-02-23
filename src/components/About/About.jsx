import './About.css'
import aboutDelivery from '../images/aboutDelivery.svg'
import aboutIdk from '../images/aboutIdk.svg'
import aboutPeople from '../images/aboutPeople.svg'

export default function About(){
    return(
        <div className="about">
<div className="container">
            <div className="about-inner">
                <div className="about-text__container">
                    <h1 className="about-title">О интернет-магазине xwear</h1>
                    <p className="about-text">
                        Команда XWEAR предоставляет услугу доставки только оригинальных товаров c крупнейшего китайского маркетплейса Poizon, чтобы наши клиенты экономили более 40% на каждой покупке. 
                    </p>
                    <p className="about-text">
                        Работаем без посредников, благодаря чему можем предоставлять лучшую цену. Быстрая, бесплатная доставка. 
                    </p>
                    <p className="about-text">
                        Сайт, на котором можно будет удобно оформить покупку, не скачивая китайское мобильное приложение Poizon, с удобной фильтрацией огромного количества товаров, а так же с возможностью сразу увидеть окончательную цену товара.
                    </p>
                </div>
                <div className="about-content">
                    <ul className="about-list">
                        <li className="about-item">
                            <img src={aboutDelivery} alt="" className="about-img" />
                            <div className="about-item__text">
                                <h3 className="about-item__title">Бесплатная доставка до России</h3>
                                <p className="about-item__text">Доставим вам заказ абсолютно бесплатно до России</p>
                            </div>
                        </li>
                        <li className="about-item">
                            <img src={aboutPeople} alt="" className="about-img" />
                            <div className="about-item__text">
                                <h3 className="about-item__title">мы Работаем без посредников</h3>
                                <p className="about-item__text">Между нами и клиентом нет третьего лишнего</p>
                            </div>
                        </li>
                        <li className="about-item">
                            <img src={aboutIdk} alt="" className="about-img" />
                            <div className="about-item__text">
                                <h3 className="about-item__title">простота в заказе и использовании</h3>
                                <p className="about-item__text">Для заказа с Poizon не нужно никаких приложений</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        
    )
}