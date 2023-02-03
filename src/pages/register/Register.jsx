import React, {useState} from 'react';
import axios from "axios";
import Button from "../../components/Button/Button";
import lam from "../../assets/login-lamb-pexels-atahan-demir-11553491.jpg";
import Image from "../../components/Image/Image";
import FormInput from "../../components/FormInput/FormInput";
import {useForm} from "react-hook-form";
import styles from "../login/Login.module.css";
import {useNavigate} from "react-router-dom";

const Register = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    // form
    const [showPassword, setShowPassword] = useState( false );
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // token
    const token = localStorage.getItem('token');

    // function to register user
    async function registerUser(data) {
        console.log(data)
        console.log( "Gebruiker geregistreerd" )
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',{
                "username": data.name,
                "email": data.email,
                "password": data.password,
                "roles": ["user"],
            })
            navigate('/signin');
            console.log(response);
            /*login( response.data.accessToken )*/
        } catch ( e ) {
            console.error( e )
        }
    }

    return (
        <>
            <div className={styles.container__outer}>
                <div>
                    <div className={styles.container__inner}>
                        <h1 className={styles.title}>Registreer</h1>
                        <form onSubmit={handleSubmit(registerUser)}>
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
                                inputType="email"
                                inputName="email"
                                inputId="email-field"
                                /*inputLabel="Emailadres:"*/
                                placeholder="Emailadres:"
                                validationRules={{
                                    required: {
                                        value: true,
                                        message: 'Emailadres is verplicht',
                                    },
                                    pattern: {
                                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Geldig emailadres is verplicht"
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
                            <FormInput
                                inputType={showConfirmPassword ? "text" : "password"}
                                inputName="confirmpassword"
                                inputId="confirmpassword-field"
                                /*inputLabel="Wachtwoord bevestiging:"*/
                                placeholder="Wachtwoord bevestiging:"
                                validationRules={{
                                    required: {
                                        value: true,
                                        message: 'Wachtwoord bevestiging is verplicht',
                                    }
                                }}
                                register={register}
                                errors={errors}
                            />
                            <label>
                                <input
                                    className={styles.form__checkbox}
                                    type="checkbox"
                                    checked={showConfirmPassword}
                                    onChange={() => setShowConfirmPassword(!showConfirmPassword)}
                                />
                                Wachtwoord bevestiging tonen
                            </label>
                            <Button
                                className={styles.form__button}
                                container={styles.form__container}
                                type="submit"
                                name="Registreren"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <Image
                image={lam}
                alt="Afbeelding van een lam"
            />
        </>
    );
};

export default Register;