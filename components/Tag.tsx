const Tag = ({tag}: {tag: string}) => {
    return <span css={{
        borderRadius: '5px',
        backgroundColor: '#eee',
        padding: '.5rem',
        fontSize: '.8rem'
    }}>{tag}</span>
}

export default Tag;
