import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import './login.css'; // Certifique-se de que o arquivo App.css está na mesma pasta que o componente
import login_squares from "../../assets/login_squares.svg";
import login_logo from "../../assets/login_logo.svg"

const Login = () => {
  const [email, setEmail] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

const habilitaBotao = () => {

  const regexEmail = /^[a-zA-Z0-9._-]+@(upe\.br|poli\.br)$/;

  if(regexEmail.test(email)) {
    setIsButtonDisabled(false);
  } else {
    setIsButtonDisabled(true);
  }
};

const funcaoGoogle = () => {
  return;
} 

const entrar = () => {
  return;
}

  return (
    <div className="container">
      <img className="img-squares" src={login_squares} alt="login_squares"/>
      <div className="wrap-login">
        <span className="login-tittle">UPE / FMDEV</span>
        <img className="img-logo" src={login_logo} alt="FMDEV" />

        <div className="wrap-input">
          <input
            className="email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              habilitaBotao();
            }}
          />
          <span className="focus-input" data-aria-placeholder="E-mail"></span>

          <div className="wrap-button">
            {/* Botão que será substituído pelo botão do Google da API do Firebase */}
            <div className="wrap-input google-autentication-btn">
              <button
                type="submit"
                onClick={() => funcaoGoogle()}
                className="autentication-btn"
              >
                Sign in with Google
              </button>
              <p id="mensagem"></p>
            </div>

            <div className="wrap-input">
              <button
                type="submit"
                onClick={() => entrar()}
                className="enter-btn"
                disabled={isButtonDisabled}
              >
                Entrar na plataforma
              </button>
            </div>
          </div>
        </div>
      </div>
      <img className="img-squares" src={login_squares} alt="login_squares" />
    </div>
  );
}

export default Login;