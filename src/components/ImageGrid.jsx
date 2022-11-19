import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    max-width: 100%;
    justify-items: center;
    align-items: start;
    margin-top: 2em;
`;

const GridImage = styled.img`
    max-width: 90%;
    border-radius: 1em;
`;

const GenerateForm = styled.form`
    display: flex;
    position: relative;
    justify-content: space-around;
    align-items: center;
    margin: 1em;
    width: 90%;
    font-size: 1.5rem;
    font-family: "Roboto Mono", monospace;
`;

const Dropdown = styled.select`
    height: 2em;
    width: 3em;
    text-align: center;
    background-color: #f7f7f7;
    font-size: 2rem;
    font-family: "Roboto Mono", monospace;
    border-radius: 0.3em;
    border: none;
    color: #3700ff;
    appearance: none;
`;

function ImageGrid(props) {
    const [images, setImages] = useState(null);
    const generateImages = (e) => {
        e.preventDefault();
        props
            .fetchImages(
                `https://cataas.com/api/cats?limit=${
                    document.querySelector("#img-count").value
                }`
            )
            .then((images) => {
                shuffleArray(images);
                setImages(images);
            });
    };
    return (
        <>
            <GenerateForm>
                <label htmlFor="img-count">Number of cats:</label>
                <Dropdown name="img-count" id="img-count">
                    {[...Array(20).keys()].map((number, index) => {
                        return (
                            <option key={index} value={number}>
                                {number}
                            </option>
                        );
                    })}
                </Dropdown>
            </GenerateForm>
            <Button text="Generate" onClick={generateImages} id="generate" />
            <GridContainer id="grid-container">
                {images
                    ? images.map((image, index) => {
                          return (
                              <GridImage
                                  key={index}
                                  src={`https://cataas.com/cat/${image._id}`}
                              />
                          );
                      })
                    : null}
            </GridContainer>
        </>
    );
}

export { ImageGrid };
