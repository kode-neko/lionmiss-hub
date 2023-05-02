import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "@stein197/css-reset/index.css";
import App from './app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
