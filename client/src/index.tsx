import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/style.css'
import './css/import.css'
import {BrowserRouter, HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter basename="/debetorum/build/" >
        <App />
    </BrowserRouter >
);

