import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import BudgetApp from "./pages/budget";

function App() {
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
