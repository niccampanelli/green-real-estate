import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Routes from './routes'
import Header from './View/Header'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
