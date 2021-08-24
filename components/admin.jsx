import React, { Component } from 'react';

import "./admin.css";
import ItemService from "../services/itemService";

class Admin extends Component {

    state = {
        title: "",
        category: "",
        image: "",
        stock: 0,
        price: 0,
        discount: 0,
        minimum: 1,
        showAlert: false,
    }
    
    render() { 
        let alertStatus = this.state.showAlert ? "": "hide";
        return (
        <div className="admin-page">
            <h3>Register New Item</h3>

            {/* this.state.showAlert ? <div className="alert alert-success">Item Saved</div> : null*/}

            <div id="test" className={"alert alert-success" + alertStatus}>Another Item Saved</div>

            <div className="my-control">
                <label>Title</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
            </div>

            <div className="my-control">
                <label>Category</label>
                <input type="text" name="category" value={this.state.category} onChange={this.handleInputChange} />
            </div>

            <div className="my-control">
                <label>Image Name</label>
                <input type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
            </div>

            <div className="my-control">
                <label>Stock</label>
                <input type="number" name="stock" value={this.state.stock} onChange={this.handleInputChange} />
            </div>

            <div className="my-control">
                <label>Price</label>
                <input type="number" name="price" value={this.state.price} onChange={this.handleInputChange} />
            </div>

            <div className="my-control">
                <label>Discount</label>
                <input type="number" name="discount" value={this.state.discount} onChange={this.handleInputChange}/>
            </div>

            <div className="my-control">
                <label>Minimum</label>
                <input type="number" name="minimum" value={this.state.minimum} onChange={this.handleInputChange} />
            </div>

            <div className="my-control">
                <button onClick={this.handleSave} className="btn btn-dark">Register Item</button>
            </div>

        </div>
        );
    } //end render

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }

    handleTitleChange = (event) => {
        
        this.setState({ ["title"]: event.target.value });
    };

    handleSave = () => {
        

        //create an object
        let item = {...this.state}; //hard copy//deep copy//deep clone

        //send the object to a service -> to server

        let service = new ItemService();
        service.saveItem(item);

        //clear capture form
        this.setState({ title: "", category: "", image: "", price: 0, stock: 0, minimum: 1, discount: 0, showAlert: true });
        
        //set a time out and hide the alert
        setTimeout( () => {
            this.setState({ showAlert: false});
        },3500);
    };
} //end class
 
export default Admin;