import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className= "home">
            <img className = "home__image" src = "https://blogscdn.thehut.net/wp-content/uploads/sites/2/2018/10/12162052/OUAI-MMCL-2000px-5_1200x672_acf_cropped.jpg" alt = ""  />
        
        <div className= "home__row">
        <Product 
            id= "121314" 
            title = " The SunScreen Combo Package"
            price = {11.96}
            rating = {4} 
            image = "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwcHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            />
        <Product 
            id= "121314" 
            title = " The Natural Shampoo Package"
            price = {31.56}
            rating = {5} 
            image = "https://cdn.shopify.com/s/files/1/0245/4562/4098/products/Qoleum_and_Moku_flat_lays--2_1000x.jpg?v=1571958037 "
            />
        <Product 
            id= "121314" 
            title = " The Summer Body Lotion"
            price = {11.96}
            rating = {3} 
            image = "https://cdn.shopify.com/s/files/1/0534/8497/8336/collections/suncare-864754_1000x1000.jpg?v=1614629682"
            />
        </div>
        <div className= "home__row">
        <Product 
            id= "121314" 
            title = " The Natural Hair Oil"
            price = {21.96}
            rating = {5} 
            image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmM01wFPh7AydNj-EL1bhd3nC5m6AvMYDEg&usqp=CAU"
            />
        <Product 
            id= "121314" 
            title = " The Hair Serum"
            price = {61.96}
            rating = {3} 
            image = "https://cdn.shopify.com/s/files/1/0964/4308/products/imagejpg_8880702c-e712-462f-a646-7b23f327d0af_1024x1024.jpg?v=1571439616"
            />
        <Product 
            id= "121314" 
            title = " The Natural Aleovera Gel"
            price = {51.96}
            rating = {3} 
            image = "https://images.everydayhealth.com/images/diet-nutrition/what-is-coconut-oil-nutrition-health-benefits-risks-and-more-722x406.jpg?sfvrsn=893bf337_0"
            />
        </div>
        <div className= "home__row">
        <Product 
            id= "121314" 
            title = " Ecofriendly Bags"
            price = {1.96}
            rating = {5} 
            image = "https://cdn.shopify.com/s/files/1/0534/8497/8336/products/cocooil-vacay-bundle-167180_300x.jpg?v=1614629791"
            />
        <Product 
            id= "121314" 
            title = " The Lean Startup : How contant Innovation"
            price = {11.96}
            rating = {1} 
            image = "https://cdn.shopify.com/s/files/1/0245/4562/4098/products/Qoleum_and_Moku_flat_lays--2_1000x.jpg?v=1571958037 "
            />
        <Product 
            id= "121314" 
            title = " The Custom Products"
            price = {101.96}
            rating = {5} 
            image = "https://irenamacri.com/wp-content/uploads/2013/03/buying-coconut-oil-types.jpg"
            />
        </div>
        </div>
    )
}

export default Home;
