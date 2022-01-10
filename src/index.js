import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.sass';
import App from './components/app/app';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('.wrapper')
);
