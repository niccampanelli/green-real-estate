import React from "react";
import "./style.css";

export default function Carousel(props) {
    return(
        <div className="carouselWrap">
            <div className="carouselDirection">
                <button className="carouselDirectionButton">A</button>
            </div>
            <div className="carouselViewport">
                <ul className="carouselContent">
                    <li className="carouselItem">
                        <span>Imóvel para alugar</span>
                    </li>
                    <li className="carouselItem">
                        <span>Imóvel para alugar</span>
                    </li>
                    <li className="carouselItem">
                        <span>Imóvel para alugar</span>
                    </li>
                    <li className="carouselItem">
                        <span>Imóvel para alugar</span>
                    </li>
                    <li className="carouselItem">
                        <span>Imóvel para alugar</span>
                    </li>
                </ul>
            </div>
            <div className="carouselDirection">
                <button className="carouselDirectionButton">B</button>
            </div>
        </div>
    );
}