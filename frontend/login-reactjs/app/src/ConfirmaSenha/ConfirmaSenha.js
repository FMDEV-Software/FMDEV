import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmaSenha.css';

const ConfirmaSenha = () => {
  const [senha1, setSenha1] = useState('');
  const [senha2, setSenha2] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const navigate = useNavigate();
  
  const logar = () => {
    if (senha1 !== '' && senha2 !== '') {
      if (senha1 === senha2) {
        alert('Sucesso');
        navigate('/');
      } else {
        setMensagemErro("A senha deve ser a mesma nos dois campos.");
      }
    } else {
      setMensagemErro("Os campos não podem estar vazios.");
    }
  };

  return (
    <div className="container">
      <span className="recuperacao-form-tittle">Atualização de senha</span>
              
      <div className="container-recuperacao-interno">
        <p>{mensagem1}</p>
        <input
          className="input"
          type="password"
          placeholder="Senha"
          value={senha1}
          onChange={(e) => setSenha1(e.target.value)}
          autoFocus
          required
        />

        <p>{mensagem2}</p>
        <input
          className="input"
          type="password"
          placeholder="Senha"
          value={senha2}
          onChange={(e) => setSenha2(e.target.value)}
          required
        />
        <p style={{ color: 'red' }}>{mensagemErro}</p>

        <div className="container-entrar-form-btn">
          <input type="submit" onClick={logar} className="entrar-form-btn" />
        </div>
      </div>
    </div>
  );
}

const mensagem1 = (
  <p style={{ fontSize: '20px', color: '#000', marginTop: '10px', marginBottom: '10px', lineHeight: '2' }}>
    Digite a nova senha.
  </p>
);

const mensagem2 = (
  <p style={{ fontSize: '20px', color: '#000', marginTop: '10px', marginBottom: '10px', lineHeight: '2' }}>
    Confirme a nova senha.
  </p>
);

export default ConfirmaSenha;
