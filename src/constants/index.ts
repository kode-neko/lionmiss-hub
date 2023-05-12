import { ThemeLMH } from "../models";
import { default as mainMenu } from './mainMenu';
import { default as projectList } from './projects';
import { default as socialList } from './social';

const langs: string[] = [
  'en',
  'es'
];

const themes: string[] = [
  ThemeLMH.LIGHT,
  ThemeLMH.DARK
];

export {
  langs,
  themes,
  mainMenu,
  projectList,
  socialList
};