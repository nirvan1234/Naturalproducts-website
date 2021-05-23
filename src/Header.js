import React from 'react'
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider';

function Header() {

    const [{basket} , dispatch] = useStateValue();
    return (
            <nav className = "header"> 
            <img className = "header__logo" src = "" alt = "logo" src="https://www.qries.com/images/banner_logo.png" />
            <div className = "header__search">
                <input type = "text" className= "header_searchInput" />
                <SearchIcon className = "header__searchIcon" /> 
            </div>
            
            {/* 1st Link*/}
            <div className = "header_nav">
            <Link to = "/" className= "header__link">      
            <div className = "header__option">
                <span className = "header__optionLineOne" >HelloUser</span>
                <span  className = "header__optionLineTwo" >Sign in</span>
            </div> 
            </Link> 
            {/* 2nd Link*/} 
            <Link to = "/" className= "header__link">      
            <div className = "header__option">
                <span className = "header__optionLineOne" >Returns</span>
                <span  className = "header__optionLineTwo" >Orders</span>
            </div> 
            </Link> 
            {/* 2nd Link*/} 
            <Link to = "/" className= "header__link">      
            <div className = "header__option">
                <span className = "header__optionLineOne" >You</span>
                <span  className = "header__optionLineTwo" >Name</span>
            </div> 
            </Link> 
            </div>
            <Link to = "/checkout" className="header__link">
            <div className = " header__optionBasket">
                <ShoppingBasketIcon />

            <span className= " optionLine__Two header__basketCount">  {basket?.length} </span>
            </div>
            </Link>
            </nav>
    );
}

export default Header;
