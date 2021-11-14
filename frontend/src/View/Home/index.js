import React, { Fragment, useEffect, useRef, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Carousel from "../Components/Carousel";
import {  } from "react-icons/"
import "./style.css";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export default function Home() {
    
    const history = useHistory();

    const [searchText, setSearchText] = useState("");
    const searchInput = useRef();
    var typewriterIndex = 0;
    var textListIndex = 0;
    const typewriterSpeed = 100;
    const textList = ["Casa com dois quartos para alugar em SP", "Apartamento com suíte a venda" , "Imóvel com vaga de garagem para locação", "Apartamento mobiliado zona leste"];

    const dummyData = [
        {
            reference: 1052,
            district: "Artur Alvim",
            type: "Casa",
            purpose: "Venda",
            totalPrice: 25000000
        },
        {
            reference: 1053,
            district: "Vila Ré",
            type: "Apartamento",
            purpose: "Venda",
            totalPrice: 28000000
        },
        {
            reference: 1054,
            district: "Vila Guilhermina",
            type: "Apartamento",
            purpose: "Aluguel",
            totalPrice: 150000
        },
        {
            reference: 1055,
            district: "Patriarca",
            type: "Casa",
            purpose: "Venda",
            totalPrice: 23600000
        },
        {
            reference: 1056,
            district: "Artur Alvim",
            type: "Casa",
            purpose: "Venda",
            totalPrice: 19000000
        },
        {
            reference: 1057,
            district: "Penha",
            type: "Apartamento",
            purpose: "Aluguel",
            totalPrice: 195000
        },
        {
            reference: 1058,
            district: "Cangaíba",
            type: "Apartamento",
            purpose: "Venda",
            totalPrice: 22000000
        },
        {
            reference: 1059,
            district: "Tatuapé",
            type: "Apartamento",
            purpose: "Venda",
            totalPrice: 34500000
        },
        {
            reference: 1060,
            district: "Vila Matilde",
            type: "Apartamento",
            purpose: "Aluguel",
            totalPrice: 200000
        },
        {
            reference: 1061,
            district: "Patriarca",
            type: "Casa",
            purpose: "Venda",
            totalPrice: 25000000
        }
    ]

    useEffect(() => {
        typewriter();
    }, [searchInput]);

    function typewriter(){
        if(searchInput){
            if(typewriterIndex === textList[textListIndex].length){
                typewriterIndex = 0;
                searchInput.current.placeholder = "";
                if(textListIndex < textList.length - 1){
                    textListIndex ++;
                }
                else{
                    textListIndex = 0;
                }
            }
            if(typewriterIndex < textList[textListIndex].length){
                searchInput.current.placeholder += textList[textListIndex].charAt(typewriterIndex);
                typewriterIndex ++;
                setTimeout(typewriter, typewriterSpeed);
            }
        }
    }

    function makeSearch(e){
        e.preventDefault();

        history.push({ pathname: "/pesquisa", search: searchText });
    }

    return(
        <Fragment>
            <Header/>
            <main>
                <section className="landing">
                    <form className="landingSearch" onSubmit={e => makeSearch(e)}>
                        <input type="search" value={searchText} onChange={e => setSearchText(e.target.value)} className="searchInput" ref={searchInput}/>
                        <button type="submit" className="searchInputButton"><FaSearch size="50%"/></button>
                    </form>
                    <button className="searchSwitch">Procurar por Características</button>
                </section>
                <section className="listing">
                    <section className="listingSection">
                        <h2 className="listingSectionTitle">Recentes</h2>
                        <Carousel items={dummyData}/>
                    </section>
                </section>
            </main>
            <Footer/>
        </Fragment>
    );
}