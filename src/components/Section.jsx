import React from "react";
import styled from "styled-components";
import { ImageGrid } from "./ImageGrid";

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    padding-top: 5em;
`;

const SectionParagraph = styled.p`
    margin: 1em;
    font-size: 1.5em;
    font-family: "Roboto Mono", monospace;
    text-align: center;
`;

const SectionHeading = styled.h2`
    margin: 1rem;
    font-size: 2.5rem;
    font-family: "Roboto Mono", monospace;
`;

function Section(props) {
    return (
        <StyledSection>
            <SectionHeading>{props.title}</SectionHeading>
            {props.bodyText ? (
                <SectionParagraph>{props.bodyText}</SectionParagraph>
            ) : null}
            {props.imageGrid ? (
                <ImageGrid fetchImages={props.fetchImages}></ImageGrid>
            ) : null}
        </StyledSection>
    );
}

export { Section };
