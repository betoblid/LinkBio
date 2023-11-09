import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotes from './Rotes';
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('view') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Rotes />
  </React.StrictMode>
);

