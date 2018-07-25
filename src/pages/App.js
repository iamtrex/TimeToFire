import React, { Component } from 'react';
import './App.css';

import Overview from './Overview';
import Income from './Income';
import Expenses from './Expenses';


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
            </div>
        </div>
    );
  }
}

export default App;
