import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import logo from "../../assets/oudlogo-jubilee-bibleapp-high-resolution-logo-white-on-transparent-background.png"
import {AiOutlineUser, AiOutlineUserAdd} from "react-icons/ai";
import {AuthContext} from "../../context/AuthContext";
import styles from "./Nav.module.css";


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
                        <li><NavLink to="/about">Over</NavLink></li>
                        <img className={styles.nav__logo} src={logo} alt="Jubilee Logo"/>
                        { isAuth ?
                            <>
                                <li><NavLink to="/profile">Profielpagina</NavLink></li>
                                <li><button type="button" onClick={handleLogout}>Uitloggen</button></li>
                            </>
                            :
                            <>
                                <li><NavLink to="/signup"><AiOutlineUserAdd/>Registreer</NavLink></li>
                                <li><NavLink to="/signin"><AiOutlineUser/>Login</NavLink></li>
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
