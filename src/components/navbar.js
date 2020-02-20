import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginOrLogoutUser } from '../actions/cart-actions';

import Login from './login';
import Home from './home';
import Details from './details';
import ProductDetails from './product-details';
import Cart from './cart';

class Navbar extends Component {

    constructor() {
        super();
    }

    handleLogout = (event) => {
        event.preventDefault();
        this.props.loginUser(false);
        window.location.replace("localhost:3000/");
        // this.props.history.push('/login')
    }

    render() {
        const navBar = (this.props.loggedIn) ? (<ul className="right">
            <li><Link to="/home"> Home </Link></li>
            <li><Link to="/cart"> My cart</Link></li>
            <li className="cart-icon"> <i className="material-icons"> shopping_cart  </i> <Details /> </li>
            <li> <div className="btn pink remove" onClick={() => this.props.loginUser(false)}> <Link to="/login"> Logout </Link> </div> </li>
        </ul>) : '';
        return (
            <div className="container-fluid main-container">
                <Router>
                    <nav className="nav-wrapper">

                        <div className="container menu-header">
                            <Link to="/" className="brand-logo">Shopkart</Link>
                            { navBar }
                        </div>

                    </nav>
                    <div className="container">
                        <Route exact path="/" component={Login} />
                        <Route path="/login" component={Login} />
                        <Route path="/home" component={Home} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/product-details/:id" component={ProductDetails} />
                    </div>
                </Router>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (value) => { dispatch(loginOrLogoutUser(value)) }
    }
};


export default connect(mapStateToProps, mapDispatchToProps) (Navbar);