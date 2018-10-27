import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RenderRoutes from './routes/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RenderRoutes />
      </div>
    );
  }
}

export default App;
