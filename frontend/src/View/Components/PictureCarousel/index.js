import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import NoImageDefault from "../../../Assets/NoImageDefault.svg";
import path from "path";
import "./style.css";

export default function PictureCarousel(props) {

    const [isFullscreenEnabled, setFullscreenEnabled] = useState(false);

    const elementsToDisplay = (props.items !== undefined) ? props.items : [];

    const pictureCarouselViewport = useRef();
    const pictureCarouselElements = useRef([]);
    const [pictureCarouselMaxScroll, setPictureCarouselMaxScroll] = useState(0);
    var pictureCarouselPosition = 0;

    const fsPictureCarouselMainImg = useRef();
    const [isFSPicturePreviewZoomed, setFSPicturePreviewZoomed] = useState(false);

    const fsPictureCarouselViewport = useRef();
    const fsPictureCarouselElements = useRef([]);
    const [fsPictureCarouselPosition, setFsPictureCarouselPosition] = useState(-1);
    var fsPictureCarouselMaxScroll = 0;
    const [fsPictureCarouselSelections, setFsPictureCarouselSelections] = useState([]);

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

        if(direction){
            if(direction === "right"){
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

    useEffect(() => {
        console.log(fsPictureCarouselPosition);

        if(fsPictureCarouselElements.current && fsPictureCarouselElements.current.length > 0 && fsPictureCarouselPosition !== undefined){

            if(fsPictureCarouselSelections && fsPictureCarouselSelections.length === 0){
                fsPictureCarouselSelections.unshift(fsPictureCarouselPosition);
                fsPictureCarouselElements.current[fsPictureCarouselPosition].style.filter = "sepia(1) hue-rotate(100deg)";
            }
            else if(fsPictureCarouselSelections && fsPictureCarouselSelections.length === 1){
                fsPictureCarouselSelections.unshift(fsPictureCarouselPosition);
                fsPictureCarouselElements.current[fsPictureCarouselSelections[1]].style.filter = "brightness(100%)";
                fsPictureCarouselElements.current[fsPictureCarouselSelections[0]].style.filter = "sepia(1) hue-rotate(100deg)";
            }
            else if(fsPictureCarouselSelections && fsPictureCarouselSelections.length === 2){
                fsPictureCarouselSelections.pop();
                fsPictureCarouselSelections.unshift(fsPictureCarouselPosition);
                fsPictureCarouselElements.current[fsPictureCarouselSelections[1]].style.filter = "brightness(100%)";
                fsPictureCarouselElements.current[fsPictureCarouselSelections[0]].style.filter = "sepia(1) hue-rotate(100deg)";
            }

            fsPictureCarouselViewport.current.scrollTo({
                top: 0, 
                left: (fsPictureCarouselElements.current[fsPictureCarouselPosition].offsetLeft),
                behavior: "smooth"
            });

            fsPictureCarouselMainImg.current.src = 'http://' + path.normalize(process.env.REACT_APP_API_URI + elementsToDisplay[fsPictureCarouselPosition].link.replace(/\\/g, '/'));

            fsPictureCarouselCounter.current.innerText = fsPictureCarouselPosition+1 + " de " + fsPictureCarouselElements.current.length;
        }
    }, [fsPictureCarouselPosition]);

    function slideFSPictureCarousel(direction){
        if(direction){
            if(direction === "right"){
                console.log(fsPictureCarouselMaxScroll);
                if(fsPictureCarouselPosition < elementsToDisplay.length - 1 && fsPictureCarouselViewport.current.scrollLeft < fsPictureCarouselMaxScroll){
                    setFsPictureCarouselPosition(fsPictureCarouselPosition + 1);
                }
            } else if(direction === "left" && fsPictureCarouselPosition > 0){
                setFsPictureCarouselPosition(fsPictureCarouselPosition - 1);
            }
        }
    }

    useEffect(() => {
        if(fsPictureCarouselMainImg.current){
            if(isFSPicturePreviewZoomed){
                fsPictureCarouselMainImg.current.style.transform = "scale(2)";
                fsPictureCarouselMainImg.current.style.cursor = "zoom-out";            
            }
            else{
                fsPictureCarouselMainImg.current.style.transform = "scale(1)";
                fsPictureCarouselMainImg.current.style.cursor = "zoom-in";  
            }
        }
    }, [isFSPicturePreviewZoomed])

    const FullscreenPictures = React.memo(() => {

        useEffect(() => {
            fsPictureCarouselMaxScroll = fsPictureCarouselViewport.current.scrollWidth;
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
                    <img className="fsPicturePreviewImage" onClick={() => setFSPicturePreviewZoomed(!isFSPicturePreviewZoomed)} ref={fsPictureCarouselMainImg} alt="Imagem do imovel" src={NoImageDefault}/>
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
                                    <li key={i} ref={thisElem => fsPictureCarouselElements.current[i] = thisElem} onClick={() => setFsPictureCarouselPosition(i)} className="fsPictureCarouselItem">
                                        <img className="fsPictureCarouselItemImage" alt="Imagem do Imovel" src={'http://' + path.normalize(process.env.REACT_APP_API_URI + elem.link.replace(/\\/g, '/'))}/>
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
    });

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
                            <li key={i} ref={thisElem => pictureCarouselElements.current[i] = thisElem} onClick={() => {setFullscreenEnabled(true); setFsPictureCarouselPosition(i)}} className="pictureCarouselItem">
                                <img className="pictureCarouselItemImage" alt="Imagem do Imóvel" src={'http://' + path.normalize(process.env.REACT_APP_API_URI + elem.link.replace(/\\/g, '/'))}/>
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