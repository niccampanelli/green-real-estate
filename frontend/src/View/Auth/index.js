import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import API from "../../Services/API";
import "./style.css";

export default function Auth() {

    const location = useLocation();
    const history = useHistory();

    const origin = location.state.origin;

    const [authState, setAuthState] = useState( (location.state.authState !== undefined) ? location.state.authState : false );
    
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [telValue, setTelValue] = useState("");
    const [tel2Value, setTel2Value] = useState("");

    useEffect(() => {
        if(location.state.authState !== undefined){
            setAuthState(location.state.authState);
        }
    }, [location.state.authState])

    async function authenticate(e){
        e.preventDefault();

        if(authState){
            // Se não tiver o email OU se tiver o email e o comprimento for menor que 9 OU se tiver o email e não tiver um @ OU se tiver o email e não tiver um ponto
            if(!emailValue || (emailValue && emailValue.toString().length < 9) || (emailValue && !emailValue.toString().includes("@", 0)) || (emailValue && !emailValue.toString().includes(".", 0))){
                alert("Insira um email válido.")
            }
            // Se não tiver a senha OU se tiver a senha e não for apenas letras e numeros OU se tiver a senha e não tiver letras minúsculas OU se tiver a senha e não tiver letras maiúsculas OU se tiver a senha e não tiver números
            else if(!passwordValue || (passwordValue && !passwordValue.toString().match(/^[0-9a-zA-Z]+$/)) || (passwordValue && passwordValue.toString().search(/[a-z]/) === -1) || (passwordValue && passwordValue.toString().search(/[A-Z]/) === -1) || (passwordValue && passwordValue.toString().search(/[0-9]/) === -1)){
                alert("Insira uma senha válida.")
            }
            else{
                await API.post("/auth", {
                    email: emailValue.toLowerCase(),
                    credential: passwordValue
                }).then(() => {

                    if(origin){
                        history.push(origin);
                    }
                    else{
                        history.push("/");
                    }

                }).catch(e => {
                    console.error(e);
                });
            }
        }
        else{
            // Se não tiver o nome OU se tiver o nome e o comprimento for menor que 6 OU se tiver o nome e o nome contiver numeros
            if(!nameValue || (nameValue && nameValue.toString().length < 6) || (nameValue && nameValue.toString().search(/[0-9]/) !== -1)){
                alert("Insira um nome e sobrenome válidos.")
            }
            // Se não tiver o email OU se tiver o email e o comprimento for menor que 9 OU se tiver o email e não tiver um @ OU se tiver o email e não tiver um ponto
            else if(!emailValue || (emailValue && emailValue.toString().length < 9) || (emailValue && !emailValue.toString().includes("@", 0)) || (emailValue && !emailValue.toString().includes(".", 0))){
                alert("Insira um email válido.")
            }
            // Se não tiver o telefone OU se tiver o telefone e o comprimento for menor que 10 OU se tiver o telefone e não for só numeros
            else if(!telValue || (telValue && telValue.toString().length < 10) || (telValue && !telValue.toString().match(/^[0-9]+$/))){
                alert("Insira um telefone válido.")
            }
            // Se tiver o telefone2 e o comprimento for menor que 10 OU se tiver o telefone e não for só numeros
            else if((tel2Value && tel2Value.toString().length < 10) || (tel2Value && !tel2Value.toString().match(/^[0-9]+$/))){
                alert("Insira um telefone secundário válido.")
            }
            // Se não tiver a senha OU se tiver a senha e não for apenas letras e numeros OU se tiver a senha e não tiver letras minúsculas OU se tiver a senha e não tiver letras maiúsculas OU se tiver a senha e não tiver números
            else if(!passwordValue || (passwordValue && !passwordValue.toString().match(/^[0-9a-zA-Z]+$/)) || (passwordValue && passwordValue.toString().search(/[a-z]/) === -1) || (passwordValue && passwordValue.toString().search(/[A-Z]/) === -1) || (passwordValue && passwordValue.toString().search(/[0-9]/) === -1)){
                alert("Insira uma senha válida.")
            }
            else{
                await API.post("/user", {
                    name: nameValue,
                    email: emailValue.toLowerCase(),
                    tel: telValue,
                    tel2: tel2Value,
                    credential: passwordValue
                }).then(response => {

                    console.log(response.body);

                }).catch(e => {
                    if(e.response.data === "EMAIL_IN_USE"){
                        alert("Email em uso.");
                    }
                });
            }
        }
    }

    return(
        <Fragment>
            <Header/>
            <main>
                <section className="authMain">
                    <aside className="authIllustration"></aside>
                    <div className="authCard">
                        { authState ?
                            <form className="authForm" onSubmit={e => authenticate(e)}>
                                <h1 className="authFormTitle">Login</h1>
                                <div className="authFormContainer">
                                    <label htmlFor="authFormEmailInput" className="authFormLabel">Endereço de Email*</label>
                                    <input id="authFormEmailInput" className="defaultInput" value={emailValue} onChange={e => setEmailValue(e.target.value)} type="email" placeholder="exemplo@email.com"/>
                                </div>
                                <div className="authFormContainer">
                                    <label htmlFor="authFormPasswordInput" className="authFormLabel">Senha*</label>
                                    <input id="authFormPasswordInput" className="defaultInput" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} type="password" placeholder="Digite sua senha."/>
                                </div>
                                <p className="authFormHint">Os campos com * são obrigatórios.</p>
                                <button className="authFormSubmit" type="submit">Fazer Login</button>
                                <p className="authFormSwitch" onClick={() => setAuthState(!authState)}>Ainda não possui cadastro? <strong>Cadastre-se aqui.</strong></p>
                            </form>
                            :
                            <form className="authForm" onSubmit={e => authenticate(e)}>
                                <h1 className="authFormTitle">Cadastro</h1>
                                <div className="authFormContainer">
                                    <label htmlFor="authFormNameInput" className="authFormLabel">Nome Completo*</label>
                                    <input id="authFormNameInput" className="defaultInput" value={nameValue} onChange={e => setNameValue(e.target.value)} type="text" placeholder="Digite seu nome completo."/>
                                </div>
                                <div className="authFormContainer">
                                    <label htmlFor="authFormEmailInput" className="authFormLabel">Endereço de Email*</label>
                                    <input id="authFormEmailInput" className="defaultInput" value={emailValue} onChange={e => setEmailValue(e.target.value)} type="email" placeholder="exemplo@email.com"/>
                                </div>
                                <div className="authFormContainer">
                                    <label htmlFor="authFormTelInput" className="authFormLabel">Telefone de Contato*</label>
                                    <input id="authFormTelInput" className="defaultInput" value={telValue} onChange={e => setTelValue(e.target.value)} type="tel" placeholder="(DDD) 00000-0000"/>
                                </div>
                                <div className="authFormContainer">
                                    <label htmlFor="authFormTel2Input" className="authFormLabel">Telefone de Contato Secundário</label>
                                    <input id="authFormTel2Input" className="defaultInput" value={tel2Value} onChange={e => setTel2Value(e.target.value)} type="tel" placeholder="(DDD) 00000-0000."/>
                                </div>
                                <div className="authFormContainer">
                                    <label htmlFor="authFormPasswordInput" className="authFormLabel">Senha*</label>
                                    <input id="authFormPasswordInput" className="defaultInput" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} type="password" placeholder="Crie uma senha."/>
                                </div>
                                <p className="authFormHint">Os campos com * são obrigatórios. A senha deve conter letras maiúsculas, minúsculas e números.</p>
                                <button className="authFormSubmit" type="submit">Cadastrar-se</button>
                                <p className="authFormSwitch" onClick={() => setAuthState(!authState)}>Já está cadastrado? <strong>Faça login aqui.</strong></p>
                            </form>
                        }
                    </div>
                </section>
            </main>
            <Footer/>
        </Fragment>
    );
}