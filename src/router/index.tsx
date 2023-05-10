import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import { Main as MainLayout, Auth as AuthLayout } from '../layouts';
import { Home, Contact } from '../views';

const RouterApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Route>
          <Route path="/login" element={<AuthLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;