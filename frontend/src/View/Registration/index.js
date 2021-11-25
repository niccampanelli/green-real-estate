import React, { Fragment, useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import API from '../../Services/API';
import './style.css';

export default function Registration() {

    const [purposeSwitch, setPurposeSwitch] = useState();

    const [immoImages, setImmoImages] = useState();
    const [immoAddress, setImmoAddress] = useState("");
    const [immoNumber, setImmoNumber] = useState("");
    const [immoComplement, setImmoComplement] = useState("");
    const [immoCEP, setImmoCEP] = useState("");
    const [immoDistrict, setImmoDistrict] = useState("");
    const [immoCity, setImmoCity] = useState("");
    const [immoUF, setImmoUF] = useState("");
    const [immoType, setImmoType] = useState("Casa");
    const [immoArea, setImmoArea] = useState("");
    const [immoTerrainArea, setImmoTerrainArea] = useState("");
    const [immoPark, setImmoPark] = useState("");
    const [immoBath, setImmoBath] = useState("");
    const [immoBed, setImmoBed] = useState("");
    const [immoPrice, setImmoPrice] = useState("");
    const [immoDescription, setImmoDescription] = useState("");

    const [imagesToDisplay, setImagesToDisplay] = useState([]);

    function handleImagesUpload(e){
        e.preventDefault();

        setImmoImages(e.target.files);

        if(e.target.files){
            Array.from(e.target.files).forEach((elem) => {
                let reader = new FileReader();
                reader.onload = e => {
                    setImagesToDisplay(previous => [...previous, e.target.result]);
                };
                reader.readAsDataURL(elem);
            })
        }
    }

    // Método para enviar o formulário
    function sendData(e){
        e.preventDefault();

        // Se o "purposeSwitch" existir
        if(purposeSwitch){

            if(!immoAddress || (immoAddress && !immoAddress.toString().length > 70)){
                alert("Insira um logradouro válido. O logradouro não pode conter símbolos");
            }
            else if(!immoNumber || (immoNumber && !immoNumber.toString().match(/^[0-9]+$/))){
                alert("Insira um número válido. O número deve conter apenas digitos.");
            }
            else if(!immoComplement || (immoComplement && immoComplement.toString().length > 70)){
                alert("Insira um complemento válido.");
            }
            else if(!immoCEP || (immoCEP && !immoCEP.toString().match(/^[0-9]+$/)) || (immoCEP && immoCEP.toString().length > 8)){
                alert("Insira um CEP válido.");
            }
            else if(!immoDistrict || (immoDistrict && immoDistrict.toString().length > 50)){
                alert("Insira um bairro válido.");
            }
            else if(!immoCity){
                alert("Insira uma cidade válida.");
            }
            else if(!immoUF){
                alert("Insira uma cidade válida.");
            }
            else if(!immoType){
                alert("Insira um tipo de imóvel válido.");
            }
            else if(!immoArea || (immoArea && !immoArea.toString().match(/^[0-9]+$/))){
                alert("Insira uma área válida.");
            }
            else if(!immoTerrainArea || (immoTerrainArea && !immoTerrainArea.toString().match(/^[0-9]+$/))){
                alert("Insira uma área do terreno válida.");
            }
            else if(immoPark === null || immoPark === undefined || (immoPark && !immoPark.toString().match(/^[0-9]+$/))){
                alert("Insira um número de vagas válido.");
            }
            else if(immoBath === null || immoBath === undefined || (immoBath && !immoBath.toString().match(/^[0-9]+$/))){
                alert("Insira um número de banheiros válido.");
            }
            else if(immoBed === null || immoBed === undefined || (immoBed && !immoBed.toString().match(/^[0-9]+$/))){
                alert("Insira um número de dormitórios válido.");
            }
            else if(!immoPrice || (immoPrice && !immoPrice.toString().match(/^[0-9]+$/)) || immoPrice < 100){
                alert("Insira um valor válido.");
            }
            else if(!immoDescription || (immoDescription && immoDescription.toString().length < 100)){
                alert("Insira um descrição válida.");
            }
            else{
                // Se o propósito for aluguel
                if(purposeSwitch === "alugar" || purposeSwitch === "comprar"){
                    API.post('/immobile', {
                        address: immoAddress,
                        number: Number(immoNumber),
                        complement: immoComplement,
                        cep: immoCEP,
                        district: immoDistrict,
                        city: immoCity,
                        uf: immoUF.toString().toUpperCase(),
                        type: immoType,
                        immobileArea: Number(immoArea),
                        terrainArea: Number(immoTerrainArea),
                        parkNumber: immoPark ? Number(immoPark) : null,
                        bathNumber: immoBath ? Number(immoBath) : null,
                        bedNumber: immoBed ? Number(immoBed) : null,
                        price: immoPrice,
                        purpose: purposeSwitch,
                        description: immoDescription,
                        status: 1
                    })
                    .then(response => {
                        if(response.data.id){
                            console.log(response.data.id);
                            const formData = new FormData();
                            formData.append("idField", response.data.id);
                            formData.append("images", immoImages);
                            API.post('/image', formData);
                        }
                    });
                }
                // Se for um valor inválido
                else{
                    return null;
                }
            }
        }
        else{
            return null;
        }
    }

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
                                <img alt="Ilustração"/>
                            </div>
                            <div className="formRight">
                                <h2 className="formSubtitle">Conte-nos sobre o seu imóvel</h2>
                                <p className="formDescription">Proident id reprehenderit laborum non excepteur in quis adipisicing laboris nostrud enim elit. Pariatur laboris id aliqua sunt ut adipisicing sint. Quis culpa irure ullamco non qui aute ad enim. Cupidatat pariatur deserunt sint minim.</p>
                                { purposeSwitch ? (
                                    purposeSwitch === 'alugar' ?
                                    <form encType="multipart/form-data" className="registrationForm" onSubmit={e => sendData(e)}>
                                        <div className="formImages">
                                            { (imagesToDisplay && (typeof imagesToDisplay === "object" && (imagesToDisplay && imagesToDisplay.length > 0))) ?
                                                <label htmlFor="formImagesHiddenInput" className="formImagesImage">
                                                    { Array.from(imagesToDisplay).map((image, i) => (
                                                        <img key={i} src={image}/>
                                                    ))}
                                                    <div className="formImagesImageHint"><FaPlusCircle size="30%"/><p>Adicionar mais imagens</p></div>
                                                </label>
                                                :
                                                <label htmlFor="formImagesHiddenInput" className="formImagesInput"><FaPlusCircle size="30%"/><p>Adicionar imagens</p></label>
                                            }
                                            <input id="formImagesHiddenInput" onChange={e => handleImagesUpload(e)} multiple type="file"/>
                                        </div>
                                        <div className="formAddress">
                                            <label>Logradouro</label>
                                            <input value={immoAddress} onChange={e => setImmoAddress(e.target.value)} className="defaultInput" placeholder="Exemplo: Avenida Brasil" type="text" maxLength="50"/>
                                            <label>Número</label>
                                            <input value={immoNumber} onChange={e => setImmoNumber(e.target.value)} className="defaultInputNumber" placeholder="12" type="text" maxLength="5"/>
                                            <label>Complemento</label>
                                            <input value={immoComplement} onChange={e => setImmoComplement(e.target.value)} className="defaultInput" placeholder="Apto 505" type="text" maxLength="20"/>
                                            <label>CEP</label>
                                            <input value={immoCEP} onChange={e => setImmoCEP(e.target.value)} className="defaultInput" placeholder="12345678" type="text" maxLength="20"/>
                                            <label>Bairro</label>
                                            <input value={immoDistrict} onChange={e => setImmoDistrict(e.target.value)} className="defaultInput" placeholder="Mooca" type="text" maxLength="20"/>
                                            <label>Cidade</label>
                                            <input value={immoCity} onChange={e => setImmoCity(e.target.value)} className="defaultInput" placeholder="São Paulo" type="text" maxLength="20"/>
                                            <label>Estado</label>
                                            <select value={immoUF} onChange={e => setImmoUF(e.target.value)} className="defaultDropdown">
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
                                            <select value={immoType} onChange={e => setImmoType(e.target.value)} className="defaultDropdown">
                                                <option className="defaultDropdownOption" value="Casa" checked>Casa</option>
                                                <option className="defaultDropdownOption" value="Apartamento">Apartamento</option>
                                                <option className="defaultDropdownOption" value="Terreno">Terreno</option>
                                                <option className="defaultDropdownOption" value="Comercial">Comercial</option>
                                                <option className="defaultDropdownOption" value="Galpao">Galpão</option>
                                            </select>
                                        </div>
                                        <div className="formArea">
                                            <div className="formAreaLeft">
                                                <label>Área do terreno</label>
                                                <div className="formAreaInputContainer">
                                                    <input value={immoArea} onChange={e => setImmoArea(e.target.value)} className="defaultInputNumber" placeholder="400" type="text" maxLength="70"/><span className="formAreaInputContainerMeasure">m²</span>
                                                </div>
                                            </div>
                                            <div className="formAreaRight">
                                                <label>Área do imóvel</label>
                                                <div className="formAreaInputContainer">
                                                    <input value={immoTerrainArea} onChange={e => setImmoTerrainArea(e.target.value)} className="defaultInputNumber" placeholder="120" type="text" maxLength="70"/><span className="formAreaInputContainerMeasure">m²</span>
                                                </div>
                                            </div>
                                        </div>
                                        { immoType === "Casa" || immoType === "Apartamento" ?
                                            <div className="formInfos">
                                                <label>Número de vagas</label>
                                                <input value={immoPark} onChange={e => setImmoPark(e.target.value)} className="defaultInputNumber" placeholder="2" type="text" maxLength="2"/>
                                                <label>Número de banheiros</label>
                                                <input value={immoBath} onChange={e => setImmoBath(e.target.value)} className="defaultInputNumber" placeholder="3" type="text" maxLength="2"/>
                                                <label>Número de dormitórios</label>
                                                <input value={immoBed} onChange={e => setImmoBed(e.target.value)} className="defaultInputNumber" placeholder="2" type="text" maxLength="2"/>
                                            </div>
                                            :
                                            ""
                                        }
                                        <div className="formValue">
                                            <label>Valor do aluguel</label>
                                            <div className="formValueInputContainer">
                                                <input value={immoPrice} onChange={e => setImmoPrice(e.target.value)} className="defaultInputCurrency" placeholder="150000" type="text" maxLength="70"/>
                                            </div>
                                        </div>
                                        <div className="formObservation">
                                            <label>Agora, escreva a descrição, com detalhes, do seu imóvel</label>
                                            <textarea value={immoDescription} onChange={e => setImmoDescription(e.target.value)} className="registrationTextArea" placeholder="Exemplo: Imóvel sito na Zona Leste, próximo à estação do Metrõ e fácil acesso às principais rodovias. Rua movimentada e vaga de garagem coberta."></textarea>
                                        </div>
                                        <button className="registrationFormBtn">Pronto!</button>
                                    </form>
                                    :
                                    <form encType="multipart/form-data" className="registrationForm" onSubmit={e => sendData(e)}>
                                        <div className="formImages">
                                            { (imagesToDisplay && (typeof imagesToDisplay === "object" && (imagesToDisplay && imagesToDisplay.length > 0))) ?
                                                <label htmlFor="formImagesHiddenInput" className="formImagesImage">
                                                    { Array.from(imagesToDisplay).map((image, i) => (
                                                        <img key={i} src={image}/>
                                                    ))}
                                                    <div className="formImagesImageHint"><FaPlusCircle size="30%"/><p>Adicionar mais imagens</p></div>
                                                </label>
                                                :
                                                <label htmlFor="formImagesHiddenInput" className="formImagesInput"><FaPlusCircle size="30%"/><p>Adicionar imagens</p></label>
                                            }
                                            <input id="formImagesHiddenInput" onChange={e => handleImagesUpload(e)} multiple type="file"/>
                                        </div>
                                        <div className="formAddress">
                                            <label>Logradouro</label>
                                            <input value={immoAddress} onChange={e => setImmoAddress(e.target.value)} className="defaultInput" placeholder="Exemplo: Avenida Brasil" type="text" maxLength="50"/>
                                            <label>Número</label>
                                            <input value={immoNumber} onChange={e => setImmoNumber(e.target.value)} className="defaultInputNumber" placeholder="12" type="text" maxLength="5"/>
                                            <label>Complemento</label>
                                            <input value={immoComplement} onChange={e => setImmoComplement(e.target.value)} className="defaultInput" placeholder="Apto 505" type="text" maxLength="20"/>
                                            <label>CEP</label>
                                            <input value={immoCEP} onChange={e => setImmoCEP(e.target.value)} className="defaultInput" placeholder="12345678" type="text" maxLength="20"/>
                                            <label>Bairro</label>
                                            <input value={immoDistrict} onChange={e => setImmoDistrict(e.target.value)} className="defaultInput" placeholder="Mooca" type="text" maxLength="20"/>
                                            <label>Cidade</label>
                                            <input value={immoCity} onChange={e => setImmoCity(e.target.value)} className="defaultInput" placeholder="São Paulo" type="text" maxLength="20"/>
                                            <label>Estado</label>
                                            <select value={immoUF} onChange={e => setImmoUF(e.target.value)} className="defaultDropdown">
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
                                            <select value={immoType} onChange={e => setImmoType(e.target.value)} className="defaultDropdown">
                                                <option className="defaultDropdownOption" value="Casa" checked>Casa</option>
                                                <option className="defaultDropdownOption" value="Apartamento">Apartamento</option>
                                                <option className="defaultDropdownOption" value="terreno">Terreno</option>
                                                <option className="defaultDropdownOption" value="comercial">Comercial</option>
                                                <option className="defaultDropdownOption" value="galpao">Galpão</option>
                                            </select>
                                        </div>
                                        <div className="formArea">
                                            <div className="formAreaLeft">
                                                <label>Área do terreno</label>
                                                <div className="formAreaInputContainer">
                                                    <input value={immoTerrainArea} onChange={e => setImmoTerrainArea(e.target.value)} className="defaultInputNumber" placeholder="400" type="text" maxLength="70"/><span className="formAreaInputContainerMeasure">m²</span>
                                                </div>
                                            </div>
                                            <div className="formAreaRight">
                                                <label>Área do imóvel</label>
                                                <div className="formAreaInputContainer">
                                                    <input value={immoArea} onChange={e => setImmoArea(e.target.value)} className="defaultInputNumber" placeholder="120" type="text" maxLength="70"/><span className="formAreaInputContainerMeasure">m²</span>
                                                </div>
                                            </div>
                                        </div>
                                        { immoType === "Casa" || immoType === "Apartamento" ?
                                            <div className="formInfos">
                                                <label>Número de vagas</label>
                                                <input value={immoPark} onChange={e => setImmoPark(e.target.value)} className="defaultInputNumber" placeholder="2" type="text" maxLength="2"/>
                                                <label>Número de banheiros</label>
                                                <input value={immoBath} onChange={e => setImmoBath(e.target.value)} className="defaultInputNumber" placeholder="3" type="text" maxLength="2"/>
                                                <label>Número de dormitórios</label>
                                                <input value={immoBed} onChange={e => setImmoBed(e.target.value)} className="defaultInputNumber" placeholder="2" type="text" maxLength="2"/>
                                            </div>
                                            :
                                            ""
                                        }
                                        <div className="formValue">
                                            <label>Valor da venda</label>
                                            <div className="formValueInputContainer">
                                                <input value={immoPrice} onChange={e => setImmoPrice(e.target.value)} className="defaultInputCurrency" placeholder="150000" type="text" maxLength="70"/>
                                            </div>
                                        </div>
                                        <div className="formObservation">
                                            <label>Agora, escreva a descrição, com detalhes, do seu imóvel</label>
                                            <textarea value={immoDescription} onChange={e => setImmoDescription(e.target.value)} className="registrationTextArea" placeholder="Exemplo: Imóvel sito na Zona Leste, próximo à estação do Metrõ e fácil acesso às principais rodovias. Rua movimentada e vaga de garagem coberta."></textarea>
                                        </div>
                                        <button className="registrationFormBtn">Pronto!</button>
                                    </form>
                                )
                                :
                                (
                                    <div>
                                        <div className="purposeTitleContainer">
                                            <h3 className="purposeTitle">O que você deseja?</h3>
                                        </div>
                                        <div className="purposeOptionsContainer">
                                            <div className="purposeOptionsLeft">
                                                <img className="purposeOptioncomprar" onClick={() => setPurposeSwitch("comprar")} alt="Vender"/>
                                            </div>
                                            <div className="purposeOptionsLeft">
                                                <img className="purposeOptionalugar" onClick={() => setPurposeSwitch("alugar")} alt="Alugar"/>
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