import React from 'react';
import {Link} from "react-router-dom";
import Button from "../Button/Button";
import granaatappel from "../../assets/home-pomegranate-pexels-pixabay-65256 copy.jpg"
import DailyVers from "../DailyVers/DailyVers";


const BibleVersInfo = () => {

    return (
        <>
            <div>
                <div>
                    <img src={granaatappel} alt="Afbeelding van een granaatappel"/>
                    <div>
                        <h2>Bijbeltekst van de dag</h2>
                        <p><DailyVers/></p>
                    </div>
                    <div>
                        <h2>De Bijbel</h2>
                        <p>Achtergrondinformatie</p>
                        <p>De Bijbel is een verzameling van zesenzestig boeken...</p>
                        <Link to="/about-Bible">
                            <Button
                                type="button"
                                name="Lees meer"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BibleVersInfo;