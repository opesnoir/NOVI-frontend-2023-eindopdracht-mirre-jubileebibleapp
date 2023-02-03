import React from 'react';
import SectionInput from "../../components/SectionInput/SectionInput";
import Image from "../../components/Image/Image";
import ram from "../../assets/pagenotfound-ram-pexels-johannes-havn-3218340 copy.jpg";
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    //navigate to previous page
    const navigate = useNavigate();
    //set time out to go to previous page
    setTimeout(() =>{
        navigate(-1)
    }, 3000)

    return (
        <>
            <SectionInput
                title="404 | Pagina niet gevonden"
                paragraphTwo="De pagina die je zoekt bestaat niet. Je wordt binnen 3 seconden teruggestuurd naar de vorige pagina"
            />
            <Image
                image={ram}
                alt="Afbeelding van een ram"
            />
        </>
    );
};

export default NotFound;