import React from "react";
import "./style.css";

export default function Footer() {
    return(
        <footer>
            <nav className="footerNav">
                <div className="footerNavColumn">
                    <h2>Páginas</h2>
                    <ul>
                        <li>Início</li>
                        <li>Buscar Imóveis</li>
                        <li>Sobre Nós</li>
                    </ul>
                </div>
                <div className="footerNavColumn">
                    <h2>Endereço</h2>
                    <ul>
                        <li>Consectetur non aliquip sunt nulla officia ad sunt exercitation quis laboris dolore.</li>
                    </ul>
                </div>
                <div className="footerNavColumn">
                    <h2>Redes Sociais</h2>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                    </ul>
                </div>
            </nav>
            <p>© 2021 In adipisicing tempor nostrud occaecat ipsum commodo</p>
            <p>Desenvolvido por <a href="https://mkstudio.herokuapp.com/"><img className="mkLogo" src="https://raw.githubusercontent.com/niccampanelli/onixautosocorro/main/public/images/mk_logo1.svg?token=ALQGFQD4QIE7MIDUML5U73TBQYUGA" alt="MK STUDIO"/></a></p>
        </footer>
    );
}