import React from 'react';
import ReactDOM from 'react-dom/client';
import { JournallApp } from './JournallApp';
import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JournallApp />
  </React.StrictMode>
);
