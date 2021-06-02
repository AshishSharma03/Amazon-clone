import React, {useState} from 'react'
import '../style/login.css'
import Logo from '../assets/logoBlack.svg'
import {Link,useHistory} from 'react-router-dom'
import { auth } from '../firebaseConfg/firebase';

function Login(){

    const history = useHistory();
    const [email,setEmail]=useState('');
    const [password ,setPassword]=useState('')

    const signIn=e=>{
        e.preventDefault();
        //firebase log_in 
        auth.signInWithEmailAndPassword(email,password)
            .then(auth=>{
                history.push('/')
            })
            .catch(error=>alert(error.message))
    }

    const register=e=>{
        e.preventDefault();
     //firebase account create 
     auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //it successfully created a new user with email password
            // console.log(auth)
            if(auth){
                history.push('/')   
            }
        })
        .catch(error=>alert(error.message))

        
    }




    return (
        
        <div className='login'>
            <Link to='/'>
           <img src={Logo}
           className="login__logo"/>
           </Link>

           <div className='login__container'>
               <h1>Sign in</h1>
               <form>
                   <h5>E-mail</h5>
                   <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                   <h5>Password</h5>
                   <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                   <br/>
                   <button type="submit" className="login__signInButton"
                   onClick={signIn}>Sign in</button>
               </form>
               <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
               <button class="login__signUpButton"
               onClick={register}
               >Create your Amazon Account</button>
           </div>

        </div>
    )
}


export default Login