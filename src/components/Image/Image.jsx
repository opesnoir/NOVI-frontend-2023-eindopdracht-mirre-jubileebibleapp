import React from 'react';
import styles from './Image.module.css'

const Image = ({image, alt}) => {
    return (
        <>
            <img
                src={image}
                alt={alt}
                className={styles.image}
            />
        </>
    );
};

export default Image;