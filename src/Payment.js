import React ,{useState, useEffect} from 'react'
import "./Payment.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from "./StateProvider";
import { Link , useHistory} from "react-router-dom";
import {CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from './reducer';
import CurrencyFormat from "react-currency-format";
import axios from "./axios";


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    
    //
    const history = useHistory();
     
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded,setSucceeded] = useState(false);
    const [processing,setProcessing] = useState(null);
    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [clientSecret,setClientSecret] = useState(true);


    useEffect(() => {
    const getClientSecret = async ()=>{
        const response = await axios({
            method:'post',
            url:`/payments/create?total=${getBasketTotal(basket)*100}`
        });
        setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
    }, [basket])
    const handleSubmit = async(event) =>{
    //  do all the fancy stuffs..
    event.preventDefault()
    setProcessing(true);


    const payload = await stripe.confirmCardPayment(clientSecret,{
       payment_method: {
           card: elements.getElement(CardElement)
       }
    }).then(({paymentIntent})=>{
        //paymentIntent = payment confirmation
        setSucceeded(true);
        setError(null)
        setProcessing(false)

        history.replace('/orders')
    })
    }
     
    //

    const handleChange = event =>{
      //listen for any error in the cardchange
      // and display any error in the card details  
      setDisabled(event.empty)
      setError(event.error ? event.error.message:"")
    }

    return (
        <div className="payment_full">
            <div className="payment_pull">
                <h1>Checkout(<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="high">
                    <div className="payment_address">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="left_line">
                        <p>{user?.email}</p>
                        <p>Thirugana sambander street</p>
                        <p>Chennai-118</p>
                    </div>
                </div>
            </div>
            <div className="payment_pull">
                <div className="payment_items">
                    <div className="review_items">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="pay_basket">
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
            </div>
            <div className="payment_pull">
                <div className="payment_items">
                    <div className="payment_method">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="pay_card">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="order_pay">
                            <CurrencyFormat 
                                renderText={(value) => ( 
                                    <>
                                    <h3>Order items={value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                thousandSpacing={'2s'}
                                prefix={"$"}
                                /> 
                                <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p>:"Buy Now"}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
