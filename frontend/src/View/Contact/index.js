import React, { Fragment } from "react";
import Footer from '../Footer';
import Header from '../Header';
import Imagem1 from '../../Assets/img1-small.jpg'
import './style.css';

export default function Contact() {
    return(
        <Fragment>
            <Header/>
                <main>
                    <article className="contactArticle">
                        <section className="presentationSection">
                            <div className="leftPresentation">
                                <img alt="Ilustração" />
                            </div>

                            <div className="rightPresentation">
                                <h1 className="aboutTitle">Sobre nós</h1>
                                <p className="aboutSubtitle">Voluptate non nostrud aute commodo nisi Lorem proident nisi reprehenderit voluptate.</p>
                            </div>
                        </section>
                        <section className="historySection">
                            <h2 className="historySubtitle">Nossa história</h2>
                            <p className="historyParagraph">Eiusmod irure cupidatat quis est ipsum in id. Cupidatat non proident tempor velit culpa est anim labore dolore sunt ea cillum cillum eu. Reprehenderit deserunt reprehenderit dolore ad velit duis aliquip enim elit dolor. Officia laborum cupidatat reprehenderit velit magna aliquip consequat sint. Dolor pariatur officia nisi aliqua mollit enim sit anim. Dolor nulla sit mollit eu consequat duis eu amet ut labore sint elit. Amet esse laborum in non aute commodo ex irure excepteur.</p>
                            <br/>
                            <p className="historyParagraph">Eiusmod irure cupidatat quis est ipsum in id. Cupidatat non proident tempor velit culpa est anim labore dolore sunt ea cillum cillum eu. Reprehenderit deserunt reprehenderit dolore ad velit duis aliquip enim elit dolor. Officia laborum cupidatat reprehenderit velit magna aliquip consequat sint. Dolor pariatur officia nisi aliqua mollit enim sit anim. Dolor nulla sit mollit eu consequat duis eu amet ut labore sint elit. Amet esse laborum in non aute commodo ex irure excepteur.</p>
                            <br/>
                            <p className="historyParagraph">Eiusmod irure cupidatat quis est ipsum in id. Cupidatat non proident tempor velit culpa est anim labore dolore sunt ea cillum cillum eu. Reprehenderit deserunt reprehenderit dolore ad velit duis aliquip enim elit dolor. Officia laborum cupidatat reprehenderit velit magna aliquip consequat sint. Dolor pariatur officia nisi aliqua mollit enim sit anim. Dolor nulla sit mollit eu consequat duis eu amet ut labore sint elit. Amet esse laborum in non aute commodo ex irure excepteur.</p>
                        </section>
                        <section className="purposeSection">
                            <div className="purposeLeft">
                                <img src={Imagem1} className="purposeImg" alt="Ilustração"/>
                            </div>
                            <div className="purposeRight">
                                <h2 className="purposeSubtitle">Nosso propósito</h2>
                                <p className="purposeParagraph">Eiusmod irure cupidatat quis est ipsum in id. Cupidatat non proident tempor velit culpa est anim labore dolore sunt ea cillum cillum eu. Reprehenderit deserunt reprehenderit dolore ad velit duis aliquip enim elit dolor. Officia laborum cupidatat reprehenderit velit magna aliquip consequat sint. Dolor pariatur officia nisi aliqua mollit enim sit anim. Dolor nulla sit mollit eu consequat duis eu amet ut labore sint elit. Amet esse laborum in non aute commodo ex irure excepteur.</p>
                                <br/>
                                <p className="purposeParagraph">Eiusmod irure cupidatat quis est ipsum in id. Cupidatat non proident tempor velit culpa est anim labore dolore sunt ea cillum cillum eu. Reprehenderit deserunt reprehenderit dolore ad velit duis aliquip enim elit dolor. Officia laborum cupidatat reprehenderit velit magna aliquip consequat sint. Dolor pariatur officia nisi aliqua mollit enim sit anim. Dolor nulla sit mollit eu consequat duis eu amet ut labore sint elit. Amet esse laborum in non aute commodo ex irure excepteur.</p>
                            </div>
                        </section>
                        <section className="opinionSection">
                            <div className="opinionSubtitleContainer">
                                <h2 className="opinionSubtitle">Opiniões dos clientes</h2>
                                <div className="opinionDescriptionContainer">
                                    <p className="opinionDescription">Eiusmod irure cupidatat quis est ipsum in id. Cupidatat non proident tempor velit culpa est anim labore dolore sunt ea cillum cillum eu. Reprehenderit deserunt reprehenderit dolore ad velit duis aliquip enim elit dolor. Officia laborum cupidatat reprehenderit velit magna aliquip consequat sint.</p>
                                </div>
                            </div>
                            
                        </section>
                        <section className="contactSection">
                            <div className="contactLeft">
                                <h2 className="contactSubtitle">Converse conosco</h2>
                                <p className="contactParagraph">Eiusmod irure cupidatat quis est ipsum in id. Cupidatat non proident tempor velit culpa est anim labore dolore sunt ea cillum cillum eu. Reprehenderit deserunt reprehenderit dolore ad velit duis aliquip enim elit dolor. Officia laborum cupidatat reprehenderit velit magna aliquip consequat sint. Dolor pariatur officia nisi aliqua mollit enim sit anim. Dolor nulla sit mollit eu consequat duis eu amet ut labore sint elit. Amet esse laborum in non aute commodo ex irure excepteur.</p>
                                <div className="contactContainer">
                                    <ul className="contactList">
                                        <li className="contactItem">(11) 1111-1111</li>
                                        <li className="contactItem">nononon@mail.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="contactRight">
                                <img alt="Ilustração" />
                            </div>
                        </section>
                    </article>
                </main>
            <Footer/>
        </Fragment>
    );
}