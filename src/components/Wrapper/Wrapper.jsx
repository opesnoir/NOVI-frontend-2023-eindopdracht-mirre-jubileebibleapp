import React from 'react';

const Wrapper = ({children}) => {
    return (
        <div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Wrapper;