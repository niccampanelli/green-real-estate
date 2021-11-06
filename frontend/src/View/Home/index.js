import React, { useEffect, useRef } from "react";
import "./style.css";

export default function Home() {
    
    const searchInput = useRef();
    var typewriterIndex = 0;
    var textListIndex = 0;
    const typewriterSpeed = 100;
    const textList = ["Casa com dois quartos para alugar em SP", "Apartamento com suíte a venda" , "Imóvel com vaga de garagem para locação", "Apartamento mobiliado zona leste"];

    useEffect(() => {
        typewriter();
    }, [searchInput]);

    function typewriter(){
        if(searchInput){
            if(typewriterIndex === textList[textListIndex].length){
                typewriterIndex = 0;
                searchInput.current.placeholder = "";
                if(textListIndex < textList.length - 1){
                    textListIndex ++;
                }
                else{
                    textListIndex = 0;
                }
            }
            if(typewriterIndex < textList[textListIndex].length){
                searchInput.current.placeholder += textList[textListIndex].charAt(typewriterIndex);
                typewriterIndex ++;
                setTimeout(typewriter, typewriterSpeed);
            }
        }
    }

    return(
        <main>
            <section className="landing">
                <form className="landingSearch">
                    <input type="search" className="searchInput" ref={searchInput}/>
                    <button type="submit" className="searchInputButton">enviar</button>
                </form>
            </section>
        </main>
    );
}