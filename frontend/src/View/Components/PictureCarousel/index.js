import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import NoImageDefault from "../../../Assets/NoImageDefault.svg";
import loader from "../../../Assets/loader.gif";
import path from "path";
import "./style.css";

export default function PictureCarousel(props) {

    const [isFullscreenEnabled, setFullscreenEnabled] = useState(false);

    const elementsToDisplay = props.items;

    const pictureCarouselViewport = useRef();
    const pictureCarouselElements = useRef([]);
    const [pictureCarouselMaxScroll, setPictureCarouselMaxScroll] = useState(0);
    const [pictureCarouselPosition, setPictureCarouselPosition] = useState(0);

    const fsPictureCarouselMainImg = useRef();
    const [isFSPicturePreviewZoomed, setFSPicturePreviewZoomed] = useState(false);

    const fsPictureCarouselViewport = useRef();
    const fsPictureCarouselElements = useRef([]);
    const [fsPictureCarouselPosition, setFsPictureCarouselPosition] = useState(-1);
    const [fsPictureCarouselMaxScroll, setFSPictureCarouselMaxScroll] = useState(0);
    const fsPictureCarouselSelections = [];

    const fsPictureCarouselCounter = useRef();

    useEffect(() => {
        setPictureCarouselMaxScroll(pictureCarouselViewport.current.scrollWidth - pictureCarouselViewport.current.offsetWidth - 350);
    }, [elementsToDisplay]);

    useEffect(() => {
        if(pictureCarouselElements.current && pictureCarouselViewport.current && pictureCarouselElements.current.length > 0 && pictureCarouselPosition !== undefined){
            pictureCarouselViewport.current.scrollTo({
                top: 0, 
                left: (pictureCarouselElements.current[pictureCarouselPosition].offsetLeft), 
                behavior: "smooth"
            })
        }
    }, [pictureCarouselPosition])

    function slidePictureCarousel(direction){
        if(direction){
            if(direction === "right"){
                if(pictureCarouselPosition < elementsToDisplay.length -1 && pictureCarouselViewport.current.scrollLeft < pictureCarouselMaxScroll){
                    console.log(pictureCarouselPosition);
                    setPictureCarouselPosition(pictureCarouselPosition+1);
                }
            } else if(direction === "left" && pictureCarouselPosition > 0){
                setPictureCarouselPosition(pictureCarouselPosition-1);
            }
        }
    }

    useEffect(() => {
        if(fsPictureCarouselElements.current && fsPictureCarouselViewport.current && fsPictureCarouselElements.current.length > 0 && fsPictureCarouselPosition !== undefined){

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
            setFSPictureCarouselMaxScroll(fsPictureCarouselViewport.current.scrollWidth);
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
                    { elementsToDisplay ? (
                        elementsToDisplay.length !== 0 ?
                            ( elementsToDisplay.map((elem, i) => (
                                <li key={i} ref={thisElem => pictureCarouselElements.current[i] = thisElem} onClick={() => {setFullscreenEnabled(true); setFsPictureCarouselPosition(i)}} className="pictureCarouselItem">
                                    <img className="pictureCarouselItemImage" alt="Imagem do Imóvel" src={'http://' + path.normalize(process.env.REACT_APP_API_URI + elem.link.replace(/\\/g, '/'))}/>
                                </li>
                            )))
                            :
                            <li key={1} className="pictureCarouselDefaultItem">
                                <img className="pictureCarouselDefaultItemImage" alt="Sem Foto" src={NoImageDefault}/>
                            </li>
                        )
                        :
                        <div className="defaultLoader">
                            <img src={loader}/>
                        </div>
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