import React from "react";
import styled from "styled-components";

const StyleFooter = styled.div`
text-align: center;
color: white;
background-color: purple;
padding: 10px;
box-sizing: border-box;
`

export default function Footer() {
    return(
        <StyleFooter>
            <h2>Ayush Das</h2>
            <h2>OnGraph</h2>
        </StyleFooter>
    )
}