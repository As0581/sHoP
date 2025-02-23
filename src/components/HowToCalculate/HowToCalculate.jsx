import './HowToCalculate.css';
import Button from '../Button/Button';
import htcImg from '../images/htcImg.png'

export default function HowToCalculate(){
    return(
        <section className="htc">
            <div className="container">
                <div className="htc-inner">
                    <div className="htc-content">
                        <h1 className="htc-title">Рассчитать стоимость</h1>
                        <p className="htc-text">Если вам не удалось найти то, что искали, вы всегда можете воспользоваться автоматическим расчетом стоимость заказа на маркетплейсе Poizon, включая комиссию сервиса и доставку.</p>
                        <ul className="htc-advantages">
                            <li className="htc-advantage">
                                <span className="htc-advantage__number">1</span>
                                <p className="htc-advantage__text">Подробная, пошаговая статья о том, как установить приложение Poizon</p>
                            </li>
                            <li className="htc-advantage">
                                <span className="htc-advantage__number">2</span>
                                <p className="htc-advantage__text">Подробная, пошаговая статья о том, как установить приложение Poizon</p>
                            </li>
                        </ul>
                        <Button className="htc-button">Рассчитать стоимость</Button>
                    </div>
                    <div className="htc-img__inner">
                        <img src={htcImg} alt="" className="htc-image" />
                    </div>
                </div>
            </div>          
        </section>
    )
}