import React, { Component } from 'react';

import "./Overview.css";
import Graph from "../components/NetWorthGraph.js";


class Overview extends Component {

    render() {
        return (
            <div>
                <div className="left">
                    <Graph/>
                </div>
                <div className="right">
                    Basic Details will go here.
                </div>
            </div>
        );
    }
}

export default Overview;
