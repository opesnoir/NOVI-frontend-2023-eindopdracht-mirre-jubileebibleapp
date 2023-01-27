import React from 'react';
import styles from "./AboutInput.module.css";

const AboutInput = ({title, paragraphOne, paragraphTwo, children, signature}) => {
    return (
        <>
            <section>
                <article className={styles.about__container__outer}>
                    <div className={styles.about__container__inner}>
                    <h1 className={styles.about__h1}>{title}</h1>
                    <p className={styles.about__p}>{paragraphOne}</p>
                    <p className={styles.about__p}>{paragraphTwo}</p>
                    {children}
                    <p className={styles.about__signature}>{signature}</p>
                    </div>
                </article>
            </section>
        </>
    );
};

export default AboutInput;