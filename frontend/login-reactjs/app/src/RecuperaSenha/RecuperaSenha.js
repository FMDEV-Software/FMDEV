import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecuperaSenha.css'; // Certifique-se de que o arquivo de estilos está na mesma pasta que o componente

const RecuperaSenha = () => {
  const [email, setEmail] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [corMensagemErro, setCorMensagemErro] = useState('');
  const navigate = useNavigate();


  function validarEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._-]+@(upe\.br|poli\.br)$/;
    return regexEmail.test(email);
  }

  const verificarEmail = async () => {

    if (validarEmail(email)) {
      setMensagemErro('Email válido!');
      setCorMensagemErro('green');
      navigate('/confirmasenha');
    } else {
      setMensagemErro("O e-mail deve ser '@upe.br' ou '@poli.br'.");
      setCorMensagemErro('red');
    }
  }

  return (
    <div className="container">
      <span className="recuperacao-form-tittle">Esqueci minha senha</span>
              
      <div className="container-recuperacao-interno">
        <p id="mensagem">
          Preencha com seu E-mail de Login e iremos enviar um link para você recuperar o acesso a sua conta.
        </p>
        <input
          className="input"
          type="email"
          placeholder="E-mail"
          id="email"
          title="O e-mail deve ser '@upe.br' ou '@poli.br'."
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="focus-input" data-aria-placeholder="E-mail"></span>
        <p id="mensagem-erro" style={{ color: corMensagemErro }}>{mensagemErro}</p>

        <div className="container-entrar-form-btn">
          <input
            type="submit"
            onClick={verificarEmail}
            className="entrar-form-btn"
          />
        </div>
      </div>
    </div>
  );
}

export default RecuperaSenha;
