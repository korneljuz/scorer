import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scorer from './Scorer/Scorer';
import PageNotFound from './PageNotFound/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <React.StrictMode>
        <Scorer />
      </React.StrictMode>
    </BrowserRouter>
);
