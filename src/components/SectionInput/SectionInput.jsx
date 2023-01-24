import React from 'react';

//component for the about pages
const SectionInput = ({title, paragraphOne, paragraphTwo, children, signature}) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{paragraphOne}</p>
            <p>{paragraphTwo}</p>
            {children}
            <p>{signature}</p>
        </>
    );
};

export default SectionInput;