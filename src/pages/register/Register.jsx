import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import Button from "../../components/Button/Button";
import lam from "../../assets/login-lamb-pexels-atahan-demir-11553491.jpg";
import Image from "../../components/Image/Image";

const Register = () => {

    const {login} = useContext(AuthContext);

    // form
    const [username, setUsername] = useState(" ");
    const [val, setVal] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [showPassword, setShowPassword] = useState( false );

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await axios.post( "https://frontend-educational-backend.herokuapp.com/api/auth/signin", {
                "username": username,
                "password": password
            });
                console.log(response);
        } catch(error) {
            console.error(e);
        }
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <label>
                    Gebruikersnaam:
                    <input type="username" value={username} onChange={ event => setUsername(event.target.value)}/>
                </label>
                <label>
                    Wachtwoord:
                    <input type="password" value={password} onChange={ event => setPassword(event.target.value)}/>
                </label>
                <label>
                    <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)}/>
                    Toon wachtwoord
                </label>
                <div>
                <Button
                    type="submit"
                    name="Inloggen"
                />
                </div>
            </form>
            <Image
            image={lam}
            alt="Afbeelding van een lam"
            />
        </>
    );
};

export default Register;