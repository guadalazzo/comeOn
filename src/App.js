import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyAccount from './pages/MyAccount';
import Login from './pages/Login';
import TermsAndConditions from './pages/TermsAndConditions';
import Welcome from './pages/Welcome';

class App extends Component {
    render () {
        return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/my-account" component={MyAccount} />
                <Route exact path="/terms-and-conditions" component={TermsAndConditions} />
                <Route exact path="/welcome" component={TermsAndConditions} />
            </Switch>
        </Router>
        );
    }
}
export default App;
