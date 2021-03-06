import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { TitleH1, TitleH4 } from "../TitleText/TitleTextElements";

//Money formatter function
function moneyFormatter(num) {
   let p = num.toFixed(2).split(".");
   return (
      "$ " +
      (p[0].split("")[0] === "-" ? "-" : "") +
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

export const Balance = () => {
   const { transactions } = useContext(GlobalContext);

   const amounts = transactions.map((transaction) => transaction.amount);

   const total = amounts.reduce((acc, item) => (acc += item), 0);

   return (
      <>
         <TitleH4 className="balance">Your Balance</TitleH4>
         <TitleH1 className="total">{moneyFormatter(total)}</TitleH1>
      </>
   );
};
