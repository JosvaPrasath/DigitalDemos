import React from "react";
import Navbar from './components/navbar';

import 'materialize-css/dist/css/materialize.min.css';

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

export default App
