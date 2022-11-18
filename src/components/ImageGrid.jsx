import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
    /* background-color: red; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    height: 100vh;
    max-width: 100%;
    justify-items: center;
    align-items: center;
`;

const GridImage = styled.img`
    max-width: 90%;
    background-color: blue;
    border-radius: 1em;
`;

function ImageGrid(props) {
    return (
        <GridContainer images={props.images}>
            {props.images.map((image, index) => {
                return <GridImage key={index} src={image} />;
            })}
        </GridContainer>
    );
}

export { ImageGrid };
