import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

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
    /* background-color: blue; */
    border-radius: 1em;
`;

const GenerateForm = styled.form`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2em;
    /* background-color: red; */
    width: 100%;
`;

const Dropdown = styled.select`
    height: 2em;
    width: 3em;
    background-color: #f7f7f7;
    font-size: 3em;
    font-family: monospace;
    border-radius: 0.3em;
    border: none;
`;

function ImageGrid(props) {
    const generateImages = (e) => {
        props.fetchImages();
    };
    return (
        <>
            <GenerateForm>
                <Dropdown name="img-count">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </Dropdown>
            </GenerateForm>
            <Button text="Generate" onClick={generateImages} />
            <GridContainer images={props.images}>
                {props.images.map((image, index) => {
                    return <GridImage key={index} src={image} />;
                })}
            </GridContainer>
        </>
    );
}

export { ImageGrid };
