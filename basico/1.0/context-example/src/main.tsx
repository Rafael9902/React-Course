import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextApp } from './ContextApp'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextApp />
    </BrowserRouter>
  </React.StrictMode>
)
