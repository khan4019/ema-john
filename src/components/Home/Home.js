import React, { Component } from 'react';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';

class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Shop></Shop>
            </div>
        );
    }
}

export default Home;