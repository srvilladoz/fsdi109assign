import React, { Component } from 'react';
import storeContext from "../store/storeContext";
import ItemInCart from "./itemInCart";

import "./cart.css";

class Cart extends Component {
    static contextType = storeContext;
    state = {  };
    render() { 
        return ( 
            <div className="cart-page">
                <h1>Your Current Cart</h1>
                <h4>You have {this.context.cart.legth} products in cart</h4>

                <div className="d-flex">
                <div className="cart-container">

                    { this.context.cart.map((prod) => (
                        <itemInCart key={prod._id} data={prod}></itemInCart>
                        ))}


                </div>

                

                <div className="total-container">
                    <label>Your Total:</label>
                    <h6>$ {this.getTotal()}</h6>

                    <button className="btn btn-primary">Proceed to payment</button>
                </div>
                </div>
            </div>
         );
    }

    getTotal = () => {
        let total = 0;
        for(let i=0; i<this.context.cart.length; i++){
            let item = this.context.cart[i];
            total += item.price * item.quantity;
        }

        return total.toFixed(2);
        
    };
}
   
 
export default Cart;