import React from 'react';
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";
import {Link} from "react-router-dom";

const Tile = ({title, paragraph, children}) => {
    return (
        <>
            <div>
                <div>
                    <h2>{title}</h2>
                    <p>{paragraph}</p>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Tile;