import React from 'react';
import styles from "./SectionInput.module.css";

//component for the about pages
const SectionInput = ({title, paragraphOne, paragraphTwo, children, signature}) => {
    return (
        <>
            <article className={styles.hero__parent}>
                <h1>{title}</h1>
                <p>{paragraphOne}</p>
                <p>{paragraphTwo}</p>
                {children}
                <p>{signature}</p>
            </article>
        </>
    );
};

export default SectionInput;