import React, { useState, useEffect } from 'react';
import { FiSearch, FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import './styles.css';
import Logo from '../../logo.jpg';
import {ReactComponent as HouseDefault} from '../../assets/houseDefault.svg';

export default function Home(){

    const history = useHistory();

    const [elemCar, setElemCar] = useState();
    const [searchPlaceholder, setSearchPlaceholder] = useState();

    var textEffectInt = 0;
    const textEffectSpeed = 100;
    var textToDisplay = 0;
    const texts = ["Casa com dois quartos para alugar em SP", "Apartamento com suíte a venda" , "Imóvel com vaga de garagem para locação", "Apartamento mobiliado zona leste"];
    
    setTimeout( function delayEntry(){ 
        const carouselElem = document.getElementById("elemCar"); 
        setElemCar(carouselElem);
        
        const placeholder = document.getElementById("searchInput"); 
        setSearchPlaceholder(placeholder)

    }, 200);
    
    const carouselScroll = (operator) => {
        operator ? (elemCar.scroll(elemCar.scrollLeft + 1012, 0)) : (elemCar.scroll(elemCar.scrollLeft - 1012, 0))
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
                    <button onClick={() => carouselScroll(false)} className="elementsCarousselLeftBtn"><FiChevronLeft size={"5vh"}/></button>
                <div className="elementsCaroussel" id="elemCar">
                    <div className="elementsCarousselItems">
                        <div className="carousselElement">
                            <div className="carousselElementImage">
                                <HouseDefault className="carousselElementImageImg"/>
                            </div>
                            <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                            <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                            <h2 className="carousselElementPrice">R$260.000</h2>
                            <h2 className="carousselElementType">Venda</h2>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementImage">
                                <HouseDefault className="carousselElementImageImg"/>
                            </div>
                            <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                            <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                            <h2 className="carousselElementPrice">R$260.000</h2>
                            <h2 className="carousselElementType">Venda</h2>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementImage">
                                <HouseDefault className="carousselElementImageImg"/>
                            </div>
                            <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                            <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                            <h2 className="carousselElementPrice">R$260.000</h2>
                            <h2 className="carousselElementType">Venda</h2>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementImage">
                                <HouseDefault className="carousselElementImageImg"/>
                            </div>
                            <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                            <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                            <h2 className="carousselElementPrice">R$260.000</h2>
                            <h2 className="carousselElementType">Venda</h2>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementImage">
                                <HouseDefault className="carousselElementImageImg"/>
                            </div>
                            <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                            <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                            <h2 className="carousselElementPrice">R$260.000</h2>
                            <h2 className="carousselElementType">Venda</h2>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementImage">
                                <HouseDefault className="carousselElementImageImg"/>
                            </div>
                            <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                            <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                            <h2 className="carousselElementPrice">R$260.000</h2>
                            <h2 className="carousselElementType">Venda</h2>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementImage">
                                <HouseDefault className="carousselElementImageImg"/>
                            </div>
                            <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                            <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                            <h2 className="carousselElementPrice">R$260.000</h2>
                            <h2 className="carousselElementType">Venda</h2>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementImage">
                                <HouseDefault className="carousselElementImageImg"/>
                            </div>
                            <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                            <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                            <h2 className="carousselElementPrice">R$260.000</h2>
                            <h2 className="carousselElementType">Venda</h2>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementImage">
                                <HouseDefault className="carousselElementImageImg"/>
                            </div>
                            <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                            <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                            <h2 className="carousselElementPrice">R$260.000</h2>
                            <h2 className="carousselElementType">Venda</h2>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementImage">
                                <HouseDefault className="carousselElementImageImg"/>
                            </div>
                            <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                            <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                            <h2 className="carousselElementPrice">R$260.000</h2>
                            <h2 className="carousselElementType">Venda</h2>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementImage">
                                <HouseDefault className="carousselElementImageImg"/>
                            </div>
                            <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                            <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                            <h2 className="carousselElementPrice">R$260.000</h2>
                            <h2 className="carousselElementType">Venda</h2>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementImage">
                                <HouseDefault className="carousselElementImageImg"/>
                            </div>
                            <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                            <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                            <h2 className="carousselElementPrice">R$260.000</h2>
                            <h2 className="carousselElementType">Venda</h2>
                        </div>
                    </div>
                </div>
                    <button onClick={() => carouselScroll(true)} className="elementsCarousselRightBtn"><FiChevronRight size={"5vh"}/></button>
            </section>
        </main>
        </div>
    )
}