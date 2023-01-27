import React, {useContext} from 'react';
import Wrapper from "../../components/Wrapper/Wrapper";
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";
import {AiOutlineUser} from 'react-icons/ai';
import {AuthContext} from "../../context/AuthContext";

const Profile = () => {
    const {user: {username}} = useContext(AuthContext)
    const {user: {email}} = useContext(AuthContext)

    return (
        <>
            <Wrapper>
                <h1><AiOutlineUser/>Profielpagina</h1>
                <p>Gebruikersnaam: {username}</p>
                <p>Email: {email}</p>
                <p>Naar favorieten: {<Link to="/favorite">Klik hier</Link>}</p>
                <Button
                    name="Account verwijderen"
                />
            </Wrapper>
        </>
    );
};

export default Profile;