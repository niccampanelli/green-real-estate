import React from "react";
import './style.css';

export default function Header(){
    return(
            
            <header>
                <img alt="Green Real State"/>

                <nav className="navigation">
                    <ul className="navList">
                        <li className="listItem">Alugar um imóvel</li>
                        <li className="listItem">Comprar um imóvel</li>
                        <li className="listItem">Cadastrar um imóvel</li>
                        <li className="listItem">Sobre nós</li>
                    </ul>
                </nav>
            </header>

    );
}