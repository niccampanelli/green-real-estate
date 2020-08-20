import React, { useState } from 'react';
import { FiLock, FiUser, FiMail } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import './styles.css';
import Logo from '../../logo.jpg';
import {ReactComponent as LoginIllustration} from '../../assets/loginIllustration.svg';

export default function Login(){

    const history = useHistory();

    const gotData = (history.location.state);

    const [isNewUser, setIsNewUser] = useState(gotData.isNewUser);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [canSubmit, setCanSubmit] = useState(true);

    function submitButton(){

        const nameInput = document.getElementById("nameInput");
        const emailInput = document.getElementById("emailInput");
        const passwordInput = document.getElementById("passwordInput");

        if(emailInput.value !== "" && passwordInput.value !== ""){
            if(emailInput.value.toLowerCase().includes("@")){
                if(emailInput.value.toLowerCase().indexOf(".") > emailInput.value.toLowerCase().indexOf("@")){
                    setCanSubmit(false);
                }
                else{
                    setCanSubmit(true);
                }
            }
            else{
                setCanSubmit(true);
            }
        }
        else{
            setCanSubmit(true);
        }
    }

    function submitLogin(e){
        e.preventDefault();


    }

    return(
        <div>
            <main className="loginSection">
                <div onClick={() => history.push('/')} className="loginSectionLogoDiv">
                    <img className="logoImage" src={Logo} alt="Logotipo"/>
                </div>
                <LoginIllustration className="loginIllustration"/>
                <div className="loginFormSection">

                    {isNewUser ?

                    <div>
                        <h1 className="loginFormTitle">Crie uma conta!</h1>
                        <h2 className="loginFormSubTitle">Com uma conta, fica mais fácil entrar em contato conosco sobre um imóvel e usar nossos serviços.</h2>
                        <form className="loginForm">
                            <div className="loginFormInputs">
                                <div className="loginFormInput">
                                    <label for="nameInput" className="nameInputIcon"><FiUser color={"#00c489"} size={"2.5vh"}/></label>
                                    <input value={name} onInput={function(e){setName(e.target.value); submitButton()}} id="nameInput" className="nameInput" placeholder="Nome Completo"/>
                                </div>
                                <div className="loginFormInput">
                                    <label for="emailInput" className="emailInputIcon"><FiMail color={"#00c489"} size={"2.5vh"}/></label>
                                    <input value={email} onInput={function(e){setEmail(e.target.value); submitButton()}} id="emailInput" type="email" className="emailInput" placeholder="Seu email"/>
                                </div>
                                <div className="loginFormInput">
                                    <label for="passwordInput" className="passwordInputIcon"><FiLock color={"#00c489"} size={"2.5vh"}/></label>
                                    <input value={senha} onInput={function(e){setSenha(e.target.value); submitButton()}} id="passwordInput" type="password" className="passwordInput" placeholder="Crie uma senha"/>
                                </div>
                            </div>
                            <button type="submit" className="loginSubmit" disabled={canSubmit} id="loginSubmit">Cadastrar</button>
                        </form>
                        <h2 className="notSigned">Já está cadastrado?<h2 className="notSignedLink" onClick={() => setIsNewUser(!isNewUser)}> Entre na sua conta!</h2></h2>
                    </div>

                    :
                    
                    <div>
                        <h1 className="loginFormTitle">Bem vindo de volta!</h1>
                        <h2 className="loginFormSubTitle">Acesse a sua conta com seu endereço de email e senha.</h2>
                        <form className="loginForm">
                            <div className="loginFormInputs">
                                <div className="loginFormInput">
                                    <label for="emailInput" className="emailInputIcon"><FiMail color={"#00c489"} size={"2.5vh"}/></label>
                                    <input value={email} onInput={function(e){setEmail(e.target.value); submitButton()}} id="emailInput" type="email" className="emailInput" placeholder="Email"/>
                                </div>
                                <div className="loginFormInput">
                                    <label for="passwordInput" className="passwordInputIcon"><FiLock color={"#00c489"} size={"2.5vh"}/></label>
                                    <input value={senha} onInput={function(e){setSenha(e.target.value); submitButton()}} id="passwordInput" type="password" className="passwordInput" placeholder="Senha"/>
                                </div>
                            </div>
                            <div className="loginFormRemember">
                                <input type="checkbox" className="loginFormRememberCheckbox" id="loginFormRememberCheckbox"/>
                                <label for="loginFormRememberCheckbox" className="loginFormRememberText">Mantenha-me conectado.</label>
                            </div>
                            <button type="submit" className="loginSubmit" disabled={canSubmit} id="loginSubmit">Entrar</button>
                        </form>
                        <div className="notSignedDiv"><h2 className="notSigned">Ainda não tem uma conta?</h2><h2 className="notSignedLink" onClick={() => setIsNewUser(!isNewUser)}> Crie uma agora!</h2></div>
                    </div>
                    }
                </div>
            </main>
        </div>
    )
}