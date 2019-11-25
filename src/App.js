import React from 'react';
import './App.scss';
import Billboard from './components/billboard';
import Header from './components/header';
import 'typeface-roboto';

function App() {
  return (
    <div>
      <Header />
      <Billboard />
    </div>
  );
}

export default App;