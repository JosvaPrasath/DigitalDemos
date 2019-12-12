import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './home';
import Details from './details';
import Cart from './cart';

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container menu-header">
                <BrowserRouter>
                    <Link to="/" className="brand-logo">Shopkart</Link>

                    <ul className="right">
                        <li><Link to="/home"> Home </Link></li>
                        <li><Link to="/cart"> My cart</Link></li>
                        <li><Link to="/cart"> <i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/cart" component={Cart} />
                </BrowserRouter>
            </div>
        </nav>
    )
}

export default Navbar;