import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Principal from './App.js';
import reportWebVitals from './reportWebVitals';
// importo los nuevos componentes
import navBar from './components/navbar';
import cartWidget from './components/cartWidget';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Principal />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
