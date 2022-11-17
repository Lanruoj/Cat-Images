import React from "react";
import styled from "styled-components";

const NavLink = styled.a`
    color: red;
    :visited {
        color: red;
    }
`;

function Header(props) {
    return (
        <nav>
            <NavLink>Menu</NavLink>
        </nav>
    );
}

export { Header };
