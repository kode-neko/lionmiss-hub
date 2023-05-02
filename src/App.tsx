import React, { useEffect, useState } from 'react';
import initI18n from './i18n';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  const [ isLg, setIsLang ] = useState<boolean>(false);
  useEffect(() => {
    initI18n()
      .then(()=> setTimeout( () => setIsLang(true), 2000) )
      .catch((err: Error) => console.error(err));
  }, []);

  return (
      isLg ? (<div>
      <div>App</div>
      <div><Outlet /></div>
    </div>) : <div>loading...</div>
  );
};

export default App;