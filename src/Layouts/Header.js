import React from "react";
import styled from "styled-components";

const StyleHeader = styled.div`
background-color: navy;
padding: 20px;
text-align: center;
font-size: 25px;
color: whitesmoke;
`

export default function Header() {
    return(
        <StyleHeader>
            <h1>Quiz App</h1>
        </StyleHeader>
    )
}