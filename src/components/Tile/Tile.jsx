import React from 'react';
import styles from "./Tile.module.css";

const Tile = ({title, paragraph, children}) => {
    return (
        <>
            <div>
                <div className={styles.tile__container__inner}>
                    <h2 className={styles.tile__h}>{title}</h2>
                    <p className={styles.tile__p}>{paragraph}</p>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Tile;