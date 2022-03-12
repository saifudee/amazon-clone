import React from 'react'
import "./CheckoutProduct.css"
import StarIcon from '@material-ui/icons/Star'
import { useStateValue } from "./StateProvider";


function CheckoutProduct({id,title,price,image,rating}) {
    const [{ basket },dispatch] = useStateValue();
    const removeTheBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type:'REMOVE_THE_BASKET',
            id:id,
        })
    };
    return (
        <div className="Checkout_info">
            <img className="add_img" src={image} alt="" />
            <div className="checkout_col">
            <div className="Checkout_titles">
               <p>{title}</p>
            </div>
               <p className="Checkout_price">$
               <strong className="Checkout_price">{price}</strong>
               </p>
               {Array(rating)
               .fill()
               .map(()=>(
               <p className="star_2"><StarIcon/></p>
               ))}
               <div className="open_item">
               <button className="Remove_item" onClick={removeTheBasket}>Remove the basket</button>
               </div>
               </div>
               </div>
            
    )
}

export default CheckoutProduct
