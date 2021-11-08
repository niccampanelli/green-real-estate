import React, { Fragment } from "react";
import Footer from "../Footer";
import Header from "../Header";
import NoImageDefault from "../../Assets/NoImageDefault.svg";
import "./style.css";
import PictureCarousel from "../Components/PictureCarousel";

export default function Details() {
    return(
        <Fragment>
            <Header/>
            <main className="detailsMain">
                <PictureCarousel items={["1", "1", "1", "1", "1", "1", "1", "1"]}/>
                <section className="detailsMainInfo">
                    <h1>Apartamento</h1>
                </section>
            </main>
            <Footer/>
        </Fragment>
    );
}