import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './login';
import Home from './home';
import Details from './details';
import ProductDetails from './product-details';
import Cart from './cart';

const Navbar = () => {
    return (
        <div className="container-fluid main-container">
            <Router>
                <nav className="nav-wrapper">
                    <div className="container menu-header">
                        <Link to="/" className="brand-logo">Shopkart</Link>
                        <ul className="right">
                            <li><Link to="/home"> Home </Link></li>
                            <li><Link to="/cart"> My cart</Link></li>
                            <li className="cart-icon"> <i className="material-icons"> shopping_cart  </i> <Details /> </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <Route exact path="/" component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/product-details/:id" component={ProductDetails} />
                </div>
            </Router>
        </div>
    )
}

export default Navbar;