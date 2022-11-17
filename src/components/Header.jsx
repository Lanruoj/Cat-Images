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
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

function Header(props) {
    return (
        <NavContainer>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contact</NavLink>
        </NavContainer>
    );
}

export { Header };