import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HeroesApp } from './HeroesApp';
import { Navbar } from './components/ui/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeroesApp />
  </React.StrictMode>
);


