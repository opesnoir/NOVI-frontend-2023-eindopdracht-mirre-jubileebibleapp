import React, {useEffect, useState} from 'react';
import Button from "../Button/Button";
import {Link} from "react-router-dom";
import axios from "axios";

// api key
const API_KEY = process.env.REACT_APP_API_KEY

const BibleList = () => {
    const [bible, setBible] = useState();
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    //DUPLICAAT
    useEffect(() => {
        async function fetchData() {
            setError(false)
            try {
                setLoading(true)
                const response = await axios.get(`https://api.scripture.api.bible/v1/bibles`, {
                    // header data and api key
                    headers: {
                        'api-key': API_KEY,
                    },
                    //add params here
                    params: {}
                })
                console.log(response.data.data)
                setData(response.data.data)
            } catch (error) {
                console.error(error)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        //invoke function
        void fetchData()
    }, [])

    return (
        <>
            <form action="">
                <label htmlFor="">
                    <label htmlFor="bible"></label>
                    <select
                        name="bible"
                        id="bible"
                        value={bible}
                        onChange={(e) => setBible(e.target.value)}>
                        {data.map((b) => (
                            <option key={b.id} value={b.id}>
                                {b.name}
                            </option>
                        ))}
                    </select>
                    <Link to="/search">
                        <Button
                            type="submit"
                            name="Naar de zoekpagina"
                        />
                    </Link>
                </label>
            </form>
        </>
    );
};

export default BibleList;