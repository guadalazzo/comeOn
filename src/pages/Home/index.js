import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useAuth } from './../../context/auth';
import { Layout, Nav, Card } from '../../components';
import './styles.scss';

function Home (props) {
    const { authTokens, deleteTokens } = useAuth();
    const currentState = !!authTokens;
    const [isLogged, setIsLogged] = useState(currentState);

    const handleClick = e => {
        if (authTokens) {
            deleteTokens();
            setIsLogged(false);
        }
    };
    if (authTokens) {
        if (authTokens.response.showEmailPhoneScreen) {
            return <Redirect to="/user-info" />;
        }
        if (authTokens.response.showTermsAndCondition) {
            return <Redirect to="/terms-and-conditions" />;
        }
        if (authTokens.response.showWelcomeScreen && !authTokens.welcomeOk) {
            return <Redirect to="/welcome" />;
        }
        return (
            <Layout>
                <Nav>
                    {' '}
                    <h1>Home</h1>
                    {isLogged ? (
                        <a className="log" onClick={handleClick}>
              Logout
                        </a>
                    ) : (
                        <Link to="/login" className="log">
              Login
                        </Link>
                    )}
                </Nav>
                <Card>
                    <img
                        className="home-img"
                        src="https://img.icons8.com/bubbles/200/000000/cottage.png"
                    />
                </Card>
            </Layout>
        );
    }
    return <Redirect to="/login" />;
}
export default Home;
