import React, { Fragment, useEffect, useRef, useState } from "react";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Carousel from "../Components/Carousel";
import "./style.css";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export default function Home() {
    
    const history = useHistory();

    const [searchType, setSearchType] = useState(true);
    const [searchText, setSearchText] = useState("");
    
    const [immoType, setImmoType] = useState();
    const [immoPurpose, setImmoPurpose] = useState();
    const [immoAddress, setImmoAddress] = useState();
    const [immoDistrict, setImmoDistrict] = useState();
    const [immoCity, setImmoCity] = useState();
    const [immoUF, setImmoUF] = useState();
    const [immoTerrainArea, setImmoTerrainArea] = useState();
    const [immoArea, setImmoArea] = useState();
    const [immoPark, setImmoPark] = useState();
    const [immoBath, setImmoBath] = useState();
    const [immoBed, setImmoBed] = useState();
    const [immoReference, setImmoReference] = useState();

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

        history.push({ pathname: "/pesquisa", search: searchText }, {object: {
            type: immoType,
            purpose: immoPurpose,
            address: immoAddress,
            district: immoDistrict,
            city: immoCity,
            UF: immoUF,
            terrainArea: immoTerrainArea,
            immobileArea: immoArea,
            parkNumber: immoPark,
            bathNumber: immoBath,
            bedNumber: immoBed,
            reference: immoReference
        }});
    }

    return(
        <Fragment>
            <Header/>
            <main>
                <section className="landing">
                    { searchType ?
                        <Fragment>
                        <form className="landingSearch" onSubmit={e => makeSearch(e)}>
                            <input type="search" value={searchText} onChange={e => setSearchText(e.target.value)} className="searchInput" ref={searchInput}/>
                            <button type="submit" className="searchInputButton"><FaSearch size="50%"/></button>
                        </form>
                        <button className="searchSwitch" onClick={() => setSearchType(!searchType)}>Procurar por Características</button>
                        </Fragment>
                        :
                        <Fragment>
                        <button className="searchSwitchDetail" onClick={() => setSearchType(!searchType)}>Procurar por Texto</button>
                        <form className="landingSearchDetail" onSubmit={e => makeSearch(e)}>
                            <div className="landingSearchDetailRow">
                                <div className="landingSearchDetailDiv">
                                    <label className="landingSearchDetailLabel">Tipo</label>
                                    <input className="defaultInput" value={immoType} onChange={e => setImmoType(e.target.value)}/>
                                </div>
                                <div className="landingSearchDetailDiv">
                                    <label className="landingSearchDetailLabel">Propósito</label>
                                    <input className="defaultInput" value={immoPurpose} onChange={e => setImmoPurpose(e.target.value)}/>
                                </div>
                            </div>
                            <div className="landingSearchDetailRow">
                                <div className="landingSearchDetailDiv">
                                    <label className="landingSearchDetailLabel">Logradouro</label>
                                    <input className="defaultInput" value={immoAddress} onChange={e => setImmoAddress(e.target.value)}/>
                                </div>
                                <div className="landingSearchDetailDiv">
                                    <label className="landingSearchDetailLabel">Bairro</label>
                                    <input className="defaultInput" value={immoDistrict} onChange={e => setImmoDistrict(e.target.value)}/>
                                </div>
                            </div>
                            <div className="landingSearchDetailRow">
                                <div className="landingSearchDetailDiv">
                                    <label className="landingSearchDetailLabel">Cidade</label>
                                    <input className="defaultInput" value={immoCity} onChange={e => setImmoCity(e.target.value)}/>
                                </div>
                                <div className="landingSearchDetailDiv">
                                    <label className="landingSearchDetailLabel">UF</label>
                                    <input className="defaultInput" value={immoUF} onChange={e => setImmoUF(e.target.value)}/>
                                </div>
                            </div>
                            <div className="landingSearchDetailRow">
                                <div className="landingSearchDetailDiv">
                                    <label className="landingSearchDetailLabel">Área Útil</label>
                                    <input className="defaultInput" value={immoArea} onChange={e => setImmoArea(e.target.value)}/>
                                </div>
                                <div className="landingSearchDetailDiv">
                                    <label className="landingSearchDetailLabel">Quartos</label>
                                    <input className="defaultInput" value={immoBed} onChange={e => setImmoBed(e.target.value)}/>
                                </div>
                                <div className="landingSearchDetailDiv">
                                    <label className="landingSearchDetailLabel">Banheiros</label>
                                    <input className="defaultInput" value={immoBath} onChange={e => setImmoBath(e.target.value)}/>
                                </div>
                                <div className="landingSearchDetailDiv">
                                    <label className="landingSearchDetailLabel">Vagas</label>
                                    <input className="defaultInput" value={immoPark} onChange={e => setImmoPark(e.target.value)}/>
                                </div>
                            </div>
                            <div className="landingSearchDetailRow">
                                <div className="landingSearchDetailDiv">
                                    <label className="landingSearchDetailLabel">Área do Terreno</label>
                                    <input className="defaultInput" value={immoTerrainArea} onChange={e => setImmoTerrainArea(e.target.value)}/>
                                </div>
                                <div className="landingSearchDetailDiv">
                                    <label className="landingSearchDetailLabel">Referencia</label>
                                    <input className="defaultInput" value={immoReference} onChange={e => setImmoReference(e.target.value)}/>
                                </div>
                                <button type="submit" className="landingSearchDetailButton"><FaSearch size="50%"/></button>
                            </div>
                        </form>
                        </Fragment>
                    }
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