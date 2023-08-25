import React from 'react';
import Login from "../components/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const AppRoutes = () => {
   return(
       <Router>
            <Routes>
                <Route path="/" element = { <Login/> }></Route>
            </Routes>
       </Router>
   )
}

export default AppRoutes;