import React from 'react';
import styles from "./Button.module.css";

const Button = ({type, name, onClick, children}) => {
    return (
        <>
            <div>
                <button
                    type={type}
                    className={styles.button}
                    onClick={onClick}
                >
                    {name}
                </button>
            </div>
        </>
    );
};

export default Button;