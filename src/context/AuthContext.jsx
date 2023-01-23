import React, {useEffect, createContext, useState } from 'react';
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

// create context
// custom component
export const AuthContext = createContext({});

// custom provider component, with children as a property
function AuthContextProvider({children}) {

    // state
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending"
    })

    // navigate
    const navigate = useNavigate();

    useEffect(() =>{
        // get token from local storage
        const storedToken = localStorage.getItem('token')

        //if token = true get userdata
        if(storedToken){
            const decodedToken = jwt_decode(storedToken)

            if(Math.floor(Date.now()/ 1000) <decodedToken.exp){
                //check if it works
                console.log("gebruiker nog ingelogd")
                void fetchUserData(storedToken, decodedToken.sub)
            } else {
                // check if it works
                console.log("token is verlopen")
                localStorage.removeItem('token')
            }
        } else {
            // no token
            setAuth({
                ...auth,
                isAuth: false,
                user: null,
                status: "done"
            })
        }
    }, [])

    // login function
    function login(jwt){
        // check if it works
        console.log("gebruiker ingelogd")
        localStorage.setItem('token', jwt)
        const decodedToken = jwt_decode(jwt);

        void fetchUserData(jwt, decodedToken.sub, "/profile")
    }

    // fetching the userdata
    async function fetchUserData(jwt, id, redirect) {
        try {
            const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user/${id}`,{
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwt}`,
                }
            })
            console.log(response);
            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    email: response.data.email,
                    id: response.data.id,
                    username: response.data.username
                },
                status: "done"
            })
            if (redirect){
                navigate(redirect)
            }
            console.log(response);
        } catch(e) {
            console.error(e)
            setAuth({
                ...auth,
                status: "done"
            })
        }
    }

    // logout function
    function logout (){
        console.log("gebruiker uitgelogd")
        localStorage.removeItem('token')
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
            status: "done"
        })
        navigate("/login")
    }

    const contextData = {
        isAuth: auth.isAuth,
        user: auth.user,
        status: auth.status,
        login: login,
        logout: logout
    }


    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
