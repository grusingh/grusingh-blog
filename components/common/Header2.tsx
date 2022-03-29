import React from "react";

const Header2 : React.FunctionComponent  = ({children}) => {
    return (
        <h2 css={{
            fontWeight: 700,
            fontSize: '1.3rem',
            marginBottom: '.5rem',
        }}>{children}</h2>
    );
};

export default Header2;
