import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from './../../context/auth';


function Home (props) {
    const { authTokens } = useAuth();

    if (authTokens) {
        return <h1>Home</h1>;
    }
    return <Redirect to="/login" />

}
export default Home;
