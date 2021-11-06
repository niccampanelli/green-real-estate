import React from "react";
import "./style.css";

export default function Carousel() {
    return(
        <div className="carouselWrap">
            <button className="carouselDirection">A</button>
            <div className="carouselViewport">
                <div className="carouselContent">

                </div>
            </div>
            <button className="carouselDirection">B</button>
        </div>
    );
}