import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import logo from "../../assets/logo-jubilee-bibleapp-high-resolution-logo-white-on-transparent-background.png"
import {AiOutlineUser, AiOutlineUserAdd} from "react-icons/ai";
import {AuthContext} from "../../context/AuthContext";

const Nav = () => {

    // authentication
    const {isAuth, logout} = useContext(AuthContext);

    // handle logout
    function handleLogout(){
        logout()
    }

    return (
        <>
            <nav>
                <div>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">Over</NavLink></li>
                        <img src={logo} alt="Jubilee Logo"/>
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
                </div>
            </nav>
        </>
    );
};

export default Nav;
