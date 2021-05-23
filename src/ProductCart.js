import React from 'react'
import { useStateValue } from './StateProvider';
import  './ProductCart.css';
import './Madar.css';




function ProductCart({ id,title,image,rating,price}) {

    const [{basket} , dispatch] = useStateValue();

    const removeItem  = () => {
        dispatch({
            type : 'REMOVE_FROM_BASKET' , 
            item: {
                id: id
                }
        })
    }
    return (
        <div className= "productCart">
            <img className= "productCart__image" src = {image} alt = ""  />
            <div className = "product__info">
                <p className= "productcart__title" >{title}</p>
                <p className= "productcart__price" >{price}</p>
            </div>
            <div className= "productcart__rating">{
                
            Array(rating)
            .fill()
            .map((_) => (
                         (<span>*</span>)
                     ))
                 }

            </div>
            <button onClick= {removeItem}>Remove from basket </button>
        </div>
    )
}

export default ProductCart
