import favorite from '../images/favorite.svg'
import './Item.css'

export default function Item({img,name,price}){
    return (
        <div className="item-inner">
            <div className="item-content">
                <img src={img} alt="" className="item-img" />
                <img src={favorite} alt="" className="item-img--favorite" />
            </div>
            <div className="item-text">
                <h2 className="item-name">{name}</h2>
                <span className="item-price">от {price} ₽</span>
            </div>
        </div>
    )
}