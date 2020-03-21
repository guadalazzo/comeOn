import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './styles.scss';
import axios from 'axios';
import { useAuth } from './../../context/auth';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Layout from '../../components/Layout';
import Nav from '../../components/Nav';

function Login (props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setAuthTokens } = useAuth();

    function postLogin () {
        axios
            .post('http://localhost:3003/authenticate', {
                username: userName,
                password
            })
            .then(result => {
                if (result.status === 200) {
                    setAuthTokens(result.data);
                    setLoggedIn(true);
                } else {
                    setIsError(true);
                }
            })
            .catch(e => {
                setIsError(true);
            });
    }

    if (isLoggedIn) {
        return <Redirect to="/user-info" />;
    }
    return (
        <Layout>
            <Nav><Link to="/">x</Link><h1>Login</h1></Nav>
            <div className="login-content">
                <Input
                    type="email"
                    value={userName}
                    placeholder="email"
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                />
                <Input
                    type="password"
                    placeholder="password"
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                />
                <Button onClick={postLogin}>Login</Button>
                {isError && (
                    <div>The username or password provided were incorrect!</div>
                )}
            </div>
        </Layout>
    );
}

export default Login;
