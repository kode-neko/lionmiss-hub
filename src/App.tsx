import React, { useEffect } from 'react';
import initI18n from './i18n';
import { Frame } from './page';

const App: React.FC = () => {
  useEffect(() => {
    initI18n()
      .then(()=> console.log('Languages loaded'))
      .catch((err: Error) => console.error(err));
  }, []);

  return (
    <div><Frame /></div>
  );
};

export default App;