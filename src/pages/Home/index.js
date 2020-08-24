import React, { useState, useEffect } from 'react';
import { FiSearch, FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import './styles.css';
import Logo from '../../logo.jpg';

export default function Home(){

    const history = useHistory();

    const [recentElemCar, setRecentElemCar] = useState();
    const [searchPlaceholder, setSearchPlaceholder] = useState();

    var textEffectInt = 0;
    const textEffectSpeed = 100;
    var textToDisplay = 0;
    const texts = ["Casa com dois quartos para alugar em SP", "Apartamento com suíte a venda" , "Imóvel com vaga de garagem para locação", "Apartamento mobiliado zona leste"];
    
    setTimeout( function delayEntry(){ 
        const carouselElem = document.getElementById("recentElemCar"); 
        setRecentElemCar(carouselElem);
        
        const placeholder = document.getElementById("searchInput"); 
        setSearchPlaceholder(placeholder)

    }, 1200);
    
    const carouselScroll = (operator) => {
        operator ? (recentElemCar.scroll(recentElemCar.scrollLeft + 810, 0)) : (recentElemCar.scroll(recentElemCar.scrollLeft - 810, 0))
    }
    
    useEffect(() => {
        typeWriter();
    }, searchPlaceholder);

    function typeWriter(){

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
    }

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
                <button className="searchButton"><FiSearch size={"4vh"}/></button>
            </div>
        </section>
        <main className="mainContent">
            <section className="recentElementsSection">
                <h1 className="recentElementsTitle">
                    Recém adicionados
                </h1>
                    <button onClick={() => carouselScroll(false)} className="recentElementsCarousselLeftBtn"><FiChevronLeft size={"5vh"}/></button>
                <div className="recentElementsCaroussel" id="recentElemCar">
                    <div className="recentElementsCarousselItems">
                    <div className="recentElement">
                        1
                    </div>
                    <div className="recentElement">
                        2
                    </div>
                    <div className="recentElement">
                        3
                    </div>
                    <div className="recentElement">
                        4
                    </div>
                    <div className="recentElement">
                        5
                    </div>
                    <div className="recentElement">
                        6
                    </div>
                    <div className="recentElement">
                        7
                    </div>
                    <div className="recentElement">
                        8
                    </div>
                    <div className="recentElement">
                        9
                    </div>
                    <div className="recentElement">
                        10
                    </div>
                    <div className="recentElement">
                        11
                    </div>
                    <div className="recentElement">
                        12
                    </div>
                    </div>
                </div>
                    <button onClick={() => carouselScroll(true)} className="recentElementsCarousselRightBtn"><FiChevronRight size={"5vh"}/></button>
            </section>
        </main>
        </div>
    )
}