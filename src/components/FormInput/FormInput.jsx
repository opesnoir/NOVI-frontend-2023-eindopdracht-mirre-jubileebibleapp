import React from 'react';
import styles from "./FormInput.module.css";

const FormInput = ({inputId, inputLabel, inputType, inputName, validationRules, register, errors}) => {
    return (
        <>
            <label className={styles.input__label} htmlFor={inputId}>
                {inputLabel}
                <input
                    className={styles.input__tekst}
                    type={inputType}
                    id={inputId}
                    {...register(inputName, validationRules)}
                />
            </label>
            {errors[inputName] && <p className={styles.input__error} >{errors[inputName].message}</p>}
        </>
    );
};

export default FormInput;