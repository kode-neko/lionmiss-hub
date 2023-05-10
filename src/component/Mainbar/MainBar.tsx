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

const MainBar: React.FC<MainBarProps> = ({ webTitle }: MainBarProps) => {
  const { t, i18n } = useTranslation();
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

  return (
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
        <div onClick={handleClickLang}>lenguaje</div>
        <div onClick={handleClickTheme}>tema</div>
      </div>
    </div>
  );
};

export default MainBar;