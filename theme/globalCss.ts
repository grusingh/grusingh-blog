export default `
html, body {
    height: 100%;
} 
#__next {
    min-height: 100%;
    overflow-x: hidden;
    padding: 0 1rem;
    display: flex;
    flex-flow: column nowrap;
}
body {
    font-family: 'Lato', sans-serif;
}
a, a:hover, a:focus, a:visited {
    text-decoration: none;
    color: #3455db;
}
a:hover {
    color: #9932cc;
    transition: all 3s easy;
}
`;
