import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './styles.scss';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from './../../context/auth';
import { Button, Input, Layout, Nav } from '../../components';

function Login(props) {
  const { setAuthTokens, authTokens } = useAuth();
  const userName =
    (authTokens && authTokens.response && authTokens.response.username) || '';
  const [nextStep, setNextStep] = useState(false);
  const [isError, setIsError] = useState(false);

  async function postLogin(username, password) {
    try {
      const response = await axios.post('http://localhost:3003/authenticate', {
        username,
        password,
      });
      if (response.status === 200) {
        setAuthTokens(response.data);
        setNextStep(true);
        return;
      } else {
        setIsError(true);
        return;
      }
    } catch (e) {
      setIsError(true);
      return;
    }
  }

  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .required('Required')
      .min(8, 'Password must contain at least 8 characters')
      .matches(/(?=.*[0-9])/, 'Password must contain a number'),
  });

  if (nextStep) {
    if (authTokens.response.showEmailPhoneScreen) {
      return <Redirect to="/user-info" />;
    }
    if (authTokens.response.showTermsAndCondition) {
      return <Redirect to="/terms-and-conditions" />;
    }
    if (authTokens.response.showWelcomeScreen && !authTokens.welcomeOk) {
      return <Redirect to="/welcome" />;
    }
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <Nav>
        <Link to="/">x</Link>
        <h1>Login</h1>
      </Nav>
      <Formik
        initialValues={{ username: userName, password: '' }}
        validationSchema={loginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          if (authTokens && authTokens.status === 'SUCCESS') {
            setNextStep(true);
          } else {
            await postLogin(values.username, values.password);
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
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="login-content" onSubmit={handleSubmit}>
            <Input
              type="username"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <small>
              {errors.username && touched.username && errors.username}
            </small>
            <Input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <small>
              {errors.password && touched.password && errors.password}
            </small>
            <Button type="submit">Login</Button>
            {isError && <small>Something went wrong, please try again</small>}
          </form>
        )}
      </Formik>
    </Layout>
  );
}

export default Login;
