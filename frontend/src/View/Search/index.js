import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../../Services/API";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ImmobileCard from "../Components/ImmobileCard";
import loader from "../../Assets/loader.gif";
import './style.css';

export default function Search(){

    const location = useLocation();

    const [searchText, setSearchText] = useState(location.search);
    const [objSearch, setObjSearch] = useState(location.state.object);

    const [title, setTitle] = useState("");
    const [resultQuant, setResultQuant] = useState(0);
    const [resultTotal, setResultTotal] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [immobileList, setImmobileList] = useState();

    useEffect(() => {
        if(objSearch === "" || objSearch === undefined || objSearch === null){
            
            if(searchText !== undefined && searchText !== "" && searchText !== null){
                var arrSearch = searchText.split("?");

                setTitle(arrSearch[1]);
            }
            else{
                setTitle("Imóveis");
            }
        }
        else{
            setTitle("Imóveis para " + objSearch.purpose);
        }
    }, []);

    useEffect(() => {
        setSearchText(location.search);
    }, [location.search])

    useEffect(() => {
        setObjSearch(location.state.object);
    }, [location.state.object])

    useEffect(async () => {
        const lastData = JSON.parse(sessionStorage.getItem("lastData"));
        var cleanObjSearch = objSearch;
        Object.keys(cleanObjSearch).forEach(key => cleanObjSearch[key] === undefined && delete cleanObjSearch[key]);

        if(lastData){            
            if((searchText && searchText === lastData.searchText) || (JSON.stringify(cleanObjSearch) && JSON.stringify(cleanObjSearch) === JSON.stringify(lastData.query))){
                setImmobileList(lastData.data);
                setResultQuant(lastData.data.length);
            }
            else{
                getData();
            }
        }
        else{
            getData();
        }

        async function getData(){
            await API.get("/immobile", {params: objSearch}).then(result => {
                if(result.data.immobiles && result.data.immobiles.length > 0){
                    console.log(result.data.immobiles.length > 0);

                    sessionStorage.setItem("lastData", JSON.stringify({
                        searchText: searchText,
                        query: objSearch,
                        data: result.data.immobiles,
                    }));
                }

                setImmobileList(result.data.immobiles);
                setResultQuant(result.data.immobiles.length);
                setResultTotal(result.data.count);
                setPageCount(Math.ceil(result.data.count/objSearch.limit));
            });
        }
    }, [searchText, objSearch])

    async function makeSearch(e){
        e.preventDefault();

        await API.get("/immobile", {params: {
            type: objSearch.type,
            purpose: objSearch.purpose,
            address: objSearch.address,
            district: objSearch.district,
            city: objSearch.city,
            UF: objSearch.UF,
            terrainArea: objSearch.terrainArea,
            immobileArea: objSearch.immobileArea,
            parkNumber: objSearch.parkNumber,
            bathNumber: objSearch.bathNumber,
            bedNumber: objSearch.bedNumber,
            reference: objSearch.reference,
            limit: objSearch.limit,
            offset: e.target.value,
        }}).then(result => {
            setImmobileList(result.data.immobiles);
            setResultQuant(result.data.immobiles.length);
            setResultTotal(result.data.count);
            setPageCount(Math.ceil(result.data.count/objSearch.limit));

            sessionStorage.setItem("lastData", JSON.stringify({
                searchText: searchText,
                query: objSearch,
                data: result.data.immobiles,
            }));
        });
    }

    return(
        <Fragment>
            <Header/>
                <main>
                    <article className="searchArticle">
                        <section className="searchFilterSection">
                            <h1 className="searchTitle">{title}</h1>
                            <p className="searchSubtitle">{resultQuant} { (resultQuant > 1) ? `imóveis de ${resultTotal} encontrados.` : `imóvel de ${resultTotal} encontrado.` }</p>

                            <div className="searchFilterContainer">
                                <form className="searchFilterForm">
                                    <div className="searchFilterCategoryContainer">
                                        <label className="searchFilterLabel">Ordenar por</label>
                                        <select className="defaultDropdown">
                                            <option>Maior valor</option>
                                            <option>Menor valor</option>
                                        </select>
                                    </div>

                                    <div className="searchFilterCategoryContainer">
                                        <label className="searchFilterLabel">Dormitórios</label>
                                        <select className="defaultDropdown">
                                            <option>1 dormitório</option>
                                            <option>2 dormitórios</option>
                                            <option>3 dormitórios</option>
                                            <option>4+ dormitórios</option>
                                        </select>
                                    </div>

                                    <div className="searchFilterCategoryContainer">
                                        <label className="searchFilterLabel">Vagas</label>
                                        <select className="defaultDropdown">
                                            <option>1 vaga</option>
                                            <option>2 vagas</option>
                                            <option>3 vagas</option>
                                            <option>4 vagas</option>
                                            <option>5+ vagas</option>
                                        </select>
                                    </div>

                                    <div className="searchFilterCategoryContainer">
                                        <label className="searchFilterLabel">Banheiros</label>
                                        <select className="defaultDropdown">
                                            <option>1 banheiro</option>
                                            <option>2 banheiros</option>
                                            <option>3+ banheiros</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </section>
                        
                        <section className="searchResultSection">
                            { immobileList ?
                                <ul className="searchResultList">
                                {
                                    immobileList.map((immo, i) => (
                                        <ImmobileCard key={i} immo={immo}/>
                                    ))
                                }
                                </ul>
                            :
                            <div className="defaultLoader">
                                <img src={loader}/>
                            </div>
                            }
                            { 
                                /*Array(pageCount).fill(0).map((el, i) => (
                                    <button onClick={e => makeSearch(e)} value={i}>{i+1}</button>
                                ))*/
                            }
                        </section>
                    </article>
                </main>
            <Footer/>
        </Fragment>
    );
}