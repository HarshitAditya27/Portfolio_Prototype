import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi I'm <br />
        Harshit Aditya
      </SectionTitle>
      <SectionText>
        I am a Computer Science enthusiast. I am currently learing Full Stack Web Developement by creating projects and doing open source contribution. I am from Ranchi, Jharkhand.
      </SectionText>
      <Button onClick={() => window.location = "mailto:harshitaditya27@gmail.com"}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;