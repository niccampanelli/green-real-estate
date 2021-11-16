import React, { Fragment, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "./style.css";

export default function Auth() {

    const [authState, setAuthState] = useState(false);
    
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [telValue, setTelValue] = useState("");
    const [tel2Value, setTel2Value] = useState("");

    function authenticate(e){
        e.preventDefault();

        if(authState){
            if(!emailValue){
                if(passwordValue){

                }
                else{
                    alert("Insira a senha");
                }
            }
            else{
                alert("Insira o email");
            }
        }
        else{
            if(nameValue && nameValue.length >= 5){
                if(emailValue && emailValue.length >= 9 && emailValue.includes("@", 0) && emailValue.includes(".", 0)){
                    if(telValue && telValue.length >= 10){
                        if(passwordValue && passwordValue.match(/^[0-9a-zA-Z]+$/)){
                            if(passwordValue.search(/[a-z]/) < 0 && passwordValue.search(/[A-Z]/) < 0 && passwordValue.search(/[0-9]/)){
                                
                            }
                            else{
                                alert("Sua senha precisa conter letras maiúsculas, minúsculas e numeros.")
                            }
                        }
                        else{
                            alert("Insira a senha.")
                        }
                    }
                    else{
                        alert("Insira o telefone.")
                    }
                }
                else[
                    alert("Insira o email.")
                ]
            }
            else{
                alert("Insira o nome.")
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
                                    <label for="authFormEmailInput" className="authFormLabel">Endereço de Email*</label>
                                    <input id="authFormEmailInput" className="defaultInput" value={emailValue} onChange={e => setEmailValue(e.target.value)} type="email" placeholder="exemplo@email.com"/>
                                </div>
                                <div className="authFormContainer">
                                    <label for="authFormPasswordInput" className="authFormLabel">Senha*</label>
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
                                    <label for="authFormNameInput" className="authFormLabel">Nome*</label>
                                    <input id="authFormNameInput" className="defaultInput" value={nameValue} onChange={e => setNameValue(e.target.value)} type="text" placeholder="Digite seu nome completo."/>
                                </div>
                                <div className="authFormContainer">
                                    <label for="authFormEmailInput" className="authFormLabel">Endereço de Email*</label>
                                    <input id="authFormEmailInput" className="defaultInput" value={emailValue} onChange={e => setEmailValue(e.target.value)} type="email" placeholder="exemplo@email.com"/>
                                </div>
                                <div className="authFormContainer">
                                    <label for="authFormTelInput" className="authFormLabel">Telefone de Contato*</label>
                                    <input id="authFormTelInput" className="defaultInput" value={telValue} onChange={e => setTelValue(e.target.value)} type="tel" placeholder="(DDD) 00000-0000"/>
                                </div>
                                <div className="authFormContainer">
                                    <label for="authFormTel2Input" className="authFormLabel">Telefone de Contato Secundário</label>
                                    <input id="authFormTel2Input" className="defaultInput" value={tel2Value} onChange={e => setTel2Value(e.target.value)} type="tel" placeholder="(DDD) 00000-0000."/>
                                </div>
                                <div className="authFormContainer">
                                    <label for="authFormPasswordInput" className="authFormLabel">Senha*</label>
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