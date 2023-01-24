import React from 'react';
import styles from './VideoBox.module.css'

const VideoBox = ({width, height, src, title, allow,}) => {
    return (
        <>
            <div>
                <iframe
                    className={styles.frame}
                    width={width}
                    height={height}
                    src={src}
                    title={title}
                    allow={allow}
                    allowFullScreen>
                </iframe>
                <article>
                    <p>Youtube</p>
                    <h5>{title}</h5>
                </article>
            </div>
        </>
    );
};

export default VideoBox;