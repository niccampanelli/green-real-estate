import React, { useState, useEffect } from 'react';
import { FiMaximize2, FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaBed, FaShower, FaCarSide } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import './styles.css';
import Logo from '../../logo.jpg';
import {ReactComponent as HouseDefault} from '../../assets/houseDefault.svg';

export default function Home(){

    const history = useHistory();

    const [searchPlaceholder, setSearchPlaceholder] = useState();
    
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
                    <img onClick={() => history.push('/')} className="logoImage" src={Logo} alt="Logotipo"/>
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
        <main className="mainContent">
            <section className="infoSection">
                <div className="infoImage">
                    <div className="imagesCaroussel" id="elemCar">
                        <button onClick={e => carouselScroll(false, e.target.parentElement)} className="imagesCarousselLeftBtn"><FiChevronLeft size={"5vh"} onClick={e => carouselScroll(false, e.target.parentElement.parentElement.parentElement)}/></button>
                        <div className="imagesCarousselItems">
                            <div className="imageElement">
                                <HouseDefault className="imageElementImage"/>
                            </div>
                            <div className="imageElement">
                                <HouseDefault className="imageElementImage"/>
                            </div>
                            <div className="imageElement">
                                <HouseDefault className="imageElementImage"/>
                            </div>
                            <div className="imageElement">
                                <HouseDefault className="imageElementImage"/>
                            </div>
                            <div className="imageElement">
                                <HouseDefault className="imageElementImage"/>
                            </div>
                        </div>
                        <button onClick={e => carouselScroll(true, e.target.parentElement)} className="imagesCarousselRightBtn"><FiChevronRight size={"5vh"} onClick={e => carouselScroll(true, e.target.parentElement.parentElement.parentElement)}/></button>
                    </div>
                </div>
                <section className="infoSectionDiv">
                    <h1 className="infoName">Casa com dois quartos</h1>
                    <h2 className="infoAdress">Avenida Águia de Haia, 150, Artur Alvim, São Paulo - SP</h2>
                    <div className="infoSpecs">
                        <div className="infoSpec"><FiMaximize2 className="infoSpecIcon" size={"2.5vh"}/> 57m²</div>
                        <div className="infoSpec"><FaBed className="infoSpecIcon" size={"2.5vh"}/> 2 Quartos</div>
                        <div className="infoSpec"><FaShower className="infoSpecIcon" size={"2.5vh"}/> 1 Banheiro</div>
                        <div className="infoSpec"><FaCarSide className="infoSpecIcon" size={"2.5vh"}/> Sem Vaga</div>
                    </div>
                    <h1 className="infoType">Venda</h1>
                    <h1 className="infoPrice">R$ 250.000</h1>
                    <h1 className="infoCon">Condomínio</h1>
                    <h1 className="infoConPrice">R$ 0</h1>
                    <h1 className="infoIPTU">IPTU</h1>
                    <h1 className="infoIPTUPrice">R$ 58</h1>
                    <h1 className="infoDescTitle">Detalhes do Imóvel</h1>
                    <h2 className="infoDesc">
                        Velit pariatur exercitation aliqua mollit ut id consectetur est aute. Culpa fugiat occaecat adipisicing velit dolore deserunt elit labore consectetur culpa eu consequat commodo. In pariatur sunt qui duis quis eiusmod est anim qui magna nulla. Lorem sint nisi esse nostrud excepteur. Cupidatat qui ipsum ad Lorem sint culpa ipsum commodo in. Aliqua excepteur enim sunt occaecat elit ut occaecat sint. Consequat occaecat anim laborum occaecat ex eiusmod sunt amet culpa.

Deserunt tempor magna sunt deserunt cupidatat nulla nisi exercitation. Ad magna mollit duis laborum est esse eiusmod velit officia. Veniam quis in ea ipsum labore nostrud laboris mollit culpa esse incididunt qui non culpa. Eu qui laboris occaecat do exercitation labore in fugiat enim. Veniam incididunt veniam elit nulla.

Commodo reprehenderit sit pariatur aute enim esse ut exercitation aliquip aliqua fugiat anim adipisicing velit. Irure sint non dolor incididunt reprehenderit esse veniam quis ad ullamco eu deserunt. Quis labore Lorem elit eiusmod magna velit ea adipisicing laborum quis voluptate do. Labore nulla est ex eiusmod duis labore laborum laborum velit fugiat eu. Sint anim excepteur eu elit aute commodo non.
                    </h2>
                </section>
            </section>
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
            </section>
        </main>
        </div>
    )
}