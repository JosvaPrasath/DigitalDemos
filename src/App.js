import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navbar from './components/navbar';
import Login from './components/login';
import Home from './components/home';

import 'materialize-css/dist/css/materialize.min.css';

import './css/styles.css';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Navbar />
    );
  }
}

export default App;
