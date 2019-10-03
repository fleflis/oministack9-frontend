import React from 'react';
import api from './services/api'
import './App.css';
import logo from './assets/logo.svg'

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(' hello world')
  }


  return (
    <div className="container">
      <img src={logo} alt="AirCNC"/>

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa!
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email *</label>
          <input type="email" name="email" id="email" placeholder="Seu melhor email!"/>
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
