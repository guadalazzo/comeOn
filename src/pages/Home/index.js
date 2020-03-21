import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from './../../context/auth';

function Home (props) {
    const { authTokens } = useAuth();

    if (authTokens) {
        if (authTokens.response.showEmailPhoneCondition) {
            return <Redirect to="/user-info" />;
        }
        if (authTokens.response.showTermsAndCondition) {
            return <Redirect to="/terms-and-conditions" />;
        }
        if (authTokens.response.showWelcomeScreen) {
            return <Redirect to="/welcome" />;
        }
    }
    return <Redirect to="/login" />;
}
export default Home;
