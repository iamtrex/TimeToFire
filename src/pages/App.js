import React, { Component } from 'react';
import './App.css';

import Overview from './Overview';
import Income from './Income';
import Expenses from './Expenses';
import ReturnsPortfolio from './ReturnsPortfolio';


class App extends Component {
  render() {
    return (
        <div>
            <div>
                <Overview className={"Overview"}/>
                <hr/>
                <Income class="Income" className={"Income"}/>
                <hr/>
                <Expenses className={"Expenses"}/>
                <hr/>
                <ReturnsPortfolio className={"ReturnsPortfolio"}/>
            </div>
        </div>
    );
  }
}

export default App;
