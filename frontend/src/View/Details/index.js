import React, { Fragment } from "react";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import "./style.css";
import PictureCarousel from "../Components/PictureCarousel";
import { FaBath, FaBed, FaCarSide, FaExpand, FaTag } from "react-icons/fa";

export default function Details() {
    window.scrollTo(0, 0);

    return(
        <Fragment>
            <Header/>
            <main className="detailsMain">
                <PictureCarousel items={["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]}/>
                <section className="detailsMainInfo">
                    <div className="detailsMainInfoLeft">
                        <h1 className="detailsMainInfoLeftTitle">Apartamento em Cidade Antônio Estevão de Carvalho</h1>
                        <h2 className="detailsMainInfoLeftSubtitle">Rua Csar Carlos de Camargo Manezzi, 13590 - São Paulo, SP</h2>
                        <ul className="detailsMainInfoSpecList">
                            <li className="detailsMainInfoSpec"><FaExpand size="18px"/> 50 m²</li>
                            <li className="detailsMainInfoSpec"><FaBed size="18px"/> 2 Dormitórios</li>
                            <li className="detailsMainInfoSpec"><FaBath size="18px"/> 1 Banheiro</li>
                            <li className="detailsMainInfoSpec"><FaCarSide size="18px"/> 1 Vaga</li>
                        </ul>
                        <h2 className="detailsMainInfoLeftTitle">Detalhes sobre o imóvel</h2>
                        <p>Consectetur qui est minim cillum irure aliquip. Qui enim ipsum deserunt nostrud sunt elit aute occaecat. Cillum occaecat non eu velit occaecat sint duis magna. Consectetur esse ut aliquip pariatur consectetur sunt reprehenderit minim exercitation consectetur. Occaecat proident minim exercitation pariatur ullamco aliqua enim aliquip amet ad sunt velit eu non. Laboris velit consequat ut veniam ex quis nostrud sint commodo minim ad nulla adipisicing. Laboris nisi sint laboris dolore ea mollit reprehenderit consectetur.

Nulla voluptate eu qui do. Do sit cupidatat ex qui minim quis quis culpa velit adipisicing labore adipisicing Lorem. Ipsum adipisicing nostrud aliquip consectetur tempor velit voluptate duis. Occaecat velit irure adipisicing nisi mollit pariatur enim ut do duis occaecat eiusmod cillum ut. Ullamco nostrud culpa elit labore est aute adipisicing minim Lorem mollit qui duis.

Magna do nisi aliquip ea anim incididunt Lorem eu esse esse. Ex proident sint est est Lorem anim do consectetur incididunt aliqua. Aute pariatur eiusmod est adipisicing. Minim est officia dolore do elit irure adipisicing tempor commodo cupidatat do laborum deserunt culpa.

Cupidatat aute qui veniam reprehenderit do. Et ipsum do amet est. Id anim exercitation labore sunt mollit duis eiusmod exercitation deserunt. Commodo nostrud incididunt velit incididunt.

Non veniam nisi adipisicing pariatur. Nisi fugiat velit cillum mollit mollit fugiat. Ad et adipisicing commodo sint mollit ullamco aute mollit reprehenderit cillum consequat pariatur sunt.

Lorem consectetur culpa reprehenderit sint ad ad occaecat. Nulla magna officia sint ex. Aute et enim aliquip culpa nisi. Aliquip sunt cupidatat nostrud quis nulla.

Aliqua in voluptate occaecat eiusmod do ea consectetur fugiat enim irure fugiat sint eiusmod nostrud. Nostrud aute qui sit Lorem cupidatat cupidatat enim non ut ad occaecat. Sit ipsum adipisicing sunt reprehenderit ex. Ipsum do incididunt aliquip exercitation do adipisicing enim aute minim incididunt dolor exercitation pariatur. Dolor proident velit do mollit non consequat cupidatat dolor veniam incididunt culpa eu et.

Pariatur excepteur minim ex ex nulla nostrud magna commodo ea id velit. Amet non sit ullamco consectetur duis commodo ex aute pariatur magna. Nisi reprehenderit aute veniam occaecat incididunt dolor occaecat laborum dolore do. Officia amet magna fugiat anim ea tempor cillum enim consectetur eu sint esse. Culpa eiusmod tempor do exercitation consectetur incididunt occaecat aute amet.</p>
                    </div>
                    <div className="detailsMainInfoRight">
                        <div className="detailsMainInfoRightCard">
                            <h2 className="detailsInfoRightTitle">R$ 168.000,00 <FaTag size="16px"/></h2>
                            <h3 className="detailsInfoRightSubtitle">Venda</h3>
                            <p className="detailsInfoRightAdditional">Condomínio</p>
                            <p className="detailsInfoRightAdditional">R$ 200,00</p>
                            <p className="detailsInfoRightAdditional">IPTU</p>
                            <p className="detailsInfoRightAdditional">R$ 530,00</p>
                            <p className="detailsInfoRightSubtle">Referência: 15368</p>
                        </div>
                        <div className="detailsMainInfoRightCard">
                            <h2 className="detailsInfoRightTitle">Obter mais informações</h2>
                            <form className="detailsInfoRightForm">
                                <label>Nome</label>
                                <input type="text" className="defaultInput" placeholder="Digite nome e sobrenome"/>
                                <label>Email</label>
                                <input type="text" className="defaultInput" placeholder="exemplo@email.com"/>
                                <label>Telefone</label>
                                <input type="text" className="defaultInput" placeholder="(DDD) 00000-0000"/>
                                <button className="detailsInfoRightFormSubmit">Enviar</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </Fragment>
    );
}