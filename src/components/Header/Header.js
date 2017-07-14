import React, { Component } from 'react';

import logo from '../../images/logo.png';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} alt=""/>
                <ul>
                    <li>
                        <a href="/shop">Shop</a>
                    </li>
                    <li>
                        <a href="/review">Order Review</a>
                    </li>
                    <li>
                        <a href="/manage">Manage Inventory</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;