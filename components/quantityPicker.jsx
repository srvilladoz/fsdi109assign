import React, { Component } from 'react';

import "./quantityPicker.css";

class QuantityPicker extends Component {
    state = {
        quantity: 1
    }

    render() {
        console.log("Render of QP");

        return(

            <div className="quantity-picker">
                <button onClick={this.decrease} className="btn btn-sm btn-primary">-</button>
                { this.state.quantity }
                <button onClick={this.increase} className="btn btn-sm btn-primary">+</button>
            </div>
        );

    }

    decrease = () => {
        let qnty = this.state.quantity - 1;
        if(qnty > 0) {
            this.setState({ quantity: qnty });
            this.props.onChange(qnty);
        }
    };

    increase = () => {
        let qnty = this.state.quantity + 1;
        if(qnty < 21) {
            this.setState({ quantity: qnty });
            this.props.onChange(qnty);
        }
    }
}

export default QuantityPicker;