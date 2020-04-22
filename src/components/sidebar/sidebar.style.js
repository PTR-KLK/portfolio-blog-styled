import styled from 'styled-components';

export const Navigation = styled.nav`
    color: white;
    background-color: #333;
    position: sticky;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.25rem 0 0.5rem 0;

    @media (min-width: 769px) {
        position: fixed;
        padding: 0;
        align-items: center;
        width: 33%;
        height: 100%;
    }

    @media (min-width: 1440px) {
        width: 25%;
    }

    @media (min-width: 2560px) {
        width: 33%;
    }
`;

export const Title = styled.div`

    & h2 {
        line-height: 2rem;
        font-size: 2rem;
        padding: 0;
        margin: 0;
    }
    @media (min-width: 769px) {
        & h2 {
            line-height: 3rem;
            font-size: 3rem;
        }
    }
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Menu = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (min-width: 769px) {
        padding: 0 0 0.5rem 0;
        flex-direction: column;
        align-items: center;
    }
`;

export const MenuItem = styled.li`
    font-size: 1rem;
    padding: 0.125rem;

    @media (max-width: 768px) {
        :not(:first-of-type)&:before {
            content: " | ";
          }
    }

    @media (min-width: 769px) {
        font-size: 1.5rem;
        padding: 0.25rem;
    }
`;