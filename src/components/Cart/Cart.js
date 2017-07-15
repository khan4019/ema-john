import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
    constructor() {
        super();
        this.price = 0;
        this.shipping = 0;
        this.beforeTax = 0;
        this.tax = 0;
        this.total = 0;
    }
    calculateCost() {
        var itemPrice = this.props.cart.reduce((prev, item) => item.price * (item.quantity || 1) + prev, 0);
        
        var shippingPrice = this.props.cart.reduce((prev, item) => item.shipping * (item.quantity || 1) + prev, 0);

        this.price = this.roundTwoDecimal(itemPrice);
        this.shipping = this.roundTwoDecimal(shippingPrice);
        this.tax = this.roundTwoDecimal((this.price + this.shipping) * 0.1);
        this.beforeTax = this.roundTwoDecimal(this.price + this.shipping);
        this.total = this.roundTwoDecimal(this.price + this.shipping + this.tax);
    }

    roundTwoDecimal(number) {
        return (Math.round(number * 100) / 100);
    }

    render() {
        const cart = this.props.cart;
        this.calculateCost();
        return (
            <div className="cart">
                <h3>Order Summary</h3>
                <p>Items ordered:{cart.length}</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Items:</td>
                            <td>${this.price}</td>
                        </tr>
                        <tr>
                            <td>Shipping & Handling:</td>
                            <td>${this.shipping}</td>
                        </tr>
                        <tr>
                            <td>Total before tax:</td>
                            <td>${this.beforeTax}</td>
                        </tr>
                        <tr>
                            <td>Estimated Tax:</td>
                            <td>${this.tax}</td>
                        </tr>
                        <tr className="total-row">
                            <td>Order Total:</td>
                            <td>${this.total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Cart;