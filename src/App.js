import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserInfo from './pages/UserInfo';
import Login from './pages/Login';
import TermsAndConditions from './pages/TermsAndConditions';
import Welcome from './pages/Welcome';
import Home from './pages/Home';

import './styles.scss';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from './context/auth';

function App (props) {
    const existingTokens = JSON.parse(localStorage.getItem('tokens'));
    const [authTokens, setAuthTokens] = useState(existingTokens);

    const setTokens = data => {
        localStorage.setItem('tokens', JSON.stringify(data));
        setAuthTokens(data);
    };
    const deleteTokens = () => {
        localStorage.removeItem("tokens");
        setAuthTokens();
    };
    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens, deleteTokens }}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/user-info" component={UserInfo} />
                    <PrivateRoute
                        exact
                        path="/terms-and-conditions"
                        component={TermsAndConditions}
                    />
                    <PrivateRoute path="/welcome" component={Welcome} />
                </Switch>
            </Router>
        </AuthContext.Provider>
    );
}
export default App;
