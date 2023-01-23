import React from 'react';
import styles from './Wrapper.module.css';

const Wrapper = ({children}) => {
    return (
        <div className={styles.outer}>
            <div className={styles.inner}>
                {children}
            </div>
        </div>
    );
};

export default Wrapper;