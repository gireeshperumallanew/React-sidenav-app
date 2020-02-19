import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      {/* <h1>App</h1> */}
      <Home/>
      <Contact/>
    </div>
  );
}

export default App;
