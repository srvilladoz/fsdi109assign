import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';
import storeContext from "../store/storeContext";

import "./item.css";

class Item extends Component {
    static contextType = storeContext;
    state = { quantity : 1 }
    render() {
        return(
            <div className="item">
                <img src={"/images/products" + this.props.data.image} alt="product"></img>

                <h5>{this.props.data.title}</h5>

                <label>Total ${this.getTotal()}</label>
                <label>Price ${this.props.data.price.toFixed(2)}</label>

            <div className="item-controls">
                <QuantityPicker onChange={this.handleQuantityChange}></QuantityPicker>

                <button onClick={this.handleAddToCart} className="btn btn-sm btn-info btn-add">
                    <i className="fa fa-cart-plus"></i>
                </button>

            </div>

            </div>
        );
    }

    handleAddToCart = () => {
        let prod = {
            ...this.props.data, // <- item information
            quantity: this.state.quantity,
        };
        this.context.addProductToCart(prod);
    };

    getTotal = () => {
        let total = this.state.quantity * this.props.data.price;
        return total.toFixed(2);

    }

    handleQuantityChange = (quantity) => {
        console.log("quantity changed", quantity);
        this.setState({quantity: quantity});
    };
}

//put a quantity prop int he state (= 1) 
//on handleQuantityChange, set the new value to the state

//on render, read the quantity * the price


export default Item;