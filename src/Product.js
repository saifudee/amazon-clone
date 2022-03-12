import React from 'react'
import "./Product.css";
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from "./StateProvider";

function Product({id,title,price,image,rating}) {
    const [{ basket },dispatch] = useStateValue();
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
            id:id,
            title:title,
            price:price,
            image:image,
            rating:rating,
            },
        });
    };
    return (
        <div className="product_row">
            <div className="head_row">
             <p className="word_lean">
                 {title}
             </p>
             <strong className="rate_ing">${price}</strong>
             <div className="book_img">
              <img src={image} alt="" />
             </div>
             <div className="star_5">
             {Array(rating)
            .fill()
            .map((_, i) => (
              <p className="star"><StarIcon/></p>
            ))}
             </div>
             <button className="basket_add" onClick={addToBasket}>Add to Basket</button>
            </div>
        </div>
    )
}

export default Product;
