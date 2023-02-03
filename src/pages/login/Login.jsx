import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import schapen from "../../assets/register-schapen-pexels-trinity-kubassek-288621 (1).jpg"
import Image from "../../components/Image/Image";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import styles from "./Login.module.css";

const Login = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    // wachtwoord tonen
    const [showPassword, setShowPassword] = useState(false);
    const {login} = useContext(AuthContext);

/*    function handleFormSubmit(data) {
        console.log(data)
    }*/

    async function handleLogin(data) {
        console.log(data)
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',{
                "username": data.name,
                "password" : data.password,
            })
            console.log(response)
            login( response.data.accessToken )
        } catch ( e ) {
            console.error( e )
        }
    }


    return (
        <>
            <div className={styles.container__outer}>
                <div>
                    <div className={styles.container__inner}>
                        <h1 className={styles.title}>Login</h1>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <FormInput
                            inputType="text"
                            inputName="name"
                            inputId="name-field"
                            /*inputLabel="Gebruikersnaam:"*/
                            placeholder="Gebruikersnaam:"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: 'Gebruikersnaam is verplicht',
                                }
                            }}
                            register={register}
                            errors={errors}
                        />
                        <FormInput
                            inputType={showPassword ? "text" : "password"}
                            inputName="password"
                            inputId="password-field"
                            /*inputLabel="Wachtwoord:"*/
                            placeholder="Wachtwoord:"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: 'Wachtwoord is verplicht',
                                },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message: "Het wachtwoord bevat minimaal 8 tekens, waarvan 1 hoofdletter, 1 getal en 1 leesteken"
                                },
                                minLength: {
                                    value: 8,
                                    message: "Voer minimaal 8 tekens in"
                                }
                            }}
                            register={register}
                            errors={errors}
                        />
                        <label>
                            <input
                                className={styles.form__checkbox}
                                type="checkbox"
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                            />
                            Wachtwoord tonen
                        </label>
                        <Button
                            className={styles.form__button}
                            container={styles.form__container}
                            type="submit"
                            name="Inloggen"
                        />
                    </form>
                    </div>
                </div>
            </div>
            <Image
                image={schapen}
                alt="Afbeelding van schapen"
            />
        </>
    );
};

export default Login;