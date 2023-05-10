import React from 'react';
import { DrawerProps } from './type';
import styles from './styles.module.less';
import { MenuOptionLMH } from '../../models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

const Drawer: React.FC<DrawerProps> = ({ isVisible = false, menuMain, onClickClose, onClickOptMainMenu, onClickTheme, onClickLang }: DrawerProps) => {
  const { t } = useTranslation();
  return (
    <>
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
          <div onClick={onClickLang}>lang</div>
          <div onClick={onClickTheme}>tema</div>
        </div>
      </div>
      <div className={styles.overlay} style={{ display: isVisible ? 'block': 'none' }}/>
    </>
  );
};

export default Drawer;