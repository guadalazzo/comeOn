import React, { useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { Layout, Nav, Card, Button, CardContent } from '../../components';
import { useAuth } from './../../context/auth';
import './styles.scss';

function TermsAndConditions (props) {
    const [nextStep, setNextStep] = useState(false);
    const [isError, setIsError] = useState(false);
    const { setAuthTokens, authTokens } = useAuth();

    const handleSubmit = async e => {
        try {
            const response = await axios.put('http://localhost:3003/player', {
                ...authTokens.response,
                acceptTerms: true
            });
            if (response.status === 200 && response.data.status === 'SUCCESS') {
                const customTokens = authTokens;
                customTokens.status = response.data.status;
                customTokens.response = response.data.response;
                setAuthTokens(customTokens);
                setNextStep(true);
            } else {
                setIsError(true);
                return;
            }
        } catch (e) {
            setIsError(true);
            return;
        }
    };
    if (nextStep) {
        return <Redirect to="/welcome" />;
    }
    return (
        <Layout>
            <Nav>
                <Link to="/user-info">
                    <div className="arrow-left" />
                </Link>
                <img src="https://img.icons8.com/offices/30/000000/logo.png" />
            </Nav>
            <Card>
                <CardContent>
                    <img
                        className="ok-logo"
                        src="https://img.icons8.com/dotty/80/000000/terms-and-conditions.png"
                    />
                    <h2>Terms and conditions</h2>
                    <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
                    </h3>
                    <div className="terms-container">
                        <h4>Instructions</h4>
                        <p>
              These Website Standard Terms and Conditions written on this
              webpage shall manage your use of our website, Webiste Name
              accessible at Website.com.
                            <br />
              These Terms will be applied fully and affect to your use of this
              Website. By using this Website, you agreed to accept all terms and
              conditions written in here. You must not use this Website if you
              disagree with any of these Website Standard Terms and Conditions.
                            <br />
              Minors or people below 18 years old are not allowed to use this
              Website.
                        </p>
                        <h4>Intellectual Property Rights</h4>
                        <p>
              These Website Standard Terms and Conditions written on this
              webpage shall manage your use of our website, Webiste Name
              accessible at Website.com.
                            <br />
              These Terms will be applied fully and affect to your use of this
              Website. By using this Website, you agreed to accept all terms and
              conditions written in here. You must not use this Website if you
              disagree with any of these Website Standard Terms and Conditions.
                            <br />
              Minors or people below 18 years old are not allowed to use this
              Website.
                        </p>
                        <h4>Intellectual Property Rights</h4>
                        <p>
              These Website Standard Terms and Conditions written on this
              webpage shall manage your use of our website, Webiste Name
              accessible at Website.com.
                            <br />
              These Terms will be applied fully and affect to your use of this
              Website. By using this Website, you agreed to accept all terms and
              conditions written in here. You must not use this Website if you
              disagree with any of these Website Standard Terms and Conditions.
                            <br />
              Minors or people below 18 years old are not allowed to use this
              Website.
                        </p>
                    </div>
                </CardContent>
                <Button type="button" onClick={handleSubmit}>
          Accept
                </Button>
                {isError && <div>Some of the data is wrong</div>}
            </Card>
        </Layout>
    );
}

export default TermsAndConditions;
