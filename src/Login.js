import React , { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import {auth} from './firebase';

function Login() {

    const history = useHistory();
    const [useremail, setUserEmail] = useState("")
    const [userpassword, setUserpassword] = useState("")

    const loginuser = event =>{
        event.preventDefault()
        auth.createUserWithEmailAndPassword(useremail,userpassword)
        .then((auth) => { 
            history.push("/")
        })
        .catch( e => alert(e.message))
    }

    const signupuser = event =>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(useremail,userpassword)
        .then((auth) => { 
            history.push("/")
        })
        .catch( e => alert(e.message))
    }

    return (
        <div className= "login">
            <Link >      
            <img className = "login__logo" src = "" alt = "logo" src="https://www.qries.com/images/banner_logo.png" />
            </Link> 
            
        <div className = "login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input vlaue = {useremail} onChange ={ event => setUserEmail(event.target.value)} type = "email" />
                    <h5>Password</h5>
                    <input vlaue = {userpassword} onChange ={ event => setUserpassword(event.target.value)}type = "password" />
                    <button onClick = {loginuser} type = "submit" className= " login__signInButton"> Sign In  </button>
                </form>
            <p>By signing in you agree to Qries terms and Condition's</p>
            <button onClick = {signupuser} className = "login__registerButton"> Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
