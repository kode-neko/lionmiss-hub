import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { AppState } from './store';
import { ThemeLMH } from './models';
import { themeStyle } from './styles/themes';
import './i18n';
import "the-new-css-reset/css/reset.css";
import './styles/global.less';

const App: React.FC = () => {
  const theme: ThemeLMH = useSelector((state: AppState) => state.user.theme);
  console.log('app', theme);
  return (
    <ThemeProvider theme={themeStyle[theme]}>
      <div>App</div>
      <div><Outlet /></div>
    </ThemeProvider>
  );
};

export default App;