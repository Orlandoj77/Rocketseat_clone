import React from "react";
import "./Style";
import { Title, Entrar, Div1, Manifesto } from "./Style";

function Header() {
    return (
        <Div1 >
            <div><Title>rocketseat</Title>
            </div>

            <Manifesto>Manifesto</Manifesto>

            <Entrar>ENTRAR</Entrar >
        </Div1>
    );
}

export default Header;