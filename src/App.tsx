import React from 'react';
import { Outlet } from 'react-router-dom';
import './i18n';
import "the-new-css-reset/css/reset.css";
import './styles/global.less';

const App: React.FC = () => {
  return (
    <div>
      <div>App</div>
      <div><Outlet /></div>
    </div>
  );
};

export default App;