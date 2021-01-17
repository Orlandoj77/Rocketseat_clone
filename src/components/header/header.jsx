import React from "react";
import "./Style";
import { Title, Entrar, Div1, Manifesto, Div2 } from "./Style";

function Header() {
    return (
        <Div1 >
            <Div2>
                <Title>rocketseat</Title>
                <Manifesto>Manifesto</Manifesto>
            </Div2>



            <Entrar>ENTRAR</Entrar >
        </Div1>
    );
}

export default Header;