import React from 'react';
import styles from "./Button.module.css";

const Button = ({type, name, onClick, className, children}) => {
    return (
        <>
            <div>
                <button
                    type={type}
                    className={className}
                    onClick={onClick}
                >
                    {name}
                    {children}
                </button>
            </div>
        </>
    );
};

export default Button;