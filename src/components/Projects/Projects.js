import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Projects = (props) => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>{props.header}</SectionTitle>
    <GridContainer>
      {props.data.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />

            <HeaderThree title={p.title}>{p.title}</HeaderThree>
            <Hr />

            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Tech Stack</TitleContent>
              <Hr />
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>{p.buttonText ? `${p.buttonText}` : "Live Preview"}</ExternalLinks>
              {p.source && <ExternalLinks href={p.source}>Source Code</ExternalLinks>}
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;