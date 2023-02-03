import React from 'react';
import styles from './VideoCard.module.css'

const VideoCard = ({width, height, src, title, allow,}) => {
    return (
        <>
            <div className={styles.card}>
                <iframe
                    className={styles.card__frame}
                    width={width}
                    height={height}
                    src={src}
                    title={title}
                    allow={allow}
                    allowFullScreen>
                </iframe>
                <article>
                    <p className={styles.card__text}>Youtube</p>
                    <h5 className={styles.card__title}>{title}</h5>
                </article>
            </div>
        </>
    );
};

export default VideoCard;