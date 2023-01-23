import React from 'react';

//component for the about pages
const SectionInput = ({title, paragraphOne, paragraphTwo, children, signature}) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{paragraphOne}</p>
            <p>{paragraphTwo}</p>
            {children}
            <p>{signature}</p>
        </>
    );
};

export default SectionInput;