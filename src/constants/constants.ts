import { MenuOptionLMH, ProjectLMH, ThemeLMH } from "../models";
import { faGlobe, faBolt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faCodepen, faFigma } from '@fortawesome/free-brands-svg-icons';
import swaggerPic from '../assets/pics/swagger.png';
import graphqlPic from '../assets/pics/graphql.png';
import storybookPic from '../assets/pics/storybook.webp';

const langs: string[] = [
  'en',
  'es'
];

const themes: string[] = [
  ThemeLMH.LIGHT,
  ThemeLMH.DARK
];

const projectOpt: MenuOptionLMH = {
  name: 'projects',
  path: '/proyects'
};
const contactOpt: MenuOptionLMH = {
  name: 'contact',
  path: '/contact'
};
const mainMenu: MenuOptionLMH[] = [
  projectOpt,
  contactOpt
];

const socialPP: MenuOptionLMH = {
  name: 'personal-page',
  icon: faGlobe,
  path: 'https://www.kodeneko.com'
};
const socialTwitter: MenuOptionLMH = {
  name: 'twitter',
  icon: faTwitter,
  path: 'https://twitter.com/KodenekoFront'
};
const socialGithub: MenuOptionLMH = {
  name: 'github',
  icon: faGithub,
  path: 'https://github.com/kode-neko'
};
const socialStackBlitz: MenuOptionLMH = {
  name: 'stackblitz',
  icon: faBolt,
  path: 'https://stackblitz.com/@kode-neko'
};
const socialCodePen: MenuOptionLMH = {
  name: 'codepen',
  icon: faCodepen,
  path: 'https://codepen.io/kodeneko'
};
const socialFigma: MenuOptionLMH = {
  name: 'figma',
  icon: faFigma,
  path: 'https://figma.com/@kodeneko'
};

const socialList: MenuOptionLMH[] = [
  socialPP,
  socialTwitter,
  socialGithub,
  socialStackBlitz,
  socialCodePen,
  socialFigma
]; 

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

export {
  langs,
  themes,
  mainMenu,
  socialList,
  projectList
};