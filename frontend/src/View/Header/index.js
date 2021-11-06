import React from "react";
import {useHistory} from "react-router-dom";
import './style.css';

export default function Header(){

    const history = useHistory();

    return(
            
            <header>
                <img className="logoHeader" alt="Green Real State" onClick={() => history.push('/')}/>

                <nav className="navigation">
                    <ul className="navList">
                        <li className="listItem">Alugar um imóvel</li>
                        <li className="listItem">Comprar um imóvel</li>
                        <li className="listItem">Cadastrar um imóvel</li>
                        <li className="listItem" onClick={() => history.push('/sobre')}>Sobre nós</li>
                    </ul>
                </nav>
            </header>

    );
}