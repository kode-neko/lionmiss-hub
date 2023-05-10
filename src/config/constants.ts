import { MenuOptionLMH, ThemeLMH } from "../models";

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

export {
  langs,
  themes,
  mainMenu
};