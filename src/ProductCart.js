import React from 'react'
import { useStateValue } from './StateProvider';
import  './ProductCart.css';




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
                <p className= "productCart__title" >{title}</p>
                <p className= "productCart__price" >{price}</p>
            </div>
            <div className= "productCart__rating">{
                
            Array(rating)
            .fill()
            .map((_) => (
                         (<span>*</span>)
                     ))
                 }
            </div>
            <div className= "productCart__button"> <button onClick= {removeItem}>Remove from basket </button> </div>
            
        </div>
    )
}

export default ProductCart
