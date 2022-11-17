import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
    background-color: red;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 50px;
    height: 100vh;
    width: 100%;
`;

const GridImage = styled.img`
    width: 100px;
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
