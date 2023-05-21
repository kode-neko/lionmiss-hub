import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { AppState } from './store';
import { ThemeLMH } from './models';
import { themeStyle } from './styles/themes';
import { Auth, Main } from './layouts';
import { Contact, Home } from './views';
import { Error } from './views/Error';
import './i18n';
import "the-new-css-reset/css/reset.css";
import './styles/global.less';

const App: React.FC = () => {
  const theme: ThemeLMH = useSelector((state: AppState) => state.user.theme);

  return (
    <ThemeProvider theme={themeStyle[theme]}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<Main />}>
            <Route index element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;