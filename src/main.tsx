import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "@stein197/css-reset/index.css";
import RouterApp from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>,
);
