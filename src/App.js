import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from './components/navbar';

import 'materialize-css/dist/css/materialize.min.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: "1",
          name: "John",
          age: "28"
        },
        {
          id: "2",
          name: "Peter",
          age: "30"
        },
        {
          id: "3",
          name: "James",
          age: "31"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App
