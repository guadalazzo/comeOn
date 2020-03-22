import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from './../../context/auth';
import { Layout, Button, Card } from '../../components';
import './styles.scss';

function Welcome (props) {
    const { setAuthTokens, authTokens } = useAuth();
    const [nextStep, setNextStep] = useState(false);

    const handleClick = e => {
        const customAuthTokens = authTokens;
        customAuthTokens.welcomeOk = true;
        setAuthTokens(customAuthTokens);
        setNextStep(true);
    };

    if (nextStep) {
        return <Redirect to="/" />;
    }
    return (
        <Layout>
            <Card>
                <div className="content-center">
                    <img src="https://img.icons8.com/wired/64/000000/champagne.png" />
                    <h2>Hello, welcome back</h2>
                    <h3>It's nice to see you again.</h3>
                    <div className="balance-status">
                        <p>Your current balance is:</p>
                        <h1>100kr</h1>
                    </div>
                </div>
                <Button type="button" onClick={handleClick}>
          Continue
                </Button>
            </Card>
        </Layout>
    );
}

export default Welcome;
