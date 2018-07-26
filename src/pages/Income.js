import React, { Component } from 'react';

import './Income.css';

import Title from '../components/Title'
import AddIncome from '../components/AddIncome'

class Income extends Component {
    constructor(){
        super();
        this.state = {showIncome: false};
    }
    handleAddIncome(e){
        this.setState({showIncome: true});
    }

    render() {
        return (
            <div className={"Root"}>
                <Title title={"Income"} />
                <button className={"add-button"} onClick={this.handleAddIncome.bind(this)}>ADD</button>

                {this.state.showIncome ? <AddIncome /> : null}

            </div>
        );
    }
}

export default Income;
