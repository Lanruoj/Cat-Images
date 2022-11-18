import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    height: 100vh;
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
    justify-content: space-around;
    align-items: center;
    margin: 2em;
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
    const [images, setImages] = useState(null);
    const generateImages = (e) => {
        e.preventDefault();
        props
            .fetchImages(
                `https://cataas.com/api/cats?tags=cute&limit=${
                    document.querySelector("#img-count").value
                }`
            )
            .then((images) => {
                setImages(images);
            });
    };
    return (
        <>
            <GenerateForm>
                <Dropdown name="img-count" id="img-count">
                    {[...Array(20).keys()].map((number) => {
                        return <option value={number}>{number}</option>;
                    })}
                </Dropdown>
            </GenerateForm>
            <Button text="Generate" onClick={generateImages} id="generate" />
            <GridContainer images={props.images} id="grid-container">
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
