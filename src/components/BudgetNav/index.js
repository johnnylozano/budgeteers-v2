import React from "react";
import { GiPirateFlag } from "react-icons/gi";
import {
   Nav,
   NavbarContainer,
   NavLogo,
   NavBtnLink,
   NavBtn,
} from "./BudgetNavElements";

const BudgetNav = () => {
   return (
      <>
         <Nav>
            <NavbarContainer>
               <NavLogo to="/">
                  <GiPirateFlag size={30} />
                  <div>Budgeteers</div>
               </NavLogo>
               <NavBtn>
                  <NavBtnLink to="/">Back to Home</NavBtnLink>
               </NavBtn>
            </NavbarContainer>
         </Nav>
      </>
   );
};

export default BudgetNav;
