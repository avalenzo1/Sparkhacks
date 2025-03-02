import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
