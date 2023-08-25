import React from 'react';
import Home from "../Home/Home";
import RecuperaSenha from "../RecuperaSenha/RecuperaSenha";
import ConfirmaSenha from "../ConfirmaSenha/ConfirmaSenha";
import Dados from '../Dados/Dados';
import CsvHolder from '../CsvHolder/CsvHolder';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CadastroDev from '../CadastroDev';
import LoginDev from '../LoginDev';

const AppRoutes = () => {
   return(
       <Router>
            <Routes>
                <Route path="/" element = { <Home/> }></Route>
                <Route path="/recuperasenha" element = { <RecuperaSenha/> }></Route>
                <Route path="/confirmasenha" element = { <ConfirmaSenha/> }></Route>
                <Route path="/dados" element = { <Dados/> }></Route>

                <Route exact path="/dados/alunos" element = { <CsvHolder tipo="Alunos"/> }></Route>
                <Route exact path="/dados/tccs" element = { <CsvHolder tipo="TCC's"/> }></Route>
                <Route exact path="/dados/artigos" element = { <CsvHolder tipo="Artigos Científicos"/> }></Route>
                <Route exact path="/dados/professores" element = { <CsvHolder tipo="Professores"/> }></Route>

                <Route path="/cadastro" element = { <CadastroDev/> }></Route>
                <Route path="/logdev" element = { <LoginDev/> }></Route>
            </Routes>
       </Router>
   )
}

export default AppRoutes;