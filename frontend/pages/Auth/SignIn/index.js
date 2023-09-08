import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import './login.css'; 
import { bindActionCreators } from 'redux';
import login_squares from "../../../assets/login_squares.svg";
import { Creators as AuthActions } from '../../../store/ducks/auth';
import login_logo from "../../../assets/login_logo.svg"
import { signInWithGoogle } from '../../../Firebase'

const SignIn = () => {
  const [emailInput, setEmail] = useState('');
  const [buttonText, setButtonText] = useState('Testar E-mail');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useHistory();
  

  const mensagemErro = (texto) => {
    const novaMensagemErro = document.createElement('p');
    const mensagem = `
      <p style='color: red;'>${texto}</p>
      `;
      novaMensagemErro.innerHTML = mensagem;

      return novaMensagemErro;
  }
  
 

  const testaEmail = (e) => {
    e.preventDefault();

    const email =  localStorage.getItem('email'); 
    const index = email.indexOf('@');

    if (index === -1 || (email.substring(index) !== '@poli.br' && email.substring(index) !== '@upe.br' && email.substring(index) !== '@ecomp.poli.br')) {
      
      setEmail(email);
      const error = mensagemErro(
        "O e-mail deve ser '@upe.br' ou '@poli.br'."
      );
      document.querySelector('.resultado').appendChild(error);
      setButtonText('E-mail Recusado');
      setIsButtonDisabled(true);
    } else {
      
      setEmail(email);
      setButtonText('Entrar na Plataforma');

      if(document.querySelector('.enter-btn').addEventListener("click", function () {
         /* Em navigate se passará o caminho do FMDEV -> que precisará ser antes adicionada a 'routes.js' */
         
        
         
         navigate.push('/Login');
        //useHistory('');
      })){}
    }
    

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
            value={emailInput}
            onChange={(e) => {
              setEmail(e.target.value);
              testaEmail();
            }}
            disabled
          />
          <span className="focus-input" data-aria-placeholder="E-mail"></span>
          <p className="resultado"></p>

          <div className="wrap-button">
            <div className="wrap-input google-autentication-btn">
              <button
                onClick={signInWithGoogle}
                class="login-with-google-btn"
              >
                Sign In With Google
              </button>
            </div>

            <div className="wrap-input">
              <button
                type="submit"
                className="enter-btn"
                onClick={testaEmail}
                disabled={isButtonDisabled}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
      <img className="img-squares" src={login_squares} alt="login_squares" />
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SignIn);
