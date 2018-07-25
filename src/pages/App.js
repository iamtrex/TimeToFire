import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';


class App extends Component {
  render() {
    return (
        <div>
            <Header title={"This is main page"}/>
            <div>

            </div>


            <Footer />
        </div>
    );
  }
}

export default App;
