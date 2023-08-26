import React from 'react';
import Login from "../components/login/login";
import Home from "../components/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const AppRoutes = () => {
   return(
       <Router>
            <Routes>
                <Route path="/" element = { <Login/> }></Route>
                <Route path="/home" element = { <Home/> }></Route>
            </Routes>
       </Router>
   )
}

export default AppRoutes;