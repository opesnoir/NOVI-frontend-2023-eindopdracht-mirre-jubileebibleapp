import React from 'react';
import SectionInput from "../../components/SectionInput/SectionInput";
import Wrapper from "../../components/Wrapper/Wrapper";
import VideoBox from "../../components/VideoBox/VideoBox";
import BibleVersInfo from "../../components/BibleVersInfo/BibleVersInfo";



const Home = () => {
    return (
        <>
            <Wrapper>
                <SectionInput
                title="Zoek een Bijbelvers"
                paragraphOne="Welkom op Jubilee BibleApp. Zoek hieronder een Bijbelvers op titel of steekwoord in ruim 40 vertalingen. Selecteer een Bijbel, voer een zoekterm in en druk op de button om de resultaten te bekijken."
                />
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

        </>
    );
};

export default Home;