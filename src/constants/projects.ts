import { ProjectLMH } from "../models";
import swaggerPic from '../assets/pics/swagger.png';
import graphqlPic from '../assets/pics/graphql.png';
import storybookPic from '../assets/pics/storybook.webp';

const projectSwagger: ProjectLMH = {
  title: 'swagger.title',
  desc: 'swagger.desc',
  img: swaggerPic,
  demo: 'swagger.demo'
};
const projectGraphQL: ProjectLMH = {
  title: 'graphql.title',
  desc: 'graphql.desc',
  img: graphqlPic,
  demo: 'graphql.demo'
};
const projectStorybook: ProjectLMH = {
  title: 'storybook.title',
  desc: 'storybook.desc',
  img: storybookPic,
  demo: 'storybook.demo'
};
const projectList: ProjectLMH[] = [
  projectSwagger,
  projectGraphQL,
  projectStorybook
];

export default projectList;