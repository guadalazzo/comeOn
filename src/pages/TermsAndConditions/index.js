import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Nav from '../../components/Nav';
import Card from '../../components/Card';
import CardContent from '../../components/CardContent';
import Button from '../../components/Button';

import './styles.scss';

function TermsAndConditions (props) {

    return (
        <Layout>
            <Nav>
                <Link to="/user-info">
                    <div className="arrow-left" />
                </Link>
                <img src="https://img.icons8.com/offices/30/000000/logo.png"/>
            </Nav>
            <Card>
                <CardContent>
                    <img className="ok-logo" src="https://img.icons8.com/dotty/80/000000/terms-and-conditions.png"/>
                    <h2>Terms and conditions</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt</h3>
                    <div className="terms-container">
                        <h4>Instructions</h4>
                        <p>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.<br />
                        These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here.
                        You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.<br />
                        Minors or people below 18 years old are not allowed to use this Website.</p>
                        <h4>Intellectual Property Rights</h4>
                        <p>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.<br />
                        These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here.
                        You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.<br />
                        Minors or people below 18 years old are not allowed to use this Website.</p>
                        <h4>Intellectual Property Rights</h4>
                        <p>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.<br />
                        These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here.
                        You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.<br />
                        Minors or people below 18 years old are not allowed to use this Website.</p>
                    </div>
                </CardContent>
                <Button >Accept</Button>

            </Card>

        </Layout>
    );
}

export default TermsAndConditions;
