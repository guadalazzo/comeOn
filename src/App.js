import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyAccount from './pages/MyAccount';
import Login from './pages/Login';
import TermsAndConditions from './pages/TermsAndConditions';
import Welcome from './pages/Welcome';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

import PrivateRoute from './PrivateRoute';
import { AuthContext } from './context/auth';

class App extends Component {
    render () {
        return (
            <AuthContext.Provider value={false}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route path="/signup" component={SignUp} />
                        <PrivateRoute exact path="/my-account" component={MyAccount} />
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
}
export default App;
