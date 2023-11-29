import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import './App.css';

import Encuestas from './componentes/encuestas';
  function App() {
    // Estado para rastrear las encuestas
    const encuestas = [
      { id: 1, pregunta: '¿Cuál es tu color favorito?', opciones:
      ['Rojo', 'Azul', 'Verde'] },
      { id: 2, pregunta: '¿Cuál es tu comida favorita?', opciones:
      ['Pizza', 'Hamburguesa', 'Sushi'] },
    ];
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Aplicación de Encuestas</h1>
        {/* Contenido de las páginas */}
        <Encuestas encuestas={encuestas} />
        </header>
      </div>
    );
  }
  export default App;

