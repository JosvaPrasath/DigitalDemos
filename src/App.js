import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

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
        <div></div>
        <Header />
        <form className="userForm">
          <h2> Login </h2>
          <div className="form-group">
            <label htmlFor="username"> User name </label>
            <input type="text" className="form-control" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password"> Password </label>
            <input type="text" className="form-control" name="password" />
          </div>
        </form>
        <table>
          <tbody>
            {this.state.data.map((person, i) => (
              <Home key={i} data={person} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

class Header extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> ShopKart </h1>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/details" component={Details} />
        </BrowserRouter>
        <p> Product Item 1 {this.props.key} </p>;
      </div>
    );
  }
}

class Details extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/details" component={Details} />
        </BrowserRouter>
        <p> Product Item 1 {this.props.key} </p>;
      </div>
    );
  }
}
