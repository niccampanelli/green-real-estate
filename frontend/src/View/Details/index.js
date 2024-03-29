import React, { Fragment, useEffect, useState } from "react";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import "./style.css";
import PictureCarousel from "../Components/PictureCarousel";
import { FaBath, FaBed, FaCarSide, FaExpand, FaTag } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import API from "../../Services/API";

export default function Details() {
    window.scrollTo(0, 0);

    const [imageList, setImageList] = useState();

    const location = useLocation();
    const {
        id, 
        purpose, 
        address,
        number, 
        complement, 
        cep,           
        district, 
        city, 
        uf,      
        type, 
        terrainArea, 
        immobileArea, 
        parkNumber, 
        bathNumber, 
        bedNumber,    
        price, 
        description, 
        reference, 
        dateSubscript, 
        status
    } = location.state;

    useEffect(async () => {
        await API.get('/image', { params: { id: id } }).then(result => {
            setImageList(result.data);
        })
    }, [])

    return(
        <Fragment>
            <Header/>
            <main className="detailsMain">
                <PictureCarousel items={imageList}/>
                <section className="detailsMainInfo">
                    <div className="detailsMainInfoLeft">
                        <h1 className="detailsMainInfoLeftTitle">{type} em {district}</h1>
                        <h2 className="detailsMainInfoLeftSubtitle">{address}, {number} - {city}, {uf}</h2>
                        <ul className="detailsMainInfoSpecList">
                            <li className="detailsMainInfoSpec"><FaExpand size="18px"/> {immobileArea} m²</li>
                            { typeof bedNumber === "number" ? 
                                <li className="detailsMainInfoSpec"><FaBed size="18px"/> {bedNumber} {(bedNumber === 0 || bedNumber === 1) ? "Dormitório" : "Dormitórios" }</li>
                            : "" }
                            { typeof bathNumber === "number" ? 
                                <li className="detailsMainInfoSpec"><FaBath size="18px"/> {bathNumber} {(bathNumber === 0 || bathNumber === 1) ? "Banheiro" : "Banheiros" }</li>
                            : "" }
                            { typeof parkNumber === "number" ?
                                <li className="detailsMainInfoSpec"><FaCarSide size="18px"/>{(parkNumber === 0) ? "Sem vaga" : ((parkNumber === 1) ? "1 Vaga" : parkNumber + " Vagas")}</li>
                            : "" }
                        </ul>
                        <h2 className="detailsMainInfoLeftTitle">Detalhes sobre o imóvel</h2>
                        <p className="detailsMainInfoLeftDesc">{description}</p>
                    </div>
                    <div className="detailsMainInfoRight">
                        <div className="detailsMainInfoRightCard">
                            <h2 className="detailsInfoRightTitle">R$ {price/100} <FaTag size="16px"/></h2>
                            <h3 className="detailsInfoRightSubtitle">{purpose}</h3>
                            <p className="detailsInfoRightAdditional">Condomínio</p>
                            <p className="detailsInfoRightAdditional">R$ 200,00</p>
                            <p className="detailsInfoRightAdditional">IPTU</p>
                            <p className="detailsInfoRightAdditional">R$ 530,00</p>
                            <p className="detailsInfoRightSubtle">Referência: {id}</p>
                        </div>
                        <div className="detailsMainInfoRightCard">
                            <h2 className="detailsInfoRightTitle">Obter mais informações</h2>
                            <form className="detailsInfoRightForm">
                                <label>Nome</label>
                                <input type="text" className="defaultInput" placeholder="Digite nome e sobrenome"/>
                                <label>Email</label>
                                <input type="text" className="defaultInput" placeholder="exemplo@email.com"/>
                                <label>Telefone</label>
                                <input type="text" className="defaultInput" placeholder="(DDD) 00000-0000"/>
                                <button className="detailsInfoRightFormSubmit">Enviar</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </Fragment>
    );
}