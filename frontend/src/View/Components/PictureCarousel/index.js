import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import NoImageDefault from "../../../Assets/NoImageDefault.svg";
import path from "path";
import "./style.css";

export default function PictureCarousel(props) {

    const [isFullscreenEnabled, setFullscreenEnabled] = useState(false);

    const elementsToDisplay = (props.items !== undefined) ? props.items : [];

    const pictureCarouselViewport = useRef();
    const pictureCarouselElements = useRef([]);
    const [pictureCarouselMaxScroll, setPictureCarouselMaxScroll] = useState();
    var pictureCarouselPosition = 0;

    const fsPictureCarouselViewport = useRef();
    const fsPictureCarouselElements = useRef([]);
    var fsPictureCarouselPosition = 0;
    var fsPictureCarouselMaxScroll = 0;

    const fsPictureCarouselCounter = useRef();

    useEffect(() => {
        console.log(elementsToDisplay);
    }, [elementsToDisplay])

    useEffect(() => {
        setPictureCarouselMaxScroll(pictureCarouselViewport.current.scrollWidth);
    }, [])

    useEffect(() => {
        if(fsPictureCarouselCounter.current){
            fsPictureCarouselCounter.current.innerText = fsPictureCarouselPosition + " de " + (fsPictureCarouselElements.current.length -1);
        }
    }, [fsPictureCarouselElements.current.length])

    function slidePictureCarousel(direction){
        console.log(direction);
        if(direction){
            if(direction === "right"){
                console.log(pictureCarouselPosition);
                if(pictureCarouselPosition < elementsToDisplay.length -1 && pictureCarouselViewport.current.scrollLeft < pictureCarouselMaxScroll){

                    pictureCarouselPosition ++;

                    pictureCarouselViewport.current.scrollTo({
                        top: 0, 
                        left: (pictureCarouselElements.current[pictureCarouselPosition].offsetLeft),
                        behavior: "smooth"
                    });
                }
            } else if(direction === "left" && pictureCarouselPosition > 0){

                pictureCarouselPosition --;

                pictureCarouselViewport.current.scrollTo({
                    top: 0, 
                    left: (pictureCarouselElements.current[pictureCarouselPosition].offsetLeft), 
                    behavior: "smooth"
                })
            }
        }
    }

    function slideFSPictureCarousel(direction){
        if(direction){
            if(direction === "right"){
                if(fsPictureCarouselPosition < elementsToDisplay.length -1){
                    
                    fsPictureCarouselPosition ++;

                    fsPictureCarouselElements.current[fsPictureCarouselPosition - 1].style.filter = "brightness(100%)";
                    fsPictureCarouselElements.current[fsPictureCarouselPosition].style.filter = "brightness(120%)";

                    if(fsPictureCarouselViewport.current.scrollLeft < fsPictureCarouselMaxScroll){
                        fsPictureCarouselViewport.current.scrollTo({
                            top: 0, 
                            left: (fsPictureCarouselElements.current[fsPictureCarouselPosition].offsetLeft),
                            behavior: "smooth"
                        });
                    }
                }
            } else if(direction === "left" && fsPictureCarouselPosition > 0){

                fsPictureCarouselPosition --;

                fsPictureCarouselViewport.current.scrollTo({
                    top: 0, 
                    left: (fsPictureCarouselElements.current[fsPictureCarouselPosition].offsetLeft), 
                    behavior: "smooth"
                })

                fsPictureCarouselElements.current[fsPictureCarouselPosition + 1].style.filter = "brightness(100%)";
                fsPictureCarouselElements.current[fsPictureCarouselPosition].style.filter = "brightness(120%)";
            }

            fsPictureCarouselCounter.current.innerText = fsPictureCarouselPosition + " de " + (fsPictureCarouselElements.current.length -1);
        }
    }

    const FullscreenPictures = () => {

        useEffect(() => {
            fsPictureCarouselMaxScroll = fsPictureCarouselViewport.current.scrollWidth - fsPictureCarouselViewport.current.clientWidth;
        }, []);

        return(
            <div className="fsPictureWrap">
                <button onClick={() => setFullscreenEnabled(false)} className="fsPictureClose"><FaTimes size="60%"/></button>
                <div className="fsPicturePreview">
                    <div className="fsPictureCarouselDirection" id="leftfsPictureCarouselDirection">
                        <button onClick={() => slideFSPictureCarousel("left")} className="fsPictureCarouselDirectionButton">
                            <FaChevronLeft size="50%"/>
                        </button>
                    </div>
                    <img className="fsPicturePreviewImage" alt="Imagem do imovel" src={NoImageDefault}/>
                    <div className="fsPictureCarouselDirection" id="rightfsPictureCarouselDirection">
                        <button onClick={() => slideFSPictureCarousel("right")} className="fsPictureCarouselDirectionButton">
                            <FaChevronRight size="50%"/>
                        </button>
                    </div>
                </div>
                <div className="fsPictureCarouselWrap">
                    <div ref={fsPictureCarouselViewport} className="fsPictureCarouselViewport">
                        <div className="fsPictureCarouselCounter" ref={fsPictureCarouselCounter}>0 de 0</div>
                        <ul className="fsPictureCarouselContent">
                            { elementsToDisplay ? 
                                ( elementsToDisplay.map((elem, i) => (
                                    <li key={i} ref={thisElem => fsPictureCarouselElements.current[i] = thisElem} onClick={() => {}} className="fsPictureCarouselItem">
                                        <img className="fsPictureCarouselItemImage" alt="Imagem do Imovel" src={elem}/>
                                    </li>
                                ))) 
                                :
                                ""
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
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
                            <li key={i} ref={thisElem => pictureCarouselElements.current[i] = thisElem} onClick={() => setFullscreenEnabled(true)} className="pictureCarouselItem">
                                <img className="pictureCarouselItemImage" alt="Sem Foto" src={'http://' + path.normalize('localhost:3333/' + elem.link.replace(/\\/g, '/'))}/>
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
            { isFullscreenEnabled ? <FullscreenPictures/> : '' }
        </div>
    );
}