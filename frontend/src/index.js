import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Routes from './routes'
import Footer from './View/Footer';
import Header from './View/Header'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Routes />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
