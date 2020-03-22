import './styles.scss';
import React from 'react';

const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="neu">
            {children}
        </button>
    );
};
export default Button;
