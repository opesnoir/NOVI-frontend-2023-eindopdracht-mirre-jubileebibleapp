import React from 'react';
import styles from "./SectionInput.module.css";

//component for the about pages
const SectionInput = ({title, paragraphOne, paragraphTwo, children}) => {
    return (
        <>
            <article className={styles.hero__parent}>
                <h1 className={styles.h1}>{title}</h1>
                <p className={styles.p}>{paragraphOne}</p>
                <p className={styles.p}>{paragraphTwo}</p>
                {children}
            </article>
        </>
    );
};

export default SectionInput;