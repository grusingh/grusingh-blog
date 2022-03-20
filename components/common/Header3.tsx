import React from "react";

const Header3 = ({children}: {children: React.ReactNode}) => {
    return (
        <h3 css={{
            fontWeight: 700,
            fontSize: '1rem',
            marginBottom: '.5rem',
        }}>{children}</h3>
    );
};

export default Header3;
