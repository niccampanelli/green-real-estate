import React from "react";
import {useHistory} from "react-router-dom";
import './style.css';

export default function Header(){

    const history = useHistory();

    return(
            
            <header>
                <img className="logoHeader" alt="Green Real State" onClick={() => history.push('/')}/>

                <nav className="navigation">
                    <div className="headerInputContainer">
                        <input type='text' className="headerInput" placeholder="Pesquisar"/>
                    </div>

                    <ul className="navList">
                        <li className="listItem" onClick={() => history.push({pathname:"/redirect"}, {path: '/pesquisa', object: {purpose: "alugar"}})}>Alugar um imóvel</li>
                        <li className="listItem" onClick={() => history.push({pathname:"/redirect"}, {path: '/pesquisa', object: {purpose: "comprar"}})}>Comprar um imóvel</li>
                        <li className="listItem" onClick={() => history.push('/registro')}>Cadastrar um imóvel</li>
                        <li className="listItem" onClick={() => history.push('/sobre')}>Sobre nós</li>
                    </ul>
                </nav>
            </header>

    );
}