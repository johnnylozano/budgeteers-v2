import React from "react";
import { FaBars } from "react-icons/fa";
import { GiPirateFlag } from "react-icons/gi";
import {
   Nav,
   NavbarContainer,
   NavLogo,
   MobileIcon,
   NavMenu,
   NavItem,
   NavLinks,
   NavBtn,
   NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
   return (
      <>
         <Nav>
            <NavbarContainer>
               <NavLogo to="/">
                  <GiPirateFlag size={30} />
                  <div>Budgeteers</div>
               </NavLogo>
               <MobileIcon onClick={toggle}>
                  <FaBars />
               </MobileIcon>
               <NavMenu>
                  <NavItem>
                     <NavLinks to="about">About</NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks to="discover">Discover</NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks to="services">Services</NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks to="signup">Sign Up</NavLinks>
                  </NavItem>

                  <NavBtn>
                     <NavBtnLink to="/budget-calculator">Manage</NavBtnLink>
                  </NavBtn>
               </NavMenu>
            </NavbarContainer>
         </Nav>
      </>
   );
};

export default Navbar;
