import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import FormInput from "../../components/FormInput/FormInput";
import Wrapper from "../../components/Wrapper/Wrapper";
import Button from "../../components/Button/Button";
import lam from "../../assets/login-lamb-pexels-atahan-demir-11553491.jpg";
import Image from "../../components/Image/Image";

const Login = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    // const { register, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    function handleFormSubmit(data) {
        console.log(data)
    }

    return (
        <>
            <Wrapper>
                <h1>Login</h1>
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

export default Login;