import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MapContainer from './components/Map';
import BodyElement from './components/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="nav">Resturant review App</h1>
        <MapContainer />

        <BodyElement />
      </div>
    );
  }
}

export default App;