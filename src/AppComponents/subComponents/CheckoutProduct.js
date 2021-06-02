import React from 'react'
import '../style/CheckoutProduct.css'
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from '../dataLayers/StateProviders'; 


function CheckoutProduct({id,image,title,price,rating,desc,hideButton}) {
   const [{cart},dispatch]=useStateValue();
 
   console.log(cart)
  const removeFromCart=()=>{
      //remove the item from the CArt
      dispatch({
          type:'REMOVE_TO_CART',
          id:id,

      })
  }



    return (
        <div className="checkoutProduct">
             <img className="checkoutProduct__image" src={image}/> 

             <div className="checkoutProduct__info">
                 <p className="checkoutProduct__title">{title}</p>
                 <p className="checkoutProduct__desc">{desc}</p>
                 <p className="checkoutProduct__price">
                     <small>₹</small>
                     <strong>{price}</strong>
                     </p>
                
                 <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_,i)=>(
                        <p><StarIcon/></p>
                    ))}
                 </div>
                { hideButton === true &&(  
                <button onClick={removeFromCart}>Remove from cart</button>
                )}
             </div>
        </div>
    )
}

export default CheckoutProduct
