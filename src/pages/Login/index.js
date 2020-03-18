import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function Login (props) {
    return (
        <article>
            <h1>Login</h1>
            <Link to="welcome">welcome</Link>
            <section>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button>Login</button>
                <Link to="/signup">Don't have an account?</Link>
            </section>
        </article>
    );
}

export default Login;
