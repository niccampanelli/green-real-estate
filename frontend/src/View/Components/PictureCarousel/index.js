import React, { useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import NoImageDefault from "../../../Assets/NoImageDefault.svg";
import "./style.css";

export default function PictureCarousel(props) {

    const history = useHistory();

    const elementsToDisplay = props.items;
    const pictureCarouselViewport = useRef();
    const pictureCarouselElements = useRef([]);
    var pictureCarouselPosition = 0;
    var pictureCarouselMaxScroll = 0;

    useEffect(() => {
        pictureCarouselMaxScroll = pictureCarouselViewport.current.scrollWidth - pictureCarouselViewport.current.clientWidth;
    }, [])

    function slidePictureCarousel(direction){
        if(direction){
            if(direction === "right"){
                if(pictureCarouselPosition < elementsToDisplay.length && pictureCarouselViewport.current.scrollLeft < pictureCarouselMaxScroll){
                    pictureCarouselPosition += 1;
    
                    pictureCarouselViewport.current.scrollTo({
                        top: 0, 
                        left: (pictureCarouselElements.current[pictureCarouselPosition].offsetLeft),
                        behavior: "smooth"});
                }
            } else if(direction === "left" && pictureCarouselPosition > 0){
                pictureCarouselPosition -= 1;

                pictureCarouselViewport.current.scrollTo({
                    top: 0, 
                    left: (pictureCarouselElements.current[pictureCarouselPosition].offsetLeft), 
                    behavior: "smooth"})
            }
        }
    }

    return(
        <div className="pictureCarouselWrap">
            <div className="pictureCarouselDirection">
                <button onClick={() => slidePictureCarousel("left")} className="pictureCarouselDirectionButton">
                    <FaChevronLeft size="50%"/>
                </button>
            </div>
            <div ref={pictureCarouselViewport} className="pictureCarouselViewport">
                <ul className="pictureCarouselContent">
                    { elementsToDisplay ? 
                        ( elementsToDisplay.map((elem, i) => (
                            <li key={i} ref={thisElem => pictureCarouselElements.current.push(thisElem)} onClick={() => history.push("/imovel")} className="pictureCarouselItem">
                                <img className="pictureCarouselItemImage" alt="Sem Foto" src={NoImageDefault}/>
                            </li>
                        ))) 
                        :
                        ""
                    }
                </ul>
            </div>
            <div className="pictureCarouselDirection" id="rightPictureCarouselDirection">
                <button onClick={() => slidePictureCarousel("right")} className="pictureCarouselDirectionButton">
                    <FaChevronRight size="50%"/>
                </button>
            </div>
        </div>
    );
}