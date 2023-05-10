import { useTranslation } from 'react-i18next';
import { mainMenu } from '../../config/constants';
import { MenuOptionLMH, ThemeLMH } from '../../models';
import MainTitle from '../MainTitle/MainTitle';
import styles from './styles.module.less';
import { MainBarProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { userActions } from '../../store';
import { AnyAction, Dispatch } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Drawer } from '../Drawer';

const MainBar: React.FC<MainBarProps> = ({ webTitle }: MainBarProps) => {
  const { t, i18n } = useTranslation();
  const [ open, setOpen ] = useState<boolean>(false);
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const { lang, theme } = useSelector((state: AppState) => state.user);
  const handleClickLang = async (): Promise<void> => {
    const newLang: string = lang === 'en' ? 'es' : 'en';
    dispatch(userActions.changeLang(newLang));
    await i18n.changeLanguage(newLang);
  };
  const handleClickTheme = (): void => {
    const newTheme: ThemeLMH = theme === ThemeLMH.DARK ? ThemeLMH.LIGHT : ThemeLMH.DARK;
    dispatch(userActions.changeLang(newTheme));
  };
  const handleClickMenu = (): void => setOpen(!open);
  const handle = (): void => console.log('p');

  return (
    <>
      <Drawer
        isVisible={open}
        menuMain={mainMenu}
        onClickClose={handleClickMenu}
        onClickOptMainMenu={handleClickMenu}
        onClickTheme={handleClickTheme}
        onClickLang={handleClickLang}
      />
      <div className={styles.cont}>
        <div className={styles.left}>
          <div className={styles.title}><MainTitle webTitle={webTitle} /></div>
          <ul className={styles.mainMenu}>
            {mainMenu.map((o: MenuOptionLMH) => (
              <li key={o.name}><a href={o.path}>{t(`section.${o.name}`)}</a></li>
            ))}
          </ul>
        </div>
        <div className={styles.right}>
          <div>
            <FontAwesomeIcon icon={faBars} className={styles.menu} onClick={handleClickMenu}/>
          </div>
          <div className={styles.secondMenu}>
            <div onClick={handleClickLang}>lang</div>
            <div onClick={handleClickTheme}>tema</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBar;