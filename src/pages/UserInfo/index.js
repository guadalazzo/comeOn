import React, { useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from './../../context/auth';
import { Layout, Nav, Input, Card, Button, CardContent } from '../../components';

import './styles.scss';

function UserInfo (props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [isError, setIsError] = useState(false);
    const [acceptMarketing, setAcceptMarketing] = useState(false);
    const [code, setCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const { setAuthTokens, authTokens } = useAuth();
    const {
        response: { id, username, password }
    } = authTokens;
    const handleChangePhoneCode = e => {
        setCode(e.target.value);
    };
    const handleChangePhoneNumber = e => {
        setPhoneNumber(e.target.value);
    };
    const phone = () => {
        const auxPhone = { code, phoneNumber };
        if (code !== '' && phoneNumber !== '') {
            return Object.values(auxPhone).join('');
        }
    };

    function putPlayer () {
        axios
            .put('http://localhost:3003/player', {
                id,
                username,
                password,
                email,
                phone: phone(),
                acceptMarketing
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
        return <Redirect to="/terms-and-conditions" />;
    }
    return (
        <Layout>
            <Nav>
                <Link to="/login">
                    <div className="arrow-left" />
                </Link>
                <img src="https://img.icons8.com/offices/30/000000/logo.png" />
            </Nav>
            <Card>
                <CardContent>
                    <img
                        className="ok-logo"
                        src="https://img.icons8.com/wired/64/000000/checked-user-male.png"
                    />
                    <h2>Share your details</h2>
                    <Input
                        type="email"
                        placeholder="Email"
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                    />
                    <label htmlFor="phone">
                        <Input
                            type="tel"
                            id="code"
                            name="phone"
                            value={code}
                            onChange={handleChangePhoneCode}
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="Country Code"
                        />
                        <Input
                            type="tel"
                            id="phone-number"
                            name="phone"
                            value={phoneNumber}
                            onChange={handleChangePhoneNumber}
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="Mobile Number"
                        />
                    </label>
                    <label htmlFor="marketing">
                        <input
                            type="checkbox"
                            defaultChecked={acceptMarketing}
                            onClick={e => {
                                setAcceptMarketing(e.target.checked);
                            }}
                        />
                        <small>
              I do not want to receive electronic marketing material.
                        </small>
                    </label>
                    {isError && <div>Some of the data is wrong</div>}
                </CardContent>
                <Button onClick={putPlayer}>Continue</Button>
            </Card>
        </Layout>
    );
}

export default UserInfo;
