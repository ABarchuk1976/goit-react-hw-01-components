import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <BrowserRouter basename="/goit-react-hw-01-components/">
  <App />
  // </BrowserRouter>
);
