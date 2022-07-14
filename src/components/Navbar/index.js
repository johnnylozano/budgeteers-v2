import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { GiPirateFlag } from "react-icons/gi";
import { animateScroll as scroll } from "react-scroll";
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
   const [scrollNav, setScrollNav] = useState(false);

   const changeNav = () => {
      if (window.scrollY >= 80) {
         setScrollNav(true);
      } else {
         setScrollNav(false);
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", changeNav);
   }, []);

   const scrollHome = () => {
      scroll.scrollToTop();
   };

   return (
      <>
         <Nav scrollNav={scrollNav}>
            <NavbarContainer>
               <NavLogo to="/" onClick={scrollHome}>
                  <GiPirateFlag size={30} />
                  <div>Budgeteers</div>
               </NavLogo>
               <MobileIcon onClick={toggle}>
                  <FaBars />
               </MobileIcon>
               <NavMenu>
                  <NavItem>
                     <NavLinks
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                     >
                        About
                     </NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks
                        to="discover"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                     >
                        Discover
                     </NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks
                        to="services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                     >
                        Services
                     </NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks
                        to="signup"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                     >
                        Sign Up
                     </NavLinks>
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
