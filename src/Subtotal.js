import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';
import {useHistory} from "react-router-dom";
function Subtotal() {
  const [{ basket },dispatch] = useStateValue();
  const history = useHistory();
    return (
        <div className="Basket_items">
            <CurrencyFormat 
               renderText={(value) => ( 
                      <>
                      <p className="subtotal_items">
                        {/* Part of the homework */}
                        Subtotal items({basket.length}):<strong className="stay_safe">{value}</strong>
                      </p>
                      <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                      </small>
                    </>
                  )}
                  // decimalScale={2}
                  value={getBasketTotal(basket)} // Part of the homework
                  displayType={"text"}
                  thousandSeparator={true}
                  thousandSpacing={'2s'}
                  prefix={"$"}
                  // suffix={"/-"} 
                  /> 
         <button onClick={e=>history.push('/payment')} className="Color_btn">Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
