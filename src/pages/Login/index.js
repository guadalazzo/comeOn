import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import './styles.scss';
import axios from 'axios';
import { useAuth } from './../../context/auth';



function Login (props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin() {
    axios.post("http://localhost:3003/authenticate", {
      userName,
      password
    }).then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }
  
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
    return (
        <article>
            <h1>Login</h1>
            <section>
                <input 
                  type="email" 
                  value={userName}
                  placeholder="email" 
                  onChange={e => {
                    setUserName(e.target.value);
                  }} 
                />
                <input 
                  type="password" 
                  placeholder="password"  
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />
                <button onClick={postLogin}>Sign In</button>
                <Link to="/signup">Don't have an account?</Link>
                { isError &&<div>The username or password provided were incorrect!</div> }
            </section>
        </article>
    );
}

export default Login;
