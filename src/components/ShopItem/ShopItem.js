import React, { Component } from 'react';
import './ShopItem.css';

import Rating from 'react-rating';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

class ShopItem extends Component {
    render() {
        const item = this.props.item;
        return (
            <div className="item">
                <div>
                    <img src={item.img} alt=""/>
                </div>
                <div>
                    <h4 className="item-header">{item.name}</h4>
                    <p><small>by: {item.seller}</small></p>
                    <div className="item-description">
                    <div>
                            <p>${item.price}</p>
                            <p><small>only {item.stock} left in stock - order soon</small></p>
                            <button onClick={() => this.props.addToCart(item.key)}>
                                <i className="fa fa-shopping-cart"></i>
                                <span>add to cart</span>
                            </button>
                    </div>
                    <div>
                            <Rating
                                className="ratings"    
                                empty="fa fa-star-o"
                                full="fa fa-star"
                                placeholder="fa fa-star"
                                placeholderRate={item.star}
                                readonly
                            ></Rating>
                            <h4>Features</h4>
                            <ul>
                                {
                                    item.features.map(ftr => <li key={ftr.description}>{ftr.description}: <strong>{ftr.value}</strong> </li> )    
                            }
                            </ul>    
                    </div>
                </div>
                </div>
                
            </div>
        );
    }
}

export default ShopItem;