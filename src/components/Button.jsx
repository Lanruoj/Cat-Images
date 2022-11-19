import React from "react";
import styled from "styled-components";

const StyledButton = styled.button.attrs({ type: "submit" })`
    background-color: #f4f4f4;
    border: none;
    border-radius: 0.3em;
    height: 2em;
    padding: 0 1.5rem;
    font-size: 2rem;
    font-family: "Roboto Mono", monospace;
    color: #3700ff;
`;

const FormContainer = styled.form`
    display: flex;
    justify-content: center;
`;

function Button(props) {
    return (
        <FormContainer onClick={props.onClick}>
            <StyledButton id={props.id}>{props.text}</StyledButton>
        </FormContainer>
    );
}

export { Button };
