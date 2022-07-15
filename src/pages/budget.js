import React from "react";
import "../appcomponents/budget.css";
import BudgetNav from "../components/BudgetNav";
import TitleText from "../appcomponents/TitleText";
import { Container } from "../appcomponents/ContainerElement";
import { Balance } from "../appcomponents/Balance";
import IncomeExpenses from "../appcomponents/IncomeExpenses";
import TransactionList from "../appcomponents/TransactionList";
import { GlobalProvider } from "../context/GlobalState";
import { AddTransaction } from "../appcomponents/AddTransaction";

const BudgetApp = () => {
   return (
      <>
         <BudgetNav />
         <GlobalProvider>
            <TitleText />
            <Container className="container">
               <Balance />
               <IncomeExpenses />
               <TransactionList />
               <AddTransaction />
            </Container>
         </GlobalProvider>
      </>
   );
};

export default BudgetApp;
