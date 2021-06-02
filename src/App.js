// import './App.css';
import Header from './AppComponents/subComponents/Header';
import Home from './AppComponents/subComponents/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Checkout from './AppComponents/subComponents/checkout'
import Login from './AppComponents/subComponents/Login';
import { useEffect } from 'react';
import { auth } from './AppComponents/firebaseConfg/firebase';
import { useStateValue } from './AppComponents/dataLayers/StateProviders';
import Payment from './AppComponents/subComponents/Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './AppComponents/subComponents/Orders'
import OrdersHistory from './AppComponents/subComponents/OrdersHistory'

const promise = loadStripe('pk_test_51IuLpFSH5YTEmPVupabzIZbwyQd9xCgDS9GhGY05toa1sNjzFsJYByApuerIbJFGFULeaZ0eyyMVwy8RaUbaFUOj00SEYcA5lG');



function App() {
 
  const[{},dispatch]=useStateValue();

  useEffect(()=>{
    //will only run once when app component loads...
    auth.onAuthStateChanged(authUser =>{

      if(authUser){
        //the user just logged in  /the user was logged in
          dispatch({
            type:'SET_USER',
            user:authUser
          })
      }else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])

  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path ="/">
      <Header/>
      <Home/>
      </Route>
      <Route exact path ="/orders">
      <Orders/>
      </Route>
      <Route path ="/login">
      {/* <Header/> */}
       <Login/>
      </Route>
      <Route path ="/checkout">
      <Header/>
      <Checkout/>
      </Route>
      <Route path ="/payment">
      <Header/>
      <Elements stripe={promise}>
      <Payment/>
      </Elements>
      </Route>
      <Route exact path ="/ordershistory">
      <Header/>
      <OrdersHistory/>
      </Route>


      </Switch>
    </div>
    </Router>
  );
}

export default App;
