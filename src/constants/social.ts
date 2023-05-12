import { MenuOptionLMH } from "../models";
import { faGlobe, faBolt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faCodepen, faFigma } from '@fortawesome/free-brands-svg-icons';

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

export default socialList;