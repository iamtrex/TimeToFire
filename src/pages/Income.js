import React, { Component } from 'react';

import './Income.css';

import Title from '../components/Title'

class Income extends Component {
    handleAddIncome(e){

    }

    render() {
        return (
            <div className={"Root"}>
                <Title title={"Income"} />
                <button className={"add-button"} onclick={this.handleAddIncome.bind(this)}>ADD</button>
            </div>
        );
    }
}

export default Income;
