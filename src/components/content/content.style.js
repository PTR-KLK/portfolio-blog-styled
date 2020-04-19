import styled from 'styled-components';

export const Main = styled.main`
    margin: 0 0 0 0;
    text-align: justify;

    @media (min-width: 769px) {
        margin: 0 0 0 33%;
        width: 67%;
        height: 100%;
    }

    @media (min-width: 1440px) {
        margin: 0 0 0 25%;
        width: 50%;
    }

    @media (min-width: 2560px) {
        margin: 0 0 0 33%;
        width: 33%;
    }
`;