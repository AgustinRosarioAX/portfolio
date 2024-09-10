import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there, <br />
        I am Agustin Rosario
      </SectionTitle>
      <SectionText>
       I'm a Computer Science student passionate about developing scalable solutions to solve real-world problems. With experience in back-end systems, user interface design, and data analysis, I aim to make a meaningful impact through technology.
      </SectionText>
      {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      <a href="/My new cv.pdf" download="Agustin_CV.pdf">
      <Button>My CV</Button>
      </a>

    </LeftSection>
  </Section>
</>
);

export default Hero;