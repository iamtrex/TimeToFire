import React, { Component } from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';


class Income extends Component {
    render() {
        return (
            <div>
                <Header title={"This is the Income Page"}/>

                <Footer />
            </div>
        );
    }
}

export default Income;
