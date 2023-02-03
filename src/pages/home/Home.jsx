import React from 'react';
import SectionInput from "../../components/SectionInput/SectionInput";
import VideoCard from "../../components/VideoCard/VideoCard";
import BibleVerseBlock from "../../components/BibleVerseBlock/BibleVerseBlock";
import Tile from "../../components/Tile/Tile";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import schaapVideo from "../../assets/home-video-sheep-production ID_5140592.mp4";
import styles from "./Home.module.css";
import Newsletter from "../../components/Newsletter/Newsletter";


const Home = () => {


    return (
        <>
            <div className={styles.outer__container}>
                <div className={styles.inner__container}>
                    <SectionInput
                        title="Jubilee BibleApp"
                        paragraphOne="Welkom bij de Jubilee BibleApp. Deze applicatie biedt u de mogelijkheid om Bijbelversen te zoeken op sleutelwoorden in meer dan 40 vertalingen. Op de zoekpagina kunt u een Bijbel selecteren, een zoekterm invoeren en de resultaten bekijken."
                    >
                        <HeroVideo
                            video={schaapVideo}
                            type="video/mp4"
                        />
                        <Link to="/search">
                            <Button
                                type="button"
                                name="Naar zoekpagina"
                                className={styles.hero__button}
                            />
                        </Link>
                    </SectionInput>
                    <BibleVerseBlock/>
                    <div className={styles.card__parent}>
                        <VideoCard
                            width="359"
                            height="206"
                            src="https://www.youtube.com/embed/XEjDiMjkVRo"
                            title="What is the Bible"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        />
                        <VideoCard
                            width="359"
                            height="206"
                            src="https://www.youtube.com/embed/r8lzuqbeC2c"
                            title="What is the purpose of man?"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        />
                        <VideoCard
                            width="359"
                            height="206"
                            src="https://www.youtube.com/embed/DdXzZLTSrUs"
                            title="The Kingdom of God"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        />
                    </div>
                    <div className={styles.tile__container1}>
                        <Tile
                            title="Registreren"
                            paragraph="Registreer je om favoriete Bijbelverzen op te kunnen slaan."
                        >
                            <Link to="/signup">
                                <Button
                                    className={styles.tile__register__button}
                                    type="button"
                                    onClick="onClick"
                                    name="Ga naar registreren "
                                />
                            </Link>
                        </Tile>
                        <div className={styles.tile__bible}></div>
                    </div>
                    <div className={styles.tile__container2}>
                        <div className={styles.tile__sheep}></div>
                        <Tile
                            title="Aanmelden"
                            paragraph="Op de hoogte blijven van ontwikkelingen? Meld je dan aan voor de nieuwsbrief."
                        >
                            <Newsletter/>
                            <label>
                                <input
                                    type="checkbox"
                                />
                                Ik ga akkoord met het verzenden van mijn e-mailadres.
                            </label>
                        </Tile>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;