import React, { useState, useEffect } from 'react';
import { FiSearch, FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import './styles.css';
import Logo from '../../logo.jpg';
import {ReactComponent as HouseDefault} from '../../assets/houseDefault.svg';
import {ReactComponent as BannerHouse} from '../../assets/bannerHouse.svg';
import {ReactComponent as SaleSignIllustration} from '../../assets/saleSignIllustration.svg';

export default function Home(){

    const history = useHistory();

    const [searchPlaceholder, setSearchPlaceholder] = useState();

    var textEffectInt = 0;
    const textEffectSpeed = 100;
    var textToDisplay = 0;
    const texts = ["Casa com dois quartos para alugar em SP", "Apartamento com suíte a venda" , "Imóvel com vaga de garagem para locação", "Apartamento mobiliado zona leste"];
    
    setTimeout( function delayEntry(){
        const placeholder = document.getElementById("searchInput"); 
        setSearchPlaceholder(placeholder)

    }, 200);
    
    const carouselScroll = (operator, elemCar) => {
        var currentScrollPos = 0;

        const anim = setInterval(function(){
            if(currentScrollPos < elemCar.offsetWidth){
                console.log(currentScrollPos + "<" + elemCar.offsetWidth);

                if(operator){
                    elemCar.scroll(elemCar.scrollLeft + 10, 0);
                    currentScrollPos += 10;
                }
                else{
                    elemCar.scroll(elemCar.scrollLeft - 10, 0);
                    currentScrollPos += 10;
                }
            }
            else{
                clearInterval(anim);
            }
        }, 10)
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
            <BannerHouse className="searchSectionHouse"/>
            <SaleSignIllustration className="searchSectionSign"/>
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
                <div className="elementsCaroussel" id="elemCar">
                    <button onClick={e => carouselScroll(false, e.target.parentElement)} className="elementsCarousselLeftBtn"><FiChevronLeft size={"5vh"} onClick={e => carouselScroll(false, e.target.parentElement.parentElement.parentElement)}/></button>
                    <div className="elementsCarousselItems">
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
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
                    <button onClick={e => carouselScroll(true, e.target.parentElement)} className="elementsCarousselRightBtn"><FiChevronRight size={"5vh"} onClick={e => carouselScroll(true, e.target.parentElement.parentElement.parentElement)}/></button>
                </div>
            </section><section className="recentElementsSection">
                <h1 className="recentElementsTitle">
                    Recomendados Para Você
                </h1>
                <div className="elementsCaroussel" id="elemCar">
                    <button onClick={e => carouselScroll(false, e.target.parentElement)} className="elementsCarousselLeftBtn"><FiChevronLeft size={"5vh"} onClick={e => carouselScroll(false, e.target.parentElement.parentElement.parentElement)}/></button>
                    <div className="elementsCarousselItems">
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
                                <div className="carousselElementImage">
                                    <HouseDefault className="carousselElementImageImg"/>
                                </div>
                                <h2 className="carousselElementTitle">Imóvel de exemplo</h2>
                                <h2 className="carousselElementDesc">Descrição do imóvel de exemplo</h2>
                                <h2 className="carousselElementPrice">R$260.000</h2>
                                <h2 className="carousselElementType">Venda</h2>
                            </div>
                        </div>
                        <div className="carousselElement">
                            <div className="carousselElementCard">
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
                    <button onClick={e => carouselScroll(true, e.target.parentElement)} className="elementsCarousselRightBtn"><FiChevronRight size={"5vh"} onClick={e => carouselScroll(true, e.target.parentElement.parentElement.parentElement)}/></button>
                </div>
            </section>
        </main>
        </div>
    )
}