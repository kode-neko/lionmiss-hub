import React from 'react';
import { DrawerProps } from './type';
import styles from './styles.module.less';
import { MenuOptionLMH } from '../../models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faGlobe, faPaintRoller } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Switch } from '../Switch';

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
            {menuMain.map((opt: MenuOptionLMH) => <li key={opt.name} onClick={(): void => onClickOptMainMenu(opt)}>{t(`section.${opt.name}`)}</li>)}
          </ul>
        </div>
        <div className={styles.delimiter} />
        <div className={styles.secondMenu} >
          <Switch icon={faGlobe} isActive={langSW} onClickSw={onClickLang} />
          <Switch icon={faPaintRoller} isActive={themeSW} onClickSw={onClickTheme} />
        </div>
      </div>
      <div className={styles.overlay} style={{ display: isVisible ? 'block': 'none' }}/>
    </div>
  );
};

export default Drawer;