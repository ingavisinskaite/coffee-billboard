import React from 'react';
import './App.scss';
import Billboard from './components/billboard';
import Header from './components/header';
import 'typeface-roboto';
import { useDispatch } from 'react-redux';
import { fetchCoffeeList } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchCoffeeList());
  
  return (
    <div>
      <Header />
      <Billboard />
    </div>
  );
}

export default App;