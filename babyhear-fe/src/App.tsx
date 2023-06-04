import React from 'react';
import { GlobalStyle } from './styles/global';
import './styles/color.css';
import Router from './components/Router';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
