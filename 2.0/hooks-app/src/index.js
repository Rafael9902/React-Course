import React from 'react';
import ReactDOM from 'react-dom/client';
import { SimpleForm } from './hooks/02-use-effect/SimpleForm';
import { HooksApp } from './HooksApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>
);
