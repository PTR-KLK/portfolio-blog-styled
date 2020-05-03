import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
    position: fixed;
    width: 100vw;
    top: 0;
    padding: 0.5em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
`;

export const NavImage = styled.img`
    width: 2em;
    height: 2em;
    border-radius: 50%;
    margin: 0 0 0 0.5em;
`;

export const NavTitle = styled.h2`
    margin: 0;
    font-size: 2em;
    text-align: center;
`;

export const NavMenu = styled.nav`
    display: ${props => props.isVisible ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    position: fixed;
    background-color: rgba(51, 51, 51, 0.8);
    width: 100vw;
    height: 100vh;
    z-index: -1;
`;

export const NavMenuItem = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 2em;
    padding: 0.5em 0;

    &:hover{
        color: #9D9C9C;
    }

`;

export const NavMenuBtn = styled.button`
    margin: 0 0.5em 0 0;
    background-color: #333;
    border: 0;
    padding: 0;
`;