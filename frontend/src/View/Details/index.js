import React, { Fragment } from "react";
import Footer from "../Footer";
import Header from "../Header";

export default function Details() {
    return(
        <Fragment>
            <Header/>
            <main>
                <section className="detailsMainInfo">
                    <h1>Apartamento</h1>
                </section>
            </main>
            <Footer/>
        </Fragment>
    );
}