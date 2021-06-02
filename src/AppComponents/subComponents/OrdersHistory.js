import React,{useState,useEffect} from "react";
import { db } from "../firebaseConfg/firebase";
import { useStateValue } from "../dataLayers/StateProviders";
import '../style/orderHistory.css'
import Order from "./order";
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import Login from "./Login";

const OrdersHistory = () => {
    const [{cart,user},dispatch]= useStateValue();
    const [orders,setOrder]= useState([]);
    var car
    if(user){
        car = true;
    }else{
        car = false
    }
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
        })  
    }else{
            setOrder([])
           
        }

    },[user])
    
    return (
       
        <div className="ordersHistory">
           <h1>Your Order History</h1>
           { car === true &&(
           <div className='orders__order'>
               {orders?.map( order =>(
                    <Order order={order}/>
                ))}
           </div>
           )}
           { car === false &&(
           <div className='orders__order'>
              <Login/>
           </div>
           )}
           
        </div>
    )
}

export default OrdersHistory;