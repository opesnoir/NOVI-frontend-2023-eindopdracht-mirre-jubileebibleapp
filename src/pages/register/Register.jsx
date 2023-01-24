import React, {useState} from 'react';
import axios from "axios";
import Button from "../../components/Button/Button";
import lam from "../../assets/login-lamb-pexels-atahan-demir-11553491.jpg";
import Image from "../../components/Image/Image";
import Wrapper from "../../components/Wrapper/Wrapper";
import FormInput from "../../components/FormInput/FormInput";
import {useForm} from "react-hook-form";

const Register = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    // form
    const [username,] = useState(" ");
    const [password] = useState(" ");
    const [showPassword, setShowPassword] = useState( false );
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)


    async function handleFormSubmit(e) {
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
            <Wrapper>
                <h1>Registreer</h1>
            </Wrapper>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <FormInput
                    inputType="text"
                    inputName="name"
                    inputId="name-field"
                    inputLabel="Gebruikersnaam:"
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
                    inputType="text"
                    inputName="email"
                    inputId="email-field"
                    inputLabel="Emailadres:"
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
                    inputLabel="Wachtwoord:"
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
                    inputLabel="Wachtwoord bevestiging:"
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
                        type="checkbox"
                        checked={showConfirmPassword}
                        onChange={() => setShowConfirmPassword(!showConfirmPassword)}
                    />
                    Wachtwoord bevestiging tonen
                </label>
                <Button
                    type="submit"
                    name="Inloggen"
                />
            </form>
            <Image
                image={lam}
                alt="Afbeelding van een lam"
            />
        </>
    );
};

export default Register;