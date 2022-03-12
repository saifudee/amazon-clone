import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function HEADER() {
    const [{basket,user}, dispatch] = useStateValue();
    
    const handleAuthenticaton=()=>{
        if (user){
        auth.signOut();
        }
    }
    return (
        <div className="header_er">
            <Link to ="/">
                <div className="left">
            <div className="pad">
                <img className="name_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
                </div>
                </div>
                </Link>
            <div className="head_nav">
                <input className="Head_Two" type="text"/>
                <SearchIcon className="search"/> 
            </div>
            <div className="header_left">
            <Link to ={!user && "/login"}>
               <div onClick={handleAuthenticaton} className="hello_1">
                <span className="head_six">Hello {!user? 'Guest' : user.email}</span>
                <span className="head_ten">{user? 'Sign Out' : 'Sign In'}</span>
            </div>
            </Link>
            <div className="hello_1">
                <span className="head_six">Return</span>
                <span className="head_ten">& oders</span>
            </div>
            <div className="hello_1">
                <span className="head_six">Your</span>
                <span className="head_ten">Prime</span>
            </div>
            </div>
            <div className="number">
            <Link to = "/Checkout">
            <div className="head_leftend">
            <ShoppingBasketIcon />
            <span className="hello_1 basket_count">{basket?.length}</span> 
            </div>
            </Link>   
            </div>       
        </div>
    )
}

export default HEADER;

