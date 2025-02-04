import { Children } from 'react'
import './Button.css'
import addvertRow from '../images/addvertRow.svg'

export default function Button({children}){
    return (
        <button>{children}<img src={addvertRow} alt="" /></button>
    )
}