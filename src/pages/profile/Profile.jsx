import React, {useContext} from 'react';
import Wrapper from "../../components/Wrapper/Wrapper";
import {Link} from "react-router-dom";
import {AiOutlineUser} from 'react-icons/ai';
import {AuthContext} from "../../context/AuthContext";
import styles from "./Profile.module.css";


const Profile = () => {
    const {user: {username}} = useContext(AuthContext)
    const {user: {email}} = useContext(AuthContext)

    return (
        <>
            <Wrapper>
                <div className={styles.profile__container__inner}>
                    <h1 className={styles.profile__title}><AiOutlineUser/>Profielpagina</h1>
                    <p className={styles.profile__text}>Gebruikersnaam: {username}</p>
                    <p className={styles.profile__text}>Email: {email}</p>
                    <p className={styles.profile__text}>Naar favorieten: {<Link className={styles.profile__link} to="/favorite">Klik hier</Link>}</p>
                </div>
            </Wrapper>
        </>
    );
};

export default Profile;