import React from "react";
import "./style.css";

export default function Home() {
    return(
        <main>
            <section className="landing">
                <form className="landingSearch">
                    <input className="searchInput"/>
                    <button type="submit" className="searchInputButton">enviar</button>
                </form>
            </section>
        </main>
    );
}