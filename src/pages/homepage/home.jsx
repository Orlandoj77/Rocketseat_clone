import React from "react";

import { Titulo, DivHome, Foguet, Paragra, Image } from "./style";
import headline from "../../assets/headline.png";

function Home() {
    return (
        <div >

            <Titulo>Evolua rápido como a tecnologia.</Titulo>
            <DivHome>
                <Paragra>Junte-se a milhares de devs e acelere na direção dos seus objectivos </Paragra>
                <div>
                    <Foguet>EMBARCAR NO FOGUETE</Foguet>
                </div>
            </DivHome >

            <div>
                <Image src={headline} />
            </div>
        </div >


    );
}

export default Home;