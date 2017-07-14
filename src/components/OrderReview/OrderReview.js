import React, { Component } from 'react';

import { getDatabaseCart } from '../../utilities/databaseManager';

import fakeData from '../../fakeData';

class OrderReview extends Component {


    componentDidMount() {
        var cart = getDatabaseCart();
        console.log(cart);
    }
    
    render() {
        return (
            <div>
                <h1>See what junk you ordering</h1>
            </div>
        );
    }
}

export default OrderReview;