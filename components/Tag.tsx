import React from "react";

type TagProps = {
    tag: string;
};

const Tag : React.FunctionComponent<TagProps> = ({tag}) => {
    return <span css={{
        borderRadius: '5px',
        backgroundColor: '#eee',
        padding: '.5rem',
        fontSize: '.8rem'
    }}>{tag}</span>
}

export default Tag;
