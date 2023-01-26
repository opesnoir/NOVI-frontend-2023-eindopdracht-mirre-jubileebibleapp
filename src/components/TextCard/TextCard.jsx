import React from 'react';
import styles from "./TextCard.module.css";

const TextCard = ({title, paragraph, children}) => {
    return (
        <>
            <div className={styles.inner__container}>
                <h3 className={styles.card__title}>{title}</h3>
                <p className={styles.card__text}>{paragraph}</p>
                {children}
            </div>
        </>
    );
};

export default TextCard;