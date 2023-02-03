import React from 'react';
import {Link} from "react-router-dom";
import Button from "../Button/Button";
import DailyVers from "../DailyVers/DailyVers";
import TextCard from "../TextCard/TextCard";
import styles from "./BibleVerseBlock.module.css";


const BibleVerseBlock = () => {

    return (
        <>
            <div className={styles.card__parent}>
                <div className={styles.card__background}>
                    <TextCard
                        title="Bijbeltekst van de dag"
                        paragraph={<DailyVers/>}
                    />
                </div>
                <div className={styles.card__background}>
                    <TextCard
                        title="De Bijbel"
                        paragraph="De Bijbel is een verzameling van zesenzestig boeken. Het zijn geen losse boeken, ..."
                    >
                        <Link to="/about-Bible">
                            <Button
                                className={styles.card__button}
                                type="button"
                                name="Lees meer"
                            />
                        </Link>
                    </TextCard>
                </div>
            </div>
        </>
    );
};

export default BibleVerseBlock;