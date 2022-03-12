import React, {useState} from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import {auth} from "./firebase";

function Login() {
    const history = useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    const signIn=e=>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth)=>{
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register=e=>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error=>alert(error.message))
    }
    return (
        <div className="login_box">
              <Link to="/">
                <div>
                    <img className="login_logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                        alt="logo" />
                </div>
            </Link>
        <div className="login_inside">
            <h1 className="login_title">sign-up</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            </form>
            <div className="signup">
                <button className="login_signup" type="submit" onClick={signIn}>SignUp</button>
            </div>
            <p className="script_bold"> By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <div className="create_account">
                <button className="final_login" onClick={register}>Create Your amazon account</button>
            </div>
        </div>
        </div>
    )
}

export default Login
