import React, { useEffect, useRef } from "react";
import { FaBath, FaBed, FaCarSide, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import NoImageDefault from "../../../Assets/NoImageDefault.svg";
import "./style.css";

export default function Carousel(props) {

    const history = useHistory();

    const elementsToDisplay = props.items;
    const carouselViewport = useRef();
    const carouselElements = useRef([]);
    var carouselPosition = 0;
    var carouselMaxScroll = 0;

    useEffect(() => {
        carouselMaxScroll = carouselViewport.current.scrollWidth - carouselViewport.current.clientWidth;
    }, [])

    function slideCarousel(direction){
        if(direction){
            if(direction === "right"){
                if(carouselPosition < elementsToDisplay.length && carouselViewport.current.scrollLeft < carouselMaxScroll){
                    carouselPosition += 1;
    
                    carouselViewport.current.scrollTo({
                        top: 0, 
                        left: (carouselElements.current[carouselPosition].offsetLeft) - 90,
                        behavior: "smooth"});
                }
            } else if(direction === "left" && carouselPosition > 0){
                carouselPosition -= 1;

                carouselViewport.current.scrollTo({
                    top: 0, 
                    left: (carouselElements.current[carouselPosition].offsetLeft) - 90, 
                    behavior: "smooth"})
            }
        }
    }

    return(
        <div className="carouselWrap">
            <div className="carouselDirection">
                <button onClick={() => slideCarousel("left")} className="carouselDirectionButton">
                    <FaChevronLeft size="50%"/>
                </button>
            </div>
            <div ref={carouselViewport} className="carouselViewport">
                <ul className="carouselContent">
                    { elementsToDisplay ? 
                        ( elementsToDisplay.map((elem, i) => (
                            <li key={i} ref={thisElem => carouselElements.current.push(thisElem)} onClick={() => history.push("/imovel")} className="carouselItem">
                                <img className="carouselItemImage" alt="Sem Foto" src={NoImageDefault}/>
                                <h3 className="carouselItemTitle">{elem.district}</h3>
                                <span className="carouselItemSubtitle">{elem.type} - {elem.purpose}</span>
                                <h4 className="carouselItemPrice">R$ {elem.totalPrice/100}</h4>
                                <ul className="carouselItemSpecList">
                                    <li className="carouselItemSpec">50 m²</li>
                                    <li className="carouselItemSpec"><FaBed size="18px"/> 2</li>
                                    <li className="carouselItemSpec"><FaBath size="18px"/> 1</li>
                                    <li className="carouselItemSpec"><FaCarSide size="18px"/> 1</li>
                                </ul>
                                <span className="carouselItemDetail">Clique para Detalhes</span>
                            </li>
                        ))) 
                        :
                        ""
                    }
                </ul>
            </div>
            <div className="carouselDirection">
                <button onClick={() => slideCarousel("right")} className="carouselDirectionButton">
                    <FaChevronRight size="50%"/>
                </button>
            </div>
        </div>
    );
}