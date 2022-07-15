import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { IncExpContainer, Money } from "./IncomeExpensesElements";
import { TitleH4 } from "../TitleText/TitleTextElements";

//Money formatter function
function moneyFormatter(num) {
   let p = num.toFixed(2).split(".");
   return (
      "$ " +
      p[0]
         .split("")
         .reverse()
         .reduce(function (acc, num, i, orig) {
            return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
         }, "") +
      "." +
      p[1]
   );
}

const IncomeExpenses = () => {
   const { transactions } = useContext(GlobalContext);

   const amounts = transactions.map((transaction) => transaction.amount);

   const income = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += item), 0);

   const expense =
      amounts
         .filter((item) => item < 0)
         .reduce((acc, item) => (acc += item), 0) * -1;

   return (
      <IncExpContainer className="inc-exp-container">
         <div>
            <TitleH4>Income</TitleH4>
            <Money id="money-plus" className="money plus">
               {moneyFormatter(income)}
            </Money>
         </div>
         <div>
            <TitleH4>Expenses</TitleH4>
            <Money id="money-minus" className="money minus">
               {moneyFormatter(expense)}
            </Money>
         </div>
      </IncExpContainer>
   );
};

export default IncomeExpenses;
