import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from './../../context/auth';
import { Layout, Nav, Input, Card, Button, CardContent } from '../../components';

import './styles.scss';

function UserInfo (props) {
    const [nextStep, setNextStep] = useState(false);
    const [isError, setIsError] = useState(false);
    const { setAuthTokens, authTokens } = useAuth();
    const email = authTokens && authTokens.response && authTokens.email || '';
    const code = authTokens && authTokens.response && authTokens.code || '';
    const phoneNumber = authTokens && authTokens.response && authTokens.phoneNumber || '';
    const acceptMarketing = authTokens && authTokens.response && authTokens.acceptMarketing || true;
    console.log(email,code,phoneNumber,acceptMarketing,'eeeeesd');
    const {
        response: { id, username }
    } = authTokens;

    const phone = (code,phoneNumber) => {
        const auxPhone = { code, phoneNumber };
        if (code !== '' && phoneNumber !== '') {
            return Object.values(auxPhone).join('');
        }
    };
    const userInfoSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        code: Yup.string()
            .matches(/^(\+?\d{1,3}|\d{1,4})$/, 'Invalid code')
            .required('Required'),
        phoneNumber: Yup.string()
            .matches(/^[0][1-9]\d{9}$|^[1-9]\d{9}$/, 'Invalid phone number')
            .required('Required'),
    });
    async function putPlayer (email, code, phoneNumber, acceptMarketing) {
        try {
            console.log(id,
            username,
            email,
            phone(code, phoneNumber),
            acceptMarketing,'que mando');
            const response = await axios.put('http://localhost:3003/player', {
                id,
                username,
                email,
                phone: phone(code, phoneNumber),
                acceptMarketing
            });
            if (response.status === 200 && response.data.status === "SUCCESS") {
                const customData = response.data;
                customData.email = email;
                customData.code = code;
                customData.phoneNumber = phoneNumber;
                customData.acceptMarketing = acceptMarketing;
                setAuthTokens(customData);
                setNextStep(true);
            } else {
                console.log('eee', response);
                setIsError(true);
                return;
            }
        } catch (e) {
            setIsError(true);
            return;
        }
    }

    if (nextStep) {
        return <Redirect to="/terms-and-conditions" />;
    }
    return (
        <Layout>
            <Nav>
                <Link to="/login">
                    <div className="arrow-left" />
                </Link>
                <img src="https://img.icons8.com/offices/30/000000/logo.png" />
            </Nav>
            <Card>
                <Formik
                    initialValues={{ email: email, code: code, phoneNumber: phoneNumber, acceptMarketing: acceptMarketing }}
                    validationSchema={userInfoSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        console.log(values);
                        if (authTokens &&
                            !authTokens.response.showEmailPhoneScreen &&
                            authTokens.status === 'SUCCESS') {
                            setNextStep(true);
                        } else {
                            await putPlayer(values.email, values.code, values.phoneNumber, values.acceptMarketing);
                            setSubmitting(false);
                        }
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <CardContent>
                                <img
                                    className="ok-logo"
                                    src="https://img.icons8.com/wired/64/000000/checked-user-male.png"
                                />
                                <h2>Share your details</h2>

                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={ values.email}
                                />
                                <small>
                                    {errors.email && touched.email && errors.email}
                                </small>
                                <label htmlFor="phone">
                                    <Input
                                        type="tel"
                                        id="code"
                                        name="code"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.code}
                                        placeholder="Country Code"
                                    />
                                    <Input
                                        type="tel"
                                        id="phone-number"
                                        name="phoneNumber"
                                        value={values.phoneNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Mobile Number"
                                    />
                                </label>
                                <small>
                                    {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                                </small>
                                <small>
                                    {errors.code && touched.code && errors.code}
                                </small>
                                <label htmlFor="marketing">
                                    <input
                                        type="checkbox"
                                        id="accept-marketing"
                                        name="acceptMarketing"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.acceptMarketing}
                                        checked={values.acceptMarketing}
                                    />
                                    <small>
                                        I do not want to receive electronic marketing material.
                                    </small>
                                </label>
                                <small>
                                    {errors.acceptMarketing && touched.acceptMarketing && errors.acceptMarketing}
                                </small>
                                {isError && <div>Some of the data is wrong</div>}
                            </CardContent>
                            <Button type="submit">Continue</Button>
                        </form>
                    )}
                </Formik>
            </Card>
        </Layout>
    );
}

export default UserInfo;
