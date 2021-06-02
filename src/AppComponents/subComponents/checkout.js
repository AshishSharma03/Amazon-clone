import { useStateValue } from '../dataLayers/StateProviders'
import '../style/checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'


const Checkout=()=>{

const [{cart,user},dispatch]= useStateValue()

    return(
        <div className="checkout">
           <div className="checkout__left">
                <div className="product_con">
                    <h3>.  Hello {user?.email}</h3>
                    <h1 className="checkout__title">Shooping Cart</h1>
                   {cart.map(item =>(
                       <CheckoutProduct
                       id={item.id}
                       title={item.title}
                       desc={item.desc}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                       hideButton={true}
                       />
                   ) )}
                </div>
           </div>
           <div className="checkout__right">
                 <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout