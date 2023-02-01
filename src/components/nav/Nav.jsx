import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import logo from "../../assets/oudlogo-jubilee-bibleapp-high-resolution-logo-white-on-transparent-background.png"
import {AiOutlineUser, AiOutlineUserAdd} from "react-icons/ai";
import {AuthContext} from "../../context/AuthContext";
import styles from "./Nav.module.css";
import {IoIosLogOut} from "react-icons/io";
import {CgProfile} from "react-icons/cg";
import {GiArchiveResearch} from "react-icons/gi";


const Nav = () => {

    // authentication
    const {isAuth, logout} = useContext(AuthContext);

    // handle logout
    function handleLogout(){
        logout()
    }

    return (
        <>
            <div>
                <div className={styles.nav__container}>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li>
                                <NavLink to="/about">Over</NavLink>
                                <ul>
                                    <li><NavLink to="/about">Over mij</NavLink></li>
                                  <li><NavLink to="/about-Jubilee">Over Jubilee</NavLink></li>
                                  <li><NavLink to="/about-Bible">Over de Bijbel</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to="/search">{/*<GiArchiveResearch/>Lees*/}</NavLink> </li>
                            <img className={styles.nav__logo} src={logo} alt="Jubilee Logo"/>
                            { isAuth ?
                                <>
                                    <li><NavLink to="/profile"><CgProfile/>Profielpagina</NavLink></li>
                                    <li><NavLink className={styles.nav__logout} type="text" onClick={handleLogout}><IoIosLogOut/>Uitloggen</NavLink></li>
                                </>
                                :
                                <>
                                    <li><NavLink to="/signup"><AiOutlineUserAdd/>Registreer</NavLink></li>
                                    <li><NavLink to="/signin"><AiOutlineUser/>Login</NavLink></li>
                                    <li><NavLink to="/search"><GiArchiveResearch/>Zoek</NavLink> </li>
                                </>
                                }
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Nav;
