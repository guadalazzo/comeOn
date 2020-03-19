import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Nav from '../../components/Nav';
import Input from '../../components/Input';
import Card from '../../components/Card';
import Button from '../../components/Button';

import './styles.scss';

function MyAccount (props) {
    return (
        <Layout>
            <Nav>
                <Link to="/login"><div className="arrow-left" /></Link>
                <img src="https://img.icons8.com/offices/30/000000/logo.png"/>
            </Nav>
            <Card>
                <img className="ok-logo" src="https://img.icons8.com/wired/64/000000/checked-user-male.png"/>
                <p>Share your details</p>
                <Input
                    type="email"
                    placeholder="Email"
                />
                <label htmlFor="phone">
                    <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="Country Code"
                    />
                    <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="Mobile Number"
                    />
                </label>
                <label htmlFor="marketing">
                    <input
                        type="checkbox"
                    />
                    <small>I do not want to receive electronic marketing material.</small>
                </label>
                <Button>Continue</Button>
            </Card>

        </Layout>
    );
}

export default MyAccount;
