import React from "react";
import Icon1 from "../../images/svg-6.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-7.svg";
import {
   ServicesContainer,
   ServicesH1,
   ServicesH2,
   ServicesWrapper,
   ServicesCard,
   ServicesIcon,
   ServicesP,
} from "./ServicesElements";

const Services = () => {
   return (
      <ServicesContainer id="services">
         <ServicesH1>Our Services</ServicesH1>
         <ServicesWrapper>
            <ServicesCard>
               <ServicesIcon src={Icon1} />
               <ServicesH2>Simplify Budgeting</ServicesH2>
               <ServicesP>
                  We help simplify your budgeting, so you can start saving.
               </ServicesP>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcon src={Icon2} />
               <ServicesH2>Budget Anywhere</ServicesH2>
               <ServicesP>
                  You can view, add, or delete transactions at home or on the
                  go.
               </ServicesP>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcon src={Icon3} />
               <ServicesH2>Free Access</ServicesH2>
               <ServicesP>
                  Get access to our advanced service today all while being 100%
                  free.
               </ServicesP>
            </ServicesCard>
         </ServicesWrapper>
      </ServicesContainer>
   );
};

export default Services;
