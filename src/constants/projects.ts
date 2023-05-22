import { ProjectLMH } from "../models";
import swaggerPic from '../assets/pics/swagger.png';
import graphqlPic from '../assets/pics/graphql.png';
import storybookPic from '../assets/pics/storybook.webp';

const projectSwagger: ProjectLMH = {
  title: 'swagger.title',
  desc: 'swagger.desc',
  img: swaggerPic,
  demo: 'https://www.kodeneko.com/lionmiss/docs'
};
const projectGraphQL: ProjectLMH = {
  title: 'graphql.title',
  desc: 'graphql.desc',
  img: graphqlPic,
  demo: '/gql-sandbox'
};
const projectStorybook: ProjectLMH = {
  title: 'storybook.title',
  desc: 'storybook.desc',
  img: storybookPic,
  demo: 'https://www.kodeneko.com/lionmiss/components'
};
const projectList: ProjectLMH[] = [
  projectSwagger,
  projectGraphQL,
  projectStorybook
];

export default projectList;