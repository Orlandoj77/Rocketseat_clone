import React from "react";
import "./Style";
import { Entrar, Div1, Manifesto, Div2, Image } from "./Style";
import logo from "../../assets/logo.png";

function Header() {
    return (
        <Div1 >
            <Div2>
                <Image src={logo} />
                <Manifesto>Manifesto</Manifesto>
            </Div2>
            <Entrar>ENTRAR</Entrar >
        </Div1>
    );
}

export default Header;