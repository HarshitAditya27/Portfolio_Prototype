import React from 'react';
import { DiBootstrap, DiCss3, DiDatabase, DiFirebase, DiGoogleCloudPlatform, DiHtml5, DiJavascript, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      I am currently working on web development
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle> Frontend</ListTitle>
          <ListParagraph>
            Worked on <br />
            HTML, CSS, TaiwindCSS, JavaScript <br />, Bootstrap, React.js and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle> Backend</ListTitle>
          <ListParagraph>
            Worked on <br />
            Node.JS, Express, MongoDB.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGoogleCloudPlatform size="3rem" />
        <ListContainer>
          <ListTitle> Cloud Computting</ListTitle>
          <ListParagraph>
            Worked on <br />
            Google Cloud Platform
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
