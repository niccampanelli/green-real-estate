import React, { Fragment } from "react";
import Footer from "../Footer";
import Header from "../Header";
import NoImageDefault from "../../Assets/NoImageDefault.svg";
import "./style.css";

export default function Details() {
    return(
        <Fragment>
            <Header/>
            <main>
                <img src={NoImageDefault} alt="Imagem do Imóvel"/>
                <section className="detailsMainInfo">
                    <h1>Apartamento</h1>
                </section>
            </main>
            <Footer/>
        </Fragment>
    );
}