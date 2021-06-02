import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import { useStateValue } from '../dataLayers/StateProviders'
import '../style/Header.css'
import Logo from '../assets/logo.svg'
import {auth} from '../firebaseConfg/firebase'



function Header(){
  const [{cart,user},dispatch]=useStateValue();
//   console.log("form header >>",cart);

  const handelAuthentication=()=>{
    if(user){
      auth.signOut();

    }
  }

    return(
        <div className="header">
            <Link to="/">
            <img
            src={Logo}
            className="header__logo"/>
            </Link>
             <div className="header__option">
                     <span className="header-optionLineOne locationHell">
                       Hello
                     </span>
                     <span className="header-optionLineTow location">
                      <LocationOnOutlinedIcon className="Location__logo"/> Select your address
                     </span>
                </div>
            <div className="header__search">
                <input
                className="header__searchInput"
                type="text"
                 />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">

            <div className="header__option">
                     <span className="header-optionLineOne">
                       language
                     </span>
                     <span className="header-optionLineTow">
                       ENG-🇮🇳
                     </span>
                </div>
                <Link to={!user && "/login"}>
                <div className="header__option" onClick={handelAuthentication}>
                     <span className="header-optionLineOne">
                     {user? 'Hello,User' : 'Hello,Sign in'} 
                     </span>
                     <span className="header-optionLineTow">
                     {user? 'Log Out' : 'Account & list'}
                     </span>
                </div>
                </Link>
                <Link to='/ordershistory'>
                <div className="header__option">
                    <span className="header-optionLineOne">
                        Return
                     </span>
                     <span className="header-optionLineTow">
                      & Order
                     </span>
               </div>
                </Link>
                <div className="header__option">
                    <span className="header-optionLineOne">
                       Your
                     </span>
                     <span className="header-optionLineTow">
                      Prime
                     </span>
                </div>
                <Link to='/checkout'>
                <div className="header__optionBasket">
                    <span className="header-optionLineTow 
                                    header__basketCount">{cart?.length}</span>
                                    {/* here count how many item in the car*/}
                                <AddShoppingCartIcon className="shoppingCartIcon"/>
                                
                </div>
                </Link>
            </div>
            </div>


    )

    }

export default Header