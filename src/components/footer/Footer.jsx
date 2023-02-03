import React from 'react';
import {FaPinterest, FaTwitter} from "react-icons/fa";
import {FiFacebook, FiInstagram} from "react-icons/fi";
import {Link} from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <>
            <div className={styles.footer__container}>
                <div>
                    <p className={styles.footer__p}>Meer informatie:</p>
                    <Link to="/about-Jubilee" className={styles.footer__link}>Jubilee BibleApp</Link>
                </div>
                <div className={styles.footer__icons}>
                    <p>Bezoek: <FiFacebook/> <FiInstagram/> <FaTwitter/> <FaPinterest/></p>
                    <p className={styles.footer__copy}>&copy; 2023</p>
                </div>
            </div>
        </>
    );
};

export default Footer;