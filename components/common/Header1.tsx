import React from "react";

const Header1 : React.FunctionComponent = ({children}) => {
    return (
        <h1 css={{
            fontWeight: 900,
            fontSize: '2.5rem',
            marginBottom: '1rem',
        }}>
            {children}
        </h1>
    );
};

export default Header1;
