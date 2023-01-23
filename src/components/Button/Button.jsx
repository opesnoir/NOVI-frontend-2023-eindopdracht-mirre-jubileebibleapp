import React from 'react';
import styles from "./Button.module.css";

const Button = ({type, name, children}) => {
    return (
        <>
            <div>
                <button
                    type={type}
                    className={styles.button}
                >
                    {name}
                </button>
            </div>
        </>
    );
};

export default Button;