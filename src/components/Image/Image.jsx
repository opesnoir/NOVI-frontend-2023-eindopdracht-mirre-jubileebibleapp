import React from 'react';
import styles from './Image.scss'

const Image = ({src, alt}) => {
    return (
        <>
            <img
                src={src}
                alt={alt}
                className={styles.image}
            />
        </>
    );
};

export default Image;