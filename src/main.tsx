import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "@stein197/css-reset/index.css";
import RouterApp from './router';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterApp />
    </Provider>
  </React.StrictMode>,
);
