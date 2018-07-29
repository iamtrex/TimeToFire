import React, { Component } from 'react';

import Title from "../Title";

class Active extends Component {

    constructor(){
        super();
    }

    render() {

        return (
            <div className={"Active"}>
                <Title title={this.props.name}/>
                <p>${this.props.amount} per year </p>
            </div>);
    }
}

export default Active;
