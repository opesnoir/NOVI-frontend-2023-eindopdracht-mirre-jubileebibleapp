import React from 'react';
import SectionInput from "../../components/SectionInput/SectionInput";
import Wrapper from "../../components/Wrapper/Wrapper";
import VideoBox from "../../components/VideoBox/VideoBox";
import BibleVersInfo from "../../components/BibleVersInfo/BibleVersInfo";
import Tile from "../../components/Tile/Tile";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import Image from "../../components/Image/Image";
import Bible from "../../assets/home-bible-pexels-johnmark-smith-272337.jpg";
import schapen from "../../assets/home-sheeps-pexels-pixabay-460956.jpg";
import BibleList from "../../components/BibleList/BibleList";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import schaapVideo from "../../assets/home-video-sheep-production ID_5140592.mp4"



const Home = () => {
    return (
        <>
            <Wrapper>
                <SectionInput
                title="Jubilee - zoek een Bijbelvers"
                paragraphOne="Welkom bij de Jubilee BibleApp. Onze applicatie biedt u de mogelijkheid om Bijbelversen te zoeken op sleutelwoorden in meer dan 40 vertalingen. Hieronder kunt u een selectie van beschikbare Bijbels bekijken. Op onze zoekpagina kunt u een Bijbel selecteren, een zoekterm invoeren en de resultaten bekijken."
                >
                    <HeroVideo
                        video={schaapVideo}
                        type="video/mp4"
                    />
                    <BibleList/>
                </SectionInput>
            </Wrapper>
            <BibleVersInfo/>
            <Wrapper>
                <VideoBox
                    width="359"
                    height="206"
                    src="https://www.youtube.com/embed/XEjDiMjkVRo"
                    title="What is the Bible"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
                <VideoBox
                    width="359"
                    height="206"
                    src="https://www.youtube.com/embed/7_CGP-12AE0"
                    title="Story of the Bible"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
                <VideoBox
                    width="359"
                    height="206"
                    src="https://www.youtube.com/embed/takEeHtRrMw"
                    title="The New Humanity"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
            </Wrapper>
            <Wrapper>
                <Tile
                    title="Registreren"
                    paragraph="Registreer je om favoriete Bijbelverzen op te kunnen slaan."
                >
                    <Link to="/signup">
                        <Button
                            type="button"
                            onClick="onClick"
                            name="Ga naar registreren "
                        />
                    </Link>
                </Tile>
                <Image
                    image={Bible}
                    alt="Een Bijbel"
                />
            </Wrapper>
            <Wrapper>
                <Image
                    image={schapen}
                    alt="Afbeelding van twee schapen"
                />
                <Tile
                    title="Aanmelden"
                    paragraph="Op de hoogte blijven van ontwikkelingen? Meld je dan aan voor de nieuwsbrief."
                >
                    <form action="">
                        <label htmlFor="" placeholder="Email">Email:</label>
                        <input type="email"/>
                    </form>
                    <Button
                        type="button"
                        onClick="onClick"
                        name="Aanmelden"
                    />
                    <label>
                        <input
                            type="checkbox"
                        />
                        Ik ga akkoord met het verzenden van mijn e-mailadres.
                    </label>
                </Tile>
            </Wrapper>
        </>
    );
};

export default Home;