import React from 'react'
import CurrencyFormat from 'react-currency-format'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import '../style/subtotal.css'
import { useStateValue } from '../dataLayers/StateProviders';
import { getCartTotal } from '../dataLayers/reducer';
import {useHistory} from 'react-router-dom'

const  Subtotal=()=> {
    const history = useHistory();
    const [{cart},dispatch]=useStateValue();

  
    return (
        <div className="subtotal">
            
            <p className="freedev"><a style={{color:"#157c00",fontSize:"13px"}}>
            <CheckCircleRoundedIcon className="roundIcon"/> Your order is eligible for FREE Delivery.</a>
              Select this option at checkout. Details</p>
            <CurrencyFormat
            renderText={(value)=>(
                <div className="subItems">
                <p className="subItem">
                    Subtotal ({cart.length} item) :
                    <strong> {value}
                    </strong>
                </p>
                <small className="subtotal__gift">
                <input type="checkbox"/>This order contains gift
                </small>
                </div>
            )}
            decimalScale={2}
            value={getCartTotal(cart)} 
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />


            <button onClick={e=>history.push("/payment")}>proceed to buy</button>
        </div>
    )
}

export default Subtotal
