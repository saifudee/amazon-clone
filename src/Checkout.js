import { ListItemAvatar } from '@material-ui/core';
import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="Checkout_basket">
            <div className="checkout_left">
                <img className="Checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div className="checkout_Title">
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="size_h1">
                        Your shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_Title">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
