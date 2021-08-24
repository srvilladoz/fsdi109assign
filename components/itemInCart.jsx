import React, { Component } from 'react';

import "./itemInCart.css";

class ItemInCart extends Component {
    state = {  }
    render() { 
        return ( 

            <div className="item-in-cart">
                <img src={"/images/products" + this.props.data.image} alt=""></img>

                <div className="item-info">
                    <h6>{this.props.data.title}</h6>
                    <label>{this.props.data.category}</label>
                </div>

                <label>{this.props.data.price}</label>
                <label>{this.props.data.quantity}</label>
                <label>{this.getTotal()}</label>

                <button onClick={this.handleDelete} className="btn btn-sm btn-danger">Remove</button>
            </div>
         );
    }


    handleDelete = () => {

        this.context.removeProductFromCart(this.props.data._id);

    };

    getTotal = () => {
        return (this.props.data.price * this.props.data.quantity).toFixed(2);
    }
}
 
export default ItemInCart;