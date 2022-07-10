import React from "react";
import {
   SidebarContainer,
   Icon,
   CloseIcon,
   SidebarWrapper,
   SidebarMenu,
   SidebarLink,
   SideBtnWrap,
   SidebarRoute,
} from "./MobileSidebarElements";

const MobileSidebar = ({ isOpen, toggle }) => {
   return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <Icon onClick={toggle}>
            <CloseIcon />
         </Icon>
         <SidebarWrapper>
            <SidebarMenu>
               <SidebarLink to="about" onClick={toggle}>
                  About
               </SidebarLink>
               <SidebarLink to="discover" onClick={toggle}>
                  Discover
               </SidebarLink>
               <SidebarLink to="services" onClick={toggle}>
                  Services
               </SidebarLink>
               <SidebarLink to="signup" onClick={toggle}>
                  Sign Up
               </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
               <SidebarRoute to="/">Demo</SidebarRoute>
            </SideBtnWrap>
         </SidebarWrapper>
      </SidebarContainer>
   );
};

export default MobileSidebar;
