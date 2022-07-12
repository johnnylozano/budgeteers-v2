import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages";
import BudgetApp from "./pages/budget";

function App() {
   // const navigate = useNavigate();

   // const navigateToApp = () => {
   //    navigate("/budget-calculator", { replace: true });
   // };

   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/budget-calculator" element={<BudgetApp />} exact />
         </Routes>
      </Router>
   );
}

export default App;
