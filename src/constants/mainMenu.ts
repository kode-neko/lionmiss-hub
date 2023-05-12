import { MenuOptionLMH } from "../models";

const projectOpt: MenuOptionLMH = {
  name: 'projects',
  path: '/'
};
const contactOpt: MenuOptionLMH = {
  name: 'contact',
  path: '/contact'
};
const mainMenu: MenuOptionLMH[] = [
  projectOpt,
  contactOpt
];

export default mainMenu;