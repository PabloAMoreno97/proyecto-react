import React from 'react';
import NavBar from './components/NavBar.js';
import './App.css';
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer 
        greeting='Hola Coder'
      />
    </>
  );
}

export default App;