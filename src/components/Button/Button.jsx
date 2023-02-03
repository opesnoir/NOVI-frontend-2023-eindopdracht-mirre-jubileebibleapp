import React from 'react';

const Button = ({container, type, name, onClick, className, children}) => {
    return (
        <>
            <div className={container}>
                <button
                    type={type}
                    className={className}
                    onClick={onClick}
                >
                    {name}
                    {children}
                </button>
            </div>
        </>
    );
};

export default Button;