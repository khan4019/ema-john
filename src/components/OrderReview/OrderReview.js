import React, { Component } from 'react';

import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';

import fakeData from '../../fakeData';
import Header from '../Header/Header';
import './OrderReview.css';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';


class OrderReview extends Component {
    constructor() {
        super();
        this.state = {
            cart:[]
        }
        this.handleRemove = this.handleRemove.bind(this);
    }

    componentDidMount() {
        var cart = getDatabaseCart();
        var keys = Object.keys(cart);
        var items = keys.map(key => {
            var item = fakeData.find(itm => itm.key === key);
            item.quantity = cart[key];
            return item;
        });
        this.setState({
            cart: items
        });
    }

    handleRemove(key) {
        var newCart = this.state.cart.filter(item => item.key !== key);
        this.setState({
            cart: newCart
        });
        removeFromDatabaseCart(key);
    }
    
    render() {
        return (
            <div>
                <Header></Header>
                <div className="review-container">
                    <div className="item-container">
                        {this.state.cart.map(item => <CartItem key={item.key} item={item} handleRemove={this.handleRemove}></CartItem> )}
                    </div>
                    <div className="cart-container">
                        <Cart cart={this.state.cart}></Cart>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderReview;