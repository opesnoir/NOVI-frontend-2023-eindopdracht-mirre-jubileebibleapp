import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import lam from "../../assets/login-lamb-pexels-atahan-demir-11553491.jpg";



const Login = () => {
    const {login} = useContext(AuthContext);

    // form
    const [username, setUsername] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [showPassword, setShowPassword] = useState( false );

    async function handleLogin( e ) {
        e.preventDefault();
        try {
            const response = await axios.post( "https://frontend-educational-backend.herokuapp.com/api/auth/signin", {
                "username": username,
                "password": password
            } );
            console.log(response);
            login( response.data.accessToken );
        } catch ( e ) {
            console.error( e );
        }
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <label>
                    Gebruikersnaam:
                    <input
                        type="username"
                        value={username}
                        onChange={ event => setUsername(event.target.value)}
                    />
                </label>
                <label>
                    Wachtwoord:
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        role="user"
                        value={password}
                        onChange={ e => setPassword( e.target.value ) }
                        placeholder="Wachtwoord:"
                        required
                    />

                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={ () => setShowPassword(!showPassword)}
                    />
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

export default Login;