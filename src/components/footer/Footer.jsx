import React from 'react';
import {FaPinterest, FaTwitter} from "react-icons/fa";
import {FiFacebook, FiInstagram} from "react-icons/fi";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div>
                <p>Meer informatie:</p>
                <Link to="/about-Jubilee">Jubilee BibleApp</Link>
            </div>
            <div>
                <p>Bezoek: <FiFacebook/> <FiInstagram/> <FaTwitter/> <FaPinterest/></p>
                <p>&copy; 2023</p>
            </div>
        </>
    );
};

export default Footer;