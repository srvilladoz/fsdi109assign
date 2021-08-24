import React, { Component } from "react";
import storeContext from "../store/storeContext";
import "./navBar.css";
import { Link } from "react-router-dom";

//cc
class NavBar extends Component {
    static contextType = storeContext;
    state = {};
    render() {
        return(

            <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-log-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/link">Link</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/catalog">Catalog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/#" tabIndex="-1" aria-disabled="true">Disabled</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <Link className = "btn btn-outline-primary" to="/cart">
                        <i className="fa fa-cart-plus mr-1"></i>
                        &nbsp;View Cart &nbsp;&nbsp;
                        <span className="badge bg-dark ml-1">{this.context.cart.length}</span>
                    </Link>
                </form>
        </div>
        </div>
            </nav>
        );
    }
    test() {
        console.log("this is a test");
    }
}

export default NavBar;