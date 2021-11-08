import React, { Fragment, useState } from "react";
import Footer from '../Footer';
import Header from '../Header';
import Imagem1 from '../../Assets/img1-small.jpg'
import './style.css';

export default function Registration() {

    const [purposeSwitch, setPurposeSwitch] = useState();
    const [typeImmobile, setTypeImmobile] = useState("casa");

    return(
        <Fragment>
            <Header/>
                <main>
                    <article className="registrationArticle">
                        <section className="registrationSection">
                            <div className="leftRegistration">
                                <h1 className="registrationTitle">Cadastre um imóvel</h1>
                                <p className="registrationSubtitle">Dolore ullamco tempor veniam fugiat do ut tempor elit consectetur magna veniam fugiat magna.</p>
                            </div>
                            <div className="rightRegistration">
                                <img alt="Ilustração"/>
                            </div>
                        </section>
                        <section className="formSection">
                            <div className="formLeft">
                                <img alt="Ilustração" />
                            </div>
                            <div className="formRight">
                                <h2 className="formSubtitle">Conte-nos sobre o seu imóvel</h2>
                                <p className="formDescription">Proident id reprehenderit laborum non excepteur in quis adipisicing laboris nostrud enim elit. Pariatur laboris id aliqua sunt ut adipisicing sint. Quis culpa irure ullamco non qui aute ad enim. Cupidatat pariatur deserunt sint minim.</p>
                                
                                { purposeSwitch ? (
                                    (purposeSwitch === 'rent') ? 
                                        <form className="registrationForm">
                                        <div className="formAddress">
                                            <label>Logradouro</label>
                                            <input className="defaultInput" placeholder="Exemplo: Avenida Brasil" type="text" maxLength="50"/>
                                            <label>Número</label>
                                            <input className="defaultInputNumber" placeholder="12" type="text" maxLength="5"/>
                                            <label>Complemento</label>
                                            <input className="defaultInput" placeholder="Apto 505" type="text" maxLength="20"/>
                                            <label>CEP</label>
                                            <input className="defaultInput" placeholder="12345678" type="text" maxLength="20"/>
                                            <label>Bairro</label>
                                            <input className="defaultInput" placeholder="Mooca" type="text" maxLength="20"/>
                                            <label>Cidade</label>
                                            <input className="defaultInput" placeholder="São Paulo" type="text" maxLength="20"/>
                                            <label>Estado</label>
                                            <select className="defaultDropdown">
                                                <option className="defaultDropdownOption" value="AC">Acre</option>
                                                <option className="defaultDropdownOption" value="AL">Alagoas</option>
                                                <option className="defaultDropdownOption" value="AP">Amapá</option>
                                                <option className="defaultDropdownOption" value="AM">Amazonas</option>
                                                <option className="defaultDropdownOption" value="BA">Bahia</option>
                                                <option className="defaultDropdownOption" value="CE">Ceará</option>
                                                <option className="defaultDropdownOption" value="DF">Distrito Federal</option>
                                                <option className="defaultDropdownOption" value="ES">Espirito Santo</option>
                                                <option className="defaultDropdownOption" value="GO">Goiás</option>
                                                <option className="defaultDropdownOption" value="MA">Maranhão</option>
                                                <option className="defaultDropdownOption" value="MT">Mato Grosso</option>
                                                <option className="defaultDropdownOption" value="MS">Mato Grosso do Sul</option>
                                                <option className="defaultDropdownOption" value="MG">Minas Gerais</option>
                                                <option className="defaultDropdownOption" value="PA">Pará</option>
                                                <option className="defaultDropdownOption" value="PB">Paraíba</option>
                                                <option className="defaultDropdownOption" value="PR">Paraná</option>
                                                <option className="defaultDropdownOption" value="PE">Pernambuco</option>
                                                <option className="defaultDropdownOption" value="PI">Piauí</option>
                                                <option className="defaultDropdownOption" value="RJ">Rio de Janeiro</option>
                                                <option className="defaultDropdownOption" value="RN">Rio Grande do Norte</option>
                                                <option className="defaultDropdownOption" value="RS">Rio Grande do Sul</option>
                                                <option className="defaultDropdownOption" value="RO">Rondônia</option>
                                                <option className="defaultDropdownOption" value="RR">Roraima</option>
                                                <option className="defaultDropdownOption" value="SC">Santa Catarina</option>
                                                <option className="defaultDropdownOption" value="SP">São Paulo</option>
                                                <option className="defaultDropdownOption" value="SE">Sergipe</option>
                                                <option className="defaultDropdownOption" value="TO">Tocantins</option>
                                            </select>
                                        </div>

                                        <div className="formType">
                                            <label>Tipo do imóvel</label>
                                            <select className="defaultDropdown" onChange={e => setTypeImmobile(e.target.value)}>
                                                <option className="defaultDropdownOption" value="casa" checked>Casa</option>
                                                <option className="defaultDropdownOption" value="apartamento">Apartamento</option>
                                                <option className="defaultDropdownOption" value="terreno">Terreno</option>
                                                <option className="defaultDropdownOption" value="comercial">Comercial</option>
                                                <option className="defaultDropdownOption" value="galpão">Galpão</option>
                                            </select>
                                        </div>

                                        <div className="formArea">
                                            <div className="formAreaLeft">
                                                <label>Área do terreno</label>
                                                <div className="formAreaInputContainer">
                                                    <input className="defaultInputNumber" placeholder="400" type="text" maxLength="70"/><span className="formAreaInputContainerMeasure">m²</span>
                                                </div>
                                            </div>
                                            <div className="formAreaRight">
                                                <label>Área do imóvel</label>
                                                <div className="formAreaInputContainer">
                                                    <input className="defaultInputNumber" placeholder="120" type="text" maxLength="70"/><span className="formAreaInputContainerMeasure">m²</span>
                                                </div>
                                            </div>
                                        </div>

                                        {
                                            typeImmobile === "casa" || typeImmobile === "apartamento" ? 
                                            (
                                                <div className="formInfos">
                                                    <label>Número de vagas</label>
                                                    <input className="defaultInputNumber" placeholder="2" type="text" maxLength="2"/>
                                                    <label>Número de banheiros</label>
                                                    <input className="defaultInputNumber" placeholder="3" type="text" maxLength="2"/>
                                                    <label>Número de dormitórios</label>
                                                    <input className="defaultInputNumber" placeholder="2" type="text" maxLength="2"/>
                                                </div>
                                            )
                                            :
                                            ""
                                        }

                                        <div className="formValue">
                                            <label>Valor do aluguel</label>
                                            <div className="formValueInputContainer">
                                                <input className="defaultInputCurrency" placeholder="150000" type="text" maxLength="70"/>
                                            </div>
                                        </div>
                                        
                                        <div className="formObservation">
                                            <label>Agora, escreva a descrição, com detalhes, do seu imóvel</label>
                                            <textarea className="registrationTextArea" placeholder="Exemplo: Imóvel sito na Zona Leste, próximo à estação do Metrõ e fácil acesso às principais rodovias. Rua movimentada e vaga de garagem coberta."></textarea>
                                        </div>

                                        <button className="registrationFormBtn">Pronto!</button>
                                    </form>
                                    : 
                                    <form className="registrationForm">
                                    <div className="formAddress">
                                        <label>Logradouro</label>
                                        <input className="defaultInput" placeholder="Exemplo: Avenida Brasil" type="text" maxLength="50"/>
                                        <label>Número</label>
                                        <input className="defaultInputNumber" placeholder="12" type="text" maxLength="5"/>
                                        <label>Complemento</label>
                                        <input className="defaultInput" placeholder="Apto 505" type="text" maxLength="20"/>
                                        <label>CEP</label>
                                        <input className="defaultInput" placeholder="12345678" type="text" maxLength="20"/>
                                        <label>Bairro</label>
                                        <input className="defaultInput" placeholder="Mooca" type="text" maxLength="20"/>
                                        <label>Cidade</label>
                                        <input className="defaultInput" placeholder="São Paulo" type="text" maxLength="20"/>
                                        <label>Estado</label>
                                        <select className="defaultDropdown">
                                            <option className="defaultDropdownOption" value="AC">Acre</option>
                                            <option className="defaultDropdownOption" value="AL">Alagoas</option>
                                            <option className="defaultDropdownOption" value="AP">Amapá</option>
                                            <option className="defaultDropdownOption" value="AM">Amazonas</option>
                                            <option className="defaultDropdownOption" value="BA">Bahia</option>
                                            <option className="defaultDropdownOption" value="CE">Ceará</option>
                                            <option className="defaultDropdownOption" value="DF">Distrito Federal</option>
                                            <option className="defaultDropdownOption" value="ES">Espirito Santo</option>
                                            <option className="defaultDropdownOption" value="GO">Goiás</option>
                                            <option className="defaultDropdownOption" value="MA">Maranhão</option>
                                            <option className="defaultDropdownOption" value="MT">Mato Grosso</option>
                                            <option className="defaultDropdownOption" value="MS">Mato Grosso do Sul</option>
                                            <option className="defaultDropdownOption" value="MG">Minas Gerais</option>
                                            <option className="defaultDropdownOption" value="PA">Pará</option>
                                            <option className="defaultDropdownOption" value="PB">Paraíba</option>
                                            <option className="defaultDropdownOption" value="PR">Paraná</option>
                                            <option className="defaultDropdownOption" value="PE">Pernambuco</option>
                                            <option className="defaultDropdownOption" value="PI">Piauí</option>
                                            <option className="defaultDropdownOption" value="RJ">Rio de Janeiro</option>
                                            <option className="defaultDropdownOption" value="RN">Rio Grande do Norte</option>
                                            <option className="defaultDropdownOption" value="RS">Rio Grande do Sul</option>
                                            <option className="defaultDropdownOption" value="RO">Rondônia</option>
                                            <option className="defaultDropdownOption" value="RR">Roraima</option>
                                            <option className="defaultDropdownOption" value="SC">Santa Catarina</option>
                                            <option className="defaultDropdownOption" value="SP">São Paulo</option>
                                            <option className="defaultDropdownOption" value="SE">Sergipe</option>
                                            <option className="defaultDropdownOption" value="TO">Tocantins</option>
                                        </select>
                                    </div>

                                    <div className="formType">
                                            <label>Tipo do imóvel</label>
                                            <select className="defaultDropdown" onChange={e => setTypeImmobile(e.target.value)}>
                                                <option className="defaultDropdownOption" value="casa" checked>Casa</option>
                                                <option className="defaultDropdownOption" value="apartamento">Apartamento</option>
                                                <option className="defaultDropdownOption" value="terreno">Terreno</option>
                                                <option className="defaultDropdownOption" value="comercial">Comercial</option>
                                                <option className="defaultDropdownOption" value="galpão">Galpão</option>
                                            </select>
                                        </div>

                                        <div className="formArea">
                                            <div className="formAreaLeft">
                                                <label>Área do terreno</label>
                                                <div className="formAreaInputContainer">
                                                    <input className="defaultInputNumber" placeholder="400" type="text" maxLength="70"/><span className="formAreaInputContainerMeasure">m²</span>
                                                </div>
                                            </div>
                                            <div className="formAreaRight">
                                                <label>Área do imóvel</label>
                                                <div className="formAreaInputContainer">
                                                    <input className="defaultInputNumber" placeholder="120" type="text" maxLength="70"/><span className="formAreaInputContainerMeasure">m²</span>
                                                </div>
                                            </div>
                                        </div>

                                        {
                                            typeImmobile === "casa" || typeImmobile === "apartamento" ? 
                                            (
                                                <div className="formInfos">
                                                    <label>Número de vagas</label>
                                                    <input className="defaultInputNumber" placeholder="2" type="text" maxLength="2"/>
                                                    <label>Número de banheiros</label>
                                                    <input className="defaultInputNumber" placeholder="3" type="text" maxLength="2"/>
                                                    <label>Número de dormitórios</label>
                                                    <input className="defaultInputNumber" placeholder="2" type="text" maxLength="2"/>
                                                </div>
                                            )
                                            :
                                            ""
                                        }

                                    <div className="formValue">
                                        <label>Valor da venda</label>
                                        <div className="formValueInputContainer">
                                            <input className="defaultInputCurrency" placeholder="150000" type="text" maxLength="70"/>
                                        </div>
                                    </div>
                                    
                                    <div className="formObservation">
                                        <label>Agora, escreva a descrição, com detalhes, do seu imóvel</label>
                                        <textarea className="registrationTextArea" placeholder="Exemplo: Imóvel sito na Zona Leste, próximo à estação do Metrõ e fácil acesso às principais rodovias. Rua movimentada e vaga de garagem coberta."></textarea>
                                    </div>

                                    <button className="registrationFormBtn">Pronto!</button>
                                    </form>
                                ) : 
                                (
                                    <div>
                                        <div className="purposeTitleContainer">
                                            <h3 className="purposeTitle">O que você deseja?</h3>
                                        </div>
                                        <div className="purposeOptionsContainer">
                                            <div className="purposeOptionsLeft">
                                                <img className="purposeOptionSale" onClick={() => setPurposeSwitch("sale")} alt="Vender"/>
                                            </div>
                                            <div className="purposeOptionsLeft">
                                                <img className="purposeOptionRent" onClick={() => setPurposeSwitch("rent")} alt="Alugar"/>
                                            </div>
                                        </div>
                                    </div>
                                )
                                }
                            </div>
                        </section>
                        {/* <section className="registrationContactSection">
                            <h2>Ficou com dúvidas?</h2>
                            <p>Estamos à disposição para conversar, quando quiser.</p>
                        </section> */}
                    </article>
                </main>
            <Footer/>
        </Fragment>
    );
}