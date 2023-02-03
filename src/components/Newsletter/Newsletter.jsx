import React, {useEffect, useState} from 'react';
import styles from "../../pages/home/Home.module.css";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("email", email);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="" className={styles.tile__form__label}  placeholder="Email">Email:</label>
                <input value={email} onChange={handleEmail} className={styles.tile__label__input} type="email"/>
                <button type="button" onClick={handleSubmit} className={styles.tile__aanmelden__button} >aanmelden</button>
            </form>
        </>
    );
};

export default Newsletter;