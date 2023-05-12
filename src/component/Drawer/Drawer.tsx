import React from 'react';
import { DrawerProps } from './type';
import styles from './styles.module.less';
import { MenuOptionLMH } from '../../models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPaintRoller } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Switch } from '../Switch';
import { Link } from 'react-router-dom';
import { BtnDouble } from '../BtnDouble';

const Drawer: React.FC<DrawerProps> = ({ isVisible = false, langSW = false, themeSW = false, menuMain, onClickClose, onClickOptMainMenu, onClickTheme, onClickLang }: DrawerProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={classNames([ styles.cont, isVisible ? styles.move : null ])}>
        <div className={styles.close}>
          <FontAwesomeIcon icon={faXmark} className={styles.cross} onClick={onClickClose}/>
        </div>
        <div className={styles.delimiter} />
        <div>
          <ul className={styles.options}>
            {menuMain.map((opt: MenuOptionLMH) => <li key={opt.name} onClick={(): void => onClickOptMainMenu(opt)}><Link to={opt.path}>{t(`menu.${opt.name}`)}</Link></li>)}
          </ul>
        </div>
        <div className={styles.delimiter} />
        <div className={styles.secondMenu} >
        <Switch icon={faPaintRoller} isActive={themeSW} onClickSw={onClickTheme} />
          <BtnDouble
            selLeft={langSW} 
            left={<span>EN</span>}
            right={<span>ES</span>}
            onClick={onClickLang}
          />
        </div>
      </div>
      <div className={styles.overlay} style={{ display: isVisible ? 'block': 'none' }}/>
    </div>
  );
};

export default Drawer;