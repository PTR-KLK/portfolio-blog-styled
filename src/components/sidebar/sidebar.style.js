import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Navigation = styled.nav`
    color: white;
    background-color: #333;
    position: fixed;
    flex-direction: column;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0.5rem 0;
    

    @media (min-width: 426px) {
        flex-direction: row;
        height: 5rem;
    }

    @media (min-width: 769px) {
        flex-direction: column;
        padding: 0;
        justify-content: center;
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

export const Image = styled.img`
    width: 4rem;
    height: auto;
    border-radius: 50%;
    margin: auto 0.5rem auto;

    @media (min-width: 426px) {
        width: auto;
        height: 90%;
    }

    @media (min-width: 769px) {
        margin: 1rem 0;
        width: 50%;
        height: auto;
    }
`;

export const Title = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
    flex-direction: row;
    width: 100%;
    justify-content: center;

    @media (min-width: 426px) {
        width: 35%;
        justify-content: flex-start;
    }

    @media (min-width: 769px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`;

export const Menu = styled.ul`
    width: 100%;
    list-style: none;
    padding: 0 0.5rem 0 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (min-width: 426px) {
        width: 65%;
        justify-content: flex-end;
    }

    @media (min-width: 769px) {
        width: 100%;
        padding: 0 0 0.5rem 0;
        flex-direction: column;
        align-items: center;
    }
`;

export const MenuItem = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.25rem;
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

export const SidebarFooter = styled.footer`
    display: none;
    margin: 1rem;

    @media (min-width: 769px) {
        display: block;
    }

`;