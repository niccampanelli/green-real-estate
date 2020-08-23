import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import './styles.css';
import Logo from '../../logo.jpg';

export default function Home(){

    const history = useHistory();
    
    var textEffectInt = 0;
    const textEffectSpeed = 100;
    var textToDisplay = 0;
    const texts = ["Casa com dois quartos para alugar em SP","Apartamento com suíte a venda" , "Imóvel com vaga de garagem para locação", "Apartamento mobiliado zona leste"];
    
    setTimeout(function typeWriter(){

        const searchPlaceholder = document.getElementById("searchInput"); 

        if(searchPlaceholder){
            if(textEffectInt === texts[textToDisplay].length){
                textEffectInt = 0
                searchPlaceholder.placeholder = "";
                if(textToDisplay < texts.length - 1){
                    textToDisplay ++;
                }
                else{
                    textToDisplay = 0;
                }
            }
            if(textEffectInt < texts[textToDisplay].length){
                searchPlaceholder.placeholder += texts[textToDisplay].charAt(textEffectInt);
                textEffectInt += 1;
                setTimeout(typeWriter, textEffectSpeed);
            }
        }

    }, 1000);

    return(
        <div>
        <header>
            <section className="logoSection">
                <div className="logoDiv">
                    <img className="logoImage" src={Logo} alt="Logotipo"/>
                </div>
            </section>
            <nav className="navigationDiv">
                <button className="simpleButton" id="navigationButton">Comprar</button>
                <button className="simpleButton" id="navigationButton">Alugar</button>
                <button className="simpleButton" id="navigationButton">Anunciar</button>
            </nav>
            <section className="userLogSection">
                <button onClick={() => history.push('/login', {isNewUser: false})} className="simpleButton" id="userLogin">Entrar</button>
                <button onClick={() => history.push('/login', {isNewUser: true})} className="simpleButton" id="userSign">Cadastrar</button>
            </section>
        </header>
        <section className="searchSection">
            <div className="searchDiv">
                <input className="searchInput" id="searchInput" placeholder=""/>
                <button className="searchButton"><FiSearch/></button>
            </div>
        </section>
        <main className="mainContent">
            <section className="recentElementsSection">
                <h1 className="recentElementsTitle">
                    Recém adicionados
                </h1>
                    <button className="recentElementsCarousselLeftBtn">L</button>
                <div className="recentElementsCaroussel">
                    <div className="recentElementsCarousselItems">
                    <div className="recentElement">
                        
                    </div>
                    <div className="recentElement">
                        
                    </div>
                    <div className="recentElement">
                        
                    </div>
                    <div className="recentElement">
                        
                    </div>
                    <div className="recentElement">
                        
                    </div>
                    <div className="recentElement">
                        
                    </div>
                    <div className="recentElement">
                        
                    </div>
                    <div className="recentElement">
                        
                    </div>
                    <div className="recentElement">
                        
                    </div>
                    <div className="recentElement">
                        
                    </div>
                    <div className="recentElement">
                        
                    </div>
                    <div className="recentElement">
                        
                    </div>
                    </div>
                </div>
                    <button className="recentElementsCarousselRightBtn">R</button>
            </section>
        </main>
        </div>
    )
}