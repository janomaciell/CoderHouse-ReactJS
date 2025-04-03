import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
      </div>
    </Router>
  );
}

export default App;
