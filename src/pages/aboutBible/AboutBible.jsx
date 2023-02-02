import React from 'react';
import Image from "../../components/Image/Image";
import AboutInput from "../../components/AboutInput/AboutInput";
import styles from "../../components/AboutInput/AboutInput.module.css";
import schapen from "../../assets/about-sheeps-pexels-nazım-can-pirinç-11443337.jpg"

const AboutBible = () => {
    return (
        <>
            <AboutInput
                title="Over de Bijbel"
                paragraphOne=" “Heel de Schrift is door God ingegeven en is nuttig om daarmee te onderwijzen, te weerleggen, te verbeteren en op te voeden in de rechtvaardigheid, opdat de mens die God toebehoort, volmaakt zou zijn, tot elk goed werk volkomen toegerust.” - 2 Timoteüs 3:16 en 17 "
                paragraphTwo="De Bijbel is een verzameling van zesenzestig boeken. Het zijn geen losse boeken, maar afgeronde Bijbelgedeelten die ieder een stuk van een groter verhaal vertellen. Te weten het verhaal van de Elohim JHWH (de God van Abraham, Isaak en Jacob) en Zijn plan om de gevallen schepping te redden van de gevolgen van de zondeval."
                signature="Jubilee"
            >
                <p className={styles.about__p}>De Bijbel werd geschreven door ongeveer 40 auteurs met verschillende achtergronden, over een periode van 1500 jaar. Hieronder bevonden zich profeten, priesters, belastingverzamelaars, vissers, tentmakers en herders. Elke auteur biedt een uniek perspectief, maar allen verkondigen de ene ware God en de redding door Jezus Christus. Ondanks het feit dat de Bijbel over een lange tijd geschreven is, zijn er geen tegenstrijdigheden en fouten in de traditionele manuscripten afkomstig uit Antioch. Deze 5210 manuscripten vormen de basis voor onder andere de King James Bible uit 1611 (‘The Holy Bible: 1611 Edition, King James Version’).</p>
            </AboutInput>
            <Image
                image={schapen}
                alt="Afbeelding van schapen in een stal"
            />
        </>
    );
};

export default AboutBible;