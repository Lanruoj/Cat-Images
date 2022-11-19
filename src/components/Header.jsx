import React from "react";
import styled from "styled-components";

const NavLink = styled.a`
    :visited,
    :link {
        margin: 0.5em;
        font-size: 2rem;
        text-decoration: none;
        font-family: "Roboto Mono", monospace;
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

function Header({ homePage, imagePage }) {
    return (
        <NavContainer>
            <NavLink href="#" onClick={homePage}>
                Home
            </NavLink>
            <NavLink href="#">
                <s>Contact</s>
            </NavLink>
        </NavContainer>
    );
}

export { Header };
