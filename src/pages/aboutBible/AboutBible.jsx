import React from 'react';
import Image from "../../components/Image/Image";
import AboutInput from "../../components/AboutInput/AboutInput";
import styles from "./AboutBible.module.css";
import schapen from "../../assets/about-sheeps-pexels-nazım-can-pirinç-11443337.jpg"

const AboutBible = () => {
    return (
        <>
            <AboutInput
                title="Over de Bijbel"
                paragraphOne="De Bijbel is een verzameling van zesenzestig boeken. Het zijn geen losse boeken, maar afgeronde Bijbelgedeelten die ieder een stuk van een groter verhaal vertellen. Te weten het verhaal van de Elohim JHWH (de God van Abraham, Isaak en Jacob) en Zijn plan om de gevallen schepping te redden van de gevolgen van de zondeval."
                paragraphTwo=" “Heel de Schrift is door God ingegeven en is nuttig om daarmee te onderwijzen, te weerleggen, te verbeteren en op te voeden in de rechtvaardigheid, opdat de mens die God toebehoort, volmaakt zou zijn, tot elk goed werk volkomen toegerust.” - 2 Timoteüs 3:16 en 17 "
                children=""
            >
                <p className={styles.about__p}>Meer leren over de Bijbel. Neem dan een kijkje op de website van The Bible Project. The Bible Project is een non-profit organisatie die geanimeerde video's en studiematerialen aanbiedt, om de Bijbel toegankelijk te maken voor iedereen. Naar de website van The Bible Project? Klik dan: </p>
                <p><a className={styles.about__a} target="_blank" href="https://bibleproject.com/Dutch/">hier.</a></p>
            </AboutInput>
            <Image
                image={schapen}
                alt="Afbeelding van schapen in een stal"
            />
        </>
    );
};

export default AboutBible;