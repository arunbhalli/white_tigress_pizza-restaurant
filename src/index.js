import React from 'react';
import MenuCard from './components/MenuCard';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MenuCard />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
