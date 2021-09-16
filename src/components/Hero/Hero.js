import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey, I'm <br />
        Harish Raju
      </SectionTitle>
      <SectionText>
        Full stack web application developer <br />
        My favourite technologies right now are React.js, Typescript, GraphQL,
        Node.js, PostgreSQL, and AWS
      </SectionText>
      <Button onClick={() => (window.location = "#tech")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
