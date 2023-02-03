import React from 'react';
import Image from "../../components/Image/Image";
import ram from "../../assets/aboutjubilee-ram-pexels-david-selbert-7465130.jpg";
import AboutInput from "../../components/AboutInput/AboutInput";

const AboutJubilee = () => {
    return (
        <>
            <AboutInput
                title="Over Jubilee BibleApp"
                paragraphOne="“Houd aan in het lezen, in het vermanen, in het leren, totdat ik kome.”
                (1 Timotheüs 4:13). Dat schreef Timotheus over het lezen van het woord van de HEERE. "
                paragraphTwo="Jubilee BibleApp stelt de Bijbel beschikbaar in 40 vertalingen, zodat een ieder die dat wil de Bijbel kan lezen en zo kan leren over Gods woord."
                signature="Jubilee"
            />
            <Image
                image={ram}
                alt="Ram"
            />
        </>
    );
};

export default AboutJubilee;