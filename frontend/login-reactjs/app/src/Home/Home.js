import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Certifique-se de que o arquivo App.css está na mesma pasta que o componente

const Home = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [corMensagemErro, setCorMensagemErro] = useState('');

function validarEmail(email) {
  const regexEmail = /^[a-zA-Z0-9._-]+@(upe\.br|poli\.br)$/;
  return regexEmail.test(email);
}

function verificarEmail() {
  if (validarEmail(email)) {
    setMensagemErro('Email válido!');
    setCorMensagemErro('green');
  } else {
    setMensagemErro("O e-mail deve ser '@upe.br' ou '@poli.br'.");
    setCorMensagemErro('red');
  }
}

  return (
    <div className="container">
      <div className="container-login-externo">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-tittle">UPE / FMDEV</span>
            <span className="login-form-tittle">LOGIN</span>
            
            <div className="container-login-interno">
              <div className="wrap-input">
                <input
                  className="input"
                  type="email"
                  placeholder="E-mail"
                  id="email"
                  title="O e-mail deve ser '@upe.br' ou '@poli.br'."
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input" data-aria-placeholder="E-mail"></span>
                <p id="mensagem-erro" style={{ color: corMensagemErro }}>{mensagemErro}</p>
              </div>

              <div className="wrap-input">
                <input
                  className="input"
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
                <span className="focus-input" data-aria-placeholder="Senha"></span>
              </div>

              <div className="wrap-input container-entrar-form-btn">
                <input type="submit" onClick={verificarEmail} className="entrar-form-btn" />
              </div>

              <nav className="rodape">
                <Link className="rodape1" to="/recuperasenha">Esqueci minha senha</Link>
              </nav>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;