import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import MobileSidebar from "../components/MobileSidebar";
import Navbar from "../components/Navbar";

const Home = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => {
      setIsOpen(!isOpen);
   };

   return (
      <>
         <MobileSidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />
         <HeroSection />
      </>
   );
};

export default Home;
