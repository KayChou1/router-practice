import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import NavBar from './Components/NavBar'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <Switch>
      <Route path="/"component={Home} exact/>
      <Route path="/about" component={About} />
      <Route component={Error} />
      </Switch>
     
    </header>
    </div>
  );
}

export default App;
