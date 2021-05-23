import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import ProductCart from './ProductCart';
import './ProductCart.css';




function Checkout() {
    const[{basket}] = useStateValue(); 

    return (
        <div className= "checkout">
            <div className= "checkout__left">
                {
                    basket.length === 0? (
                        <div>
                            <h2 className= "checkout__title" >Your Shopping basket is empty.</h2>
                            <p>You have no item in your basket. Buy one</p>
                         </div>
                    ) : (
                        <div>
                            <h2 className= "shoppingbaskettitle"> Items in the shopping basket</h2>
                            {
                                basket.map(item => (
                                    <ProductCart 
                                      id ={item.id}
                                      title ={item.title}
                                      image={item.image}
                                      price={item.price}
                                      rating ={item.rating}
                                    
                                    />

                                ))
                            }
                        </div>
                    )



                }

            </div>
            <div className= "checkout__right">
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout
