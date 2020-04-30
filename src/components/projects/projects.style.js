import styled from 'styled-components';

export const ProjectsContainer = styled.section`
    padding: 6.2rem 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 769px) {
        padding: 0 2rem;
    }  
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