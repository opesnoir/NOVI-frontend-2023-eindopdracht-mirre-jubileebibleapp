import React from 'react';
import styles from "../SectionInput/SectionInput.module.css";

const AboutInput = ({title, paragraphOne, paragraphTwo, children, signature}) => {
    return (
        <>
            <article>
                <h1 className={styles.about__h1}>{title}</h1>
                <p className={styles.about__p}>{paragraphOne}</p>
                <p className={styles.about__p}>{paragraphTwo}</p>
                {children}
                <p className={styles.about__signature}>{signature}</p>
            </article>
        </>
    );
};

export default AboutInput;