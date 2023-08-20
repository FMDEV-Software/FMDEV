import React from 'react';
import Home from "../Home/Home";
import RecuperaSenha from "../RecuperaSenha/RecuperaSenha";
import ConfirmaSenha from "../ConfirmaSenha/ConfirmaSenha";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const AppRoutes = () => {
   return(
       <Router>
            <Routes>
                <Route path="/" element = { <Home/> }></Route>
                <Route path="/recuperasenha" element = { <RecuperaSenha/> }></Route>
                <Route path="/confirmasenha" element = { <ConfirmaSenha/> }></Route>
            </Routes>
       </Router>
   )
}

export default AppRoutes;