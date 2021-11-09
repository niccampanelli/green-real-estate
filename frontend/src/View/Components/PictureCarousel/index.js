import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import NoImageDefault from "../../../Assets/NoImageDefault.svg";
import "./style.css";

export default function PictureCarousel(props) {

    const [isFullscreenEnabled, setFullscreenEnabled] = useState(false);

    const elementsToDisplay = props.items;

    const pictureCarouselViewport = useRef();
    const pictureCarouselElements = useRef([]);
    var pictureCarouselPosition = 0;
    var pictureCarouselMaxScroll = 0;

    const fsPictureCarouselViewport = useRef();
    const fsPictureCarouselElements = useRef([]);
    var fsPictureCarouselPosition = 0;
    var fsPictureCarouselMaxScroll = 0;

    useEffect(() => {
        console.log("aa")
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

    function slideFSPictureCarousel(direction){
        console.log(fsPictureCarouselElements.current);

        if(direction){
            if(direction === "right"){
                if(fsPictureCarouselPosition < elementsToDisplay.length && fsPictureCarouselViewport.current.scrollLeft < fsPictureCarouselMaxScroll){
                    fsPictureCarouselPosition += 1;
    
                    fsPictureCarouselViewport.current.scrollTo({
                        top: 0, 
                        left: (fsPictureCarouselElements.current[fsPictureCarouselPosition].offsetLeft),
                        behavior: "smooth"});
                }
            } else if(direction === "left" && fsPictureCarouselPosition > 0){
                fsPictureCarouselPosition -= 1;

                fsPictureCarouselViewport.current.scrollTo({
                    top: 0, 
                    left: (fsPictureCarouselElements.current[fsPictureCarouselPosition].offsetLeft), 
                    behavior: "smooth"})
            }
        }
    }

    const FullscreenPictures = () => {

        useEffect(() => {
            console.log(fsPictureCarouselPosition);
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
                        <ul className="fsPictureCarouselContent">
                            { elementsToDisplay ? 
                                ( elementsToDisplay.map((elem, i) => (
                                    <li key={i} ref={thisElem => fsPictureCarouselElements.current.push(thisElem)} onClick={() => {}} className="fsPictureCarouselItem">
                                        <img className="fsPictureCarouselItemImage" alt="Sem Foto" src={NoImageDefault}/>
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
                            <li key={i} ref={thisElem => pictureCarouselElements.current.push(thisElem)} onClick={() => setFullscreenEnabled(true)} className="pictureCarouselItem">
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
            { isFullscreenEnabled ? <FullscreenPictures/> : '' }
        </div>
    );
}