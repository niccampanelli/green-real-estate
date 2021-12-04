import React from "react";
import { FaBath, FaBed, FaCarSide } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import NoImageDefault from "../../../Assets/NoImageDefault.svg";
import "./style.css";

export default function ImmobileCard(props) {

    const immo = props.immo;
    const history = useHistory();

    return(
        <li className="immobileCard" onClick={() => history.push("/imovel", immo)}>
            <img className="immobileCardImage" alt="Sem Foto" src={NoImageDefault}/>
            <h3 className="immobileCardTitle">{immo.district}</h3>
            <span className="immobileCardSubtitle">{immo.type} - {immo.purpose}</span>
            <h4 className="immobileCardPrice">R$ {immo.price/100}</h4>
            <ul className="immobileCardSpecList">
                <li className="immobileCardSpec">{immo.immobileArea} m²</li>
                { typeof immo.bedNumber === "number" ?
                    <li className="immobileCardSpec"><FaBed size="18px"/> {immo.bedNumber}</li>
                : ""}
                { typeof immo.bathNumber === "number" ?
                    <li className="immobileCardSpec"><FaBath size="18px"/> {immo.bathNumber}</li>
                : ""}
                { typeof immo.parkNumber === "number" ?
                    <li className="immobileCardSpec"><FaCarSide size="18px"/> {immo.parkNumber}</li>
                : ""}
            </ul>
            <span className="immobileCardDetail">Clique para Detalhes</span>
        </li>
    );
}