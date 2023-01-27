import React from 'react';
import Image from "../../components/Image/Image";
import schaap from "../../assets/about-sheep-pexels-arthur-swiffen-12550240 copy.jpg"
import AboutInput from "../../components/AboutInput/AboutInput";

const About = () => {
    return (
        <>
            <AboutInput
                title="Over mij"
                paragraphOne="“Uw woord is een lamp voor mijn voet, en een licht op mijn pad.”
                                (Psalm 119:105). Dat
                                schreef David om het woord van de HEERE te omschrijven. Voor mij betekent Gods woord
                                hetzelfde. Daarom heb ik ervoor gekozen voor mijn afstudeer opdracht deze
                                Bijbelapplicatie te bouwen."
                paragraphTwo="Mijn geloof in JHWH vormt het fundament van mijn bestaan en Zijn
                                woord is mijn morele
                                kompas. Ik hoop dan ook dat de Bijbel jou net zo zal inspireren en dat het een licht
                                voor jouw voeten mag zijn."
                signature="Mirre"
            />
            <Image
                image={schaap}
                alt="Schaap"
            />
        </>
    );
};

export default About;