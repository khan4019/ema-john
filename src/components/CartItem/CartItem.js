import React, { Component } from 'react';
import './CartItem.css';

import shippingCosts from '../../fakeData/shippingCosts';
import ShippingOption from '../ShippingOption/ShippingOption';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.shippingOptions = shippingCosts;
    }
    render() {
        const item = this.props.item;
        return (
            <div className="cart-item">
                <h4>{item.name}</h4>
                <div className="cart-item-container">
                    <div className="cart-item-description">
                        <p className="price">${item.price}</p>
                        <p><small>sold by:{item.seller}</small></p>
                        <p>Quantity:{item.quantity}</p>
                        <button onClick={()=>this.props.handleRemove(item.key)}>Remove</button>
                    </div>
                    <div className="shipping-options">
                        <h5>Shipping options</h5>
                        {this.shippingOptions.map(option => <ShippingOption key={option.type} option={option} shipping={item.shipping} /> )}
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;