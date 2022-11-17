import React from "react";
import styled from "styled-components";
import { ImageGrid } from "./ImageGrid";

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
`;

const SectionParagraph = styled.p`
    margin: 1em;
    font-size: 1.5em;
    font-family: "Roboto", sans-serif;
`;

const SectionHeading = styled.h2`
    font-size: 4em;
    font-family: monospace;
`;

function Section(props) {
    return (
        <StyledSection>
            {props.title ? (
                <SectionHeading>{props.title}</SectionHeading>
            ) : null}
            {props.bodyText ? (
                <SectionParagraph>{props.bodyText}</SectionParagraph>
            ) : null}
            {props.imageGrid ? (
                <ImageGrid images={props.imageGrid}></ImageGrid>
            ) : null}
        </StyledSection>
    );
}

export { Section };
