//  import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../dataLayers/StateProviders';
import '../style/Product.css'
import {useId} from 'react-id-generator'


function Product({id,title,image,price,rating,desc}){
    const [newId] =useId()
    const [{cart}, dispatch] = useStateValue();
    // console.log('this is basket >>',cart)
    const addToCart =()=>{
        //dispatch the item into the data layer
        dispatch({
            type:"ADD_TO_CART",
            item:{
                id:id=newId,
                title:title,
                desc:desc,
                image:image,
                price:price,
                rating:rating
            },
        });
    };
    return(
        <div className="product">
              <img
                   src={image}
                   alt=""
                   />
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__desc">{desc}</p>
                <p className="product__price">
                    <p className="dollar">₹</p>
                    <p className="price">{price}</p>
                    <p>00</p>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>(
                         <p><StarIcon className="starIcon"/> </p>
                    ))}
                   
                </div>
            </div>
            <button onClick={addToCart}>Add to Cart</button>

        </div>
    )
}


export default Product;