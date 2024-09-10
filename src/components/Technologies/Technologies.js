import React from 'react';
import { DiAws, DiCss3, DiDjango, DiDocker, DiFirebase, DiHtml5, DiJava, DiJavascript, DiMongodb, DiMysql, DiNodejs, DiPython, DiReact, DiSpark, DiStreamline, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider divider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've worked with a range a technologies
  </SectionText>
  <List>
    <ListItem>
      <picture>
        <DiJavascript size="3rem" />
      </picture>
        <ListTitle>JavaScript</ListTitle>
    </ListItem>
    <ListItem>
      <picture>
        <DiHtml5 size="3rem" />
      </picture>
        <ListTitle>HTML</ListTitle>
    </ListItem>
    <ListItem>
      <picture>
        <DiCss3 size="3rem" />
      </picture>
        <ListTitle>CSS</ListTitle>
    </ListItem>
    <ListItem>
      <picture>
        <DiReact size="3rem" />
      </picture>
        <ListTitle>React</ListTitle>
    </ListItem>
    <ListItem>
      <picture>
        <DiMongodb size="3rem" />
      </picture>
        <ListTitle>Mongodb</ListTitle>
    </ListItem>

    <ListItem>
      <picture>
        <DiNodejs size="3rem" />
      </picture>
        <ListTitle>Nodejs</ListTitle>
    </ListItem>
    <ListItem>
      <picture>
        <DiPython size="3rem" />
      </picture>
        <ListTitle>Python</ListTitle>
    </ListItem>
    <ListItem>
      <picture>
        <DiJava size="3rem" />
      </picture>
        <ListTitle>JAVA</ListTitle>
    </ListItem>
    <ListItem>
      {/* <picture>
        <DiStreamline size="3rem" />
      </picture> */}
        <ListTitle>Kafka</ListTitle>
    </ListItem>
    <ListItem>
      <picture>
        <DiSpark size="3rem" />
      </picture>
        <ListTitle>Spark</ListTitle>
    </ListItem>
    <ListItem>
      {/* <picture>
        <DiStreamline size="3rem" />
      </picture> */}
        <ListTitle>Apache Zookeeper</ListTitle>
    </ListItem>
    <ListItem>
      <picture>
        <DiDjango size="3rem" />
      </picture>
        <ListTitle>Django</ListTitle>
    </ListItem>
    <ListItem>
      {/* <picture>
        <DiFirebase size="3rem" />
      </picture> */}
        <ListTitle>Flask</ListTitle>
    </ListItem>
    <ListItem>
      {/* <picture>
        <Di size="3rem" />
      </picture> */}
        <ListTitle>TensorFlow</ListTitle>
    </ListItem>
    <ListItem>
      <picture>
        <DiStreamline size="3rem" />
      </picture>
        <ListTitle>Keras</ListTitle>
    </ListItem>
    <ListItem>
      <picture>
        <DiAws size="3rem" />
      </picture>
        <ListTitle>AWS</ListTitle>
    </ListItem>
    <ListItem>
      <picture>
        <DiMysql size="3rem" />
      </picture>
        <ListTitle>MYSQL</ListTitle>
    </ListItem>
    <ListItem>
      <picture>
        <DiDocker size="3rem" />
      </picture>
        <ListTitle>Docker</ListTitle>
    </ListItem>
    
  </List>
  <SectionDivider colorAlt />
</Section>
);

export default Technologies;
