import React from "react";
import ReactDOM from "react-dom";

import App from './App.js';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import './css/styles.css';

import * as serviceWorker from "./serviceWorker";
import cartReducer from './reducers/cart-reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);


ReactDOM.render(
<Provider store={store}> 
    <App /> 
</Provider> , document.getElementById("app"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
