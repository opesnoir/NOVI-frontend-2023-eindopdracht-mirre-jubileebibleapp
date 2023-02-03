/*mijn studenten api-key heeft geen toestemming om de boeken op te halen*/

/*
import React, {useEffect} from 'react';
import axios from "axios";


// api key
const API_KEY = process.env.REACT_APP_API_KEY

const BibleBook = () => {

    useEffect(()=>{
        async function fetchBooks(){

            try{
                const data = await axios.get ('https://api.scripture.api.bible/v1/bibles/exodus/books',{
                    headers: {
                        'api-key': API_KEY,
                        "Content-Type": "application/json"
                    },
                })
                    console.log(data)
            } catch (e){
                console.error(e)
            }

        }
        void fetchBooks ()

    },[])

    return (
        <>


        </>
    );
};

export default BibleBook;*/
