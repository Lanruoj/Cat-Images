import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1.5em;
`;

const SectionParagraph = styled.p`
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
            <SectionHeading>{props.title}</SectionHeading>
            <SectionParagraph>{props.body}</SectionParagraph>
        </StyledSection>
    );
}

export { Section };
