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
                        <li>Rua Patativa, 176 - Cidade Antônio Estêvão de Carvalho, São Paulo - SP, 08220-010</li>
                    </ul>
                </div>
                <div className="footerNavColumn">
                    <h2>Redes Sociais</h2>
                    <ul>
                        <li><a href="https://www.facebook.com/gleusaimoveis/">Facebook</a></li>
                        <li><a href="https://www.instagram.com/gleusaimoveis/">Instagram</a></li>
                    </ul>
                </div>
            </nav>
            <p>© 2021 Gleusa Imóveis - CRECI: 25395-J | CNPJ: 09.008.578/0001-69</p>
            <p>Desenvolvido por <a href="https://mkstudio.herokuapp.com/"><img alt="MK STUDIO"/></a></p>
        </footer>
    );
}