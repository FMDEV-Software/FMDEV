import React from 'react';
import Home from "../Home/Home";
import RecuperaSenha from "../RecuperaSenha/RecuperaSenha";
import ConfirmaSenha from "../ConfirmaSenha/ConfirmaSenha";
import Dados from '../Dados/Dados';
import CsvHolder from '../CsvHolder/CsvHolder';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const AppRoutes = () => {
   return(
       <Router>
            <Routes>
                <Route path="/" element = { <Home/> }></Route>
                <Route path="/recuperasenha" element = { <RecuperaSenha/> }></Route>
                <Route path="/confirmasenha" element = { <ConfirmaSenha/> }></Route>
                <Route path="/dados" element = { <Dados/> }></Route>

                <Route path="/dados/alunos" element = { <CsvHolder tipo="Alunos"/> }></Route>
                <Route path="/dados/tccs" element = { <CsvHolder tipo="TCC's"/> }></Route>
                <Route path="/dados/artigos" element = { <CsvHolder tipo="Artigos Científicos"/> }></Route>
                <Route path="/dados/professores" element = { <CsvHolder tipo="Professores"/> }></Route>
            </Routes>
       </Router>
   )
}

export default AppRoutes;