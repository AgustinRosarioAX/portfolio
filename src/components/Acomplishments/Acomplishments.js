import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { Img } from '/src/components/Projects/ProjectsStyles.js';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section id="about">
    <SectionTitle>Certifications</SectionTitle>
    <a href="https://www.credly.com/badges/408f3744-035c-4142-a82a-bb3b73007c8b/linked_in?t=s59cm5" target="_blank" rel="noopener noreferrer">
    <img src="/images/certification1.png" alt="Certification" style={{ width: '300px', height: 'auto' }} />
    </a>


    </Section>
);

export default Acomplishments;
