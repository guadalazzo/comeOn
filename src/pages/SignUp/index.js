import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function SignUp (props) {
    return (
        <article>
            <h1>SignUp</h1>
            <section>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <input type="password" placeholder="password again" />
                <button>SignUp</button>
                <Link to="/login">Already have an account?</Link>
            </section>
        </article>
    );
}

export default SignUp;
