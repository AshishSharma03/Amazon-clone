import React,{useState,useEffect} from "react";
import { db } from "../firebaseConfg/firebase";
import { useStateValue } from "../dataLayers/StateProviders";
import '../style/Orders.css'
import Order from "./order";
import {Link} from 'react-router-dom'
import Logo from '../assets/logoBlack.svg'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

const Orders = () => {
    const [{cart,user},dispatch]= useStateValue();
    const [orders,setOrder]= useState([]);

    useEffect(()=>{

        if(user){
        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created','desc')
        .onSnapshot(snapshot=>{
            setOrder(snapshot.docs.map(doc =>({
                id:doc.id,
                data:doc.data()
            })))
        })}else{
            setOrder([])
        }

    },[user])
    
    return (
        <div className="orders">
            <div className="logoscale">
               <Link to='/'>
           <img src={Logo}
           className="order__logo"/>
         
           </Link>
           </div>
           <h1>Your Order successful  <CheckCircleRoundedIcon className="roundIcons"/></h1>
           <div className='orders__order'>
               {orders?.map( order =>(
                    <Order order={order}/>
                ))}
           </div>
        </div>
    )
}

export default Orders;