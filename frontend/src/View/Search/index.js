import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import API from "../../Services/API";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ImmobileCard from "../Components/ImmobileCard";
import loader from "../../Assets/loader.gif";
import './style.css';

export default function Search(){

    const history = useHistory();
    const location = useLocation();

    const search = location.search;
    const objSearch = location.state.object;

    const [title, setTitle] = useState("");
    const [resultQuant, setResultQuant] = useState(0);
    const [immobileList, setImmobileList] = useState();

    useEffect(() => {
        if(objSearch === "" || objSearch === undefined || objSearch === null){
            
            if(search !== undefined && search !== "" && search !== null){
                var arrSearch = search.split("?");

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

    useEffect(async () => {
        const lastData = JSON.parse(sessionStorage.getItem("lastData"));
        var cleanObjSearch = objSearch;
        Object.keys(cleanObjSearch).forEach(key => cleanObjSearch[key] === undefined && delete cleanObjSearch[key]);

        if(lastData){            
            if((search && search === lastData.search) || (JSON.stringify(cleanObjSearch) && JSON.stringify(cleanObjSearch) === JSON.stringify(lastData.query))){
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
                setImmobileList(result.data);
                setResultQuant(result.data.length);

                sessionStorage.setItem("lastData", JSON.stringify({
                    search: search,
                    query: objSearch,
                    data: result.data,
                }));
            });
        }
    }, [])

    return(
        <Fragment>
            <Header/>
                <main>
                    <article className="searchArticle">
                        <section className="searchFilterSection">
                            <h1 className="searchTitle">{title}</h1>
                            <p className="searchSubtitle">{resultQuant} { (resultQuant > 1) ? "imóveis encontrados." : "imóvel encontrado." }</p>

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
                        </section>
                    </article>
                </main>
            <Footer/>
        </Fragment>
    );
}