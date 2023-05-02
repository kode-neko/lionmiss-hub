import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../app';
import { Contact, Frame, Login, Main } from '../page';

const RouterApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Frame />}>
            <Route index element={<Main />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Route>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;