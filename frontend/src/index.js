import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import Routes from './routes'
import Header from './View/Header'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
