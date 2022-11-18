import React from "react";
import styled from "styled-components";

const StyledButton = styled.button.attrs({ type: "submit" })`
    background-color: #b7b7b7;
    border: none;
    border-radius: 0.3em;
    height: 2em;
    width: 6em;
    font-size: 3em;
    font-family: monospace;
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
