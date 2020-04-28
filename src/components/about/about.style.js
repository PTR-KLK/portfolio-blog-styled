import styled from 'styled-components';

export const Author = styled.section`
    padding: 0 1rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Header = styled.h1`
    margin: 0;
    font-size: 3.5rem;
    line-height: 3.5rem;
    text-transform: uppercase;
`;

export const Subheader = styled.h2`
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5rem;
`;

export const Info = styled.p`
    font-size: 1rem;
`;

export const Links = styled.figure`
    margin: 0;
    display: flex;
    justify-content: space-between;

    @media (min-width: 376px) {
        width: 60%;
    }

    @media (min-width: 769px) {
        width: 40%;
    }
`;