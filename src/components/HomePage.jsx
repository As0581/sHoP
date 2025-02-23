import Header from './Header/Header'
import Addvert from './Addvert/Addvert'
import Shoe from './Goods/Shoes/Shoe'
import Accessories from './Goods/Accessories/Accessories'
import Cloth from './Goods/Clothes/Cloth'
import HowToCalculate from './HowToCalculate/HowToCalculate'
import About from './About/About'

export default function HomePage(){
    return(
    <div className="wrapper">   
        <Header/>
        <Addvert/>
        <Shoe/>
        <Cloth/>
        <Accessories/>
        <HowToCalculate/>
        <About/>
    </div>
    )
}