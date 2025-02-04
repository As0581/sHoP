import '../default.css'
import './Header.css'
import logo from '../images/logo.svg'
import headerImg from '../images/headerImg.svg'
import cart from '../images/cart.svg'
import contacts from '../images/contacts.svg'
import favorites from '../images/favorites.svg'
import search from '../images/search.svg'

export default function Header(){
    return (
            <header className='homepage-header'>
                <div className="container">
                    <div className="homepage-header__inner">
                    <a href="" className="logo">
                        <img src={logo} alt="" className="logo-img" />
                    </a>
                    <nav className="header-menu">
                        <li className="header-menu__item">
                            <a href="#" className="header-menu__link">Одежда</a>
                            <img src={headerImg} alt="" className="header-menu__img" />
                        </li>
                        <li className="header-menu__item">
                            <a href="#" className="header-menu__link">Обувь</a>
                            <img src={headerImg} alt="" className="header-menu__img" />
                        </li>
                        <li className="header-menu__item">
                            <a href="#" className="header-menu__link">Аксессуары</a>
                            <img src={headerImg} alt="" className="header-menu__img" />
                        </li>
                        <li className="header-menu__item">
                            <a href="#" className="header-menu__link">Бренды</a>
                            <img src={headerImg} alt="" className="header-menu__img" />
                        </li>
                        <li className="header-menu__item">
                            <a href="#" className="header-menu__link">Расчет стоимости</a>
                            <img src={headerImg} alt="" className="header-menu__img" />
                        </li>
                        <li className="header-menu__item">
                            <a href="#" className="header-menu__link">Информация</a>
                            <img src={headerImg} alt="" className="header-menu__img" />
                        </li>
                    </nav>
                    <nav className="header-links">
                        <a href="" className="header-link">
                            <img src={search} alt="" className="header-link__img" />
                        </a>
                        <a href="" className="header-link">
                            <img src={favorites} alt="" className="header-link__img" />
                        </a>
                        <a href="" className="header-link">
                            <img src={contacts} alt="" className="header-link__img" />
                        </a>
                        <div className="cart">
                            <a href="" className="cart-link">
                                <img src={cart} alt="" className="cart__img" />
                            </a>
                            <span className='balance'>11 899 ₽</span>
                            <a className='quantity'>7</a>
                        </div>
                    </nav>
                    </div>
                    
                    

                </div>
            </header>
        
    )
}