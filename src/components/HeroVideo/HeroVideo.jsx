import React from 'react';
import styles from "./HeroVideo.module.css";

const HeroVideo = ({video, type}) => {
    return (
        <>
            <div className={styles.video__background}>
                <video autoPlay={true} muted={true} loop={true} src={video} typeof={type}></video>
            </div>

        </>
    );
};

export default HeroVideo;