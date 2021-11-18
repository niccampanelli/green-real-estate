import React from "react";
import { FaBath, FaBed, FaCarSide, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NoImageDefault from "../../../Assets/NoImageDefault.svg";

export default function ImmobileCard(props) {

    return(
        <li className="immobileCard">
            <img className="immobileCardImage" alt="Sem Foto" src={NoImageDefault}/>
            <h3 className="immobileCardTitle">{props.district}</h3>
            <span className="immobileCardSubtitle">{props.type} - {props.purpose}</span>
            <h4 className="immobileCardPrice">R$ {props.price/100}</h4>
            <ul className="immobileCardSpecList">
                <li className="immobileCardSpec">50 m²</li>
                <li className="immobileCardSpec"><FaBed size="18px"/> {props.bed}</li>
                <li className="immobileCardSpec"><FaBath size="18px"/> {props.bath}</li>
                <li className="immobileCardSpec"><FaCarSide size="18px"/> {props.park}</li>
            </ul>
            <span className="immobileCardDetail">Clique para Detalhes</span>
        </li>
    );
}