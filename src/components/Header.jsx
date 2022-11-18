import React from "react";
import styled from "styled-components";

const NavLink = styled.a`
    :visited,
    :link {
        margin: 0.5em;
        font-size: 3em;
        text-decoration: none;
        font-family: monospace;
        color: #222222;
    }
`;

const NavContainer = styled.nav`
    position: fixed;
    width: 100vw;
    height: 5em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #f4f4f4;
`;

function Header({ aboutPage, imagePage }) {
    return (
        <NavContainer>
            <NavLink href="#" onClick={aboutPage}>
                About
            </NavLink>
            <NavLink href="#">Contact</NavLink>
        </NavContainer>
    );
}

export { Header };
