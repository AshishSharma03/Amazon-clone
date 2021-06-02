import {CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import React,{useState,useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom';
import { useStateValue } from '../dataLayers/StateProviders';
import '../style/payment.css'
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format'
import{getCartTotal} from '../dataLayers/reducer'
import axios from '../dataLayers/axios';
import {db} from '../firebaseConfg/firebase'
import { useRadioGroup } from '@material-ui/core';
// import instance from '../state/axios';




function Payment(){
    const [{cart,user},dispatch] = useStateValue();
    const stripe=useStripe();
    const elements =useElements();
    const [succeeded,setSucceeded]=useState(false);
    const [processing,setProcessing]=useState("");
    const [error,setError]= useState(null);
    const [disabled,setDisable]= useState(true);
    const [clientSecret,setClientSecret]=useState(true); 
    const history = useHistory();

    useEffect(() => {
     //generate the special stripe secret which allows to charge a customer
     const getClientSecret = async()=>{
        const response = await axios({
            method:'post',
            url:`/payments/create?total=${getCartTotal(cart) * 100}`
        })
            setClientSecret(response.data.clientSecret)
     }
     getClientSecret()
    }, [cart])

    const handelSubmit = async (event)=>{
        //do all the fancy stripe stuff
        event.preventDefault();
        setProcessing(true);
        const payload =await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //paymentIntent = payment confirmation


            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                cart:cart,
                amount:paymentIntent.amount,
                created:paymentIntent.created
            })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_CART'
            })


            history.replace('./orders')
        })

    }
    const handleChange =event=>{
        //listen from charge in the CardElemnt
        setDisable(event.empty);
        //stripe expects the total in a currencies submits
        setError(event.error?event.error.message:"");

    }


    return(
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout (<Link to='/checkout'>{cart?.length} items</Link>)
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delavery Address</h3>
                    </div>
                    <div className='payment__adsress'>
                        <p>{user?.email}</p>  
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__titile'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__item'>
                            {cart.map(item=>(
                                <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                desc={item.desc}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                />

                            ))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                                <h3>Paymnet Method</h3>
                    </div>
                    <div className='payment__details'>
                            <form onSubmit={handelSubmit}>
                                <CardElement onSubmit={handleChange}/>
                                <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value)=>(
                                        <>
                                        <h3>Order Total:{value
                                        }</h3>
                                        </>
                                    
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)} 
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                    />
                                <button disabled={ processing || disabled ||
                                succeeded}>
                                    <span>{processing ? <p>Processing</p> : 
                                    "Buy Now"}</span>
                                </button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Payment;