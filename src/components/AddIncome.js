import React, { Component } from 'react';

import PassiveIncomeForm from './PassiveIncomeForm'
import ActiveIncomeForm from './ActiveIncomeForm'

class AddIncome extends Component {

    constructor(){
        super();
        this.state={incomeType:''

        };

    }

    handleIncomeTypeChange(e){
        //alert(this.refs.income.value());
        //alert(e.target.value);

        this.setState({
            incomeType:e.target.value
        });

    }

    handleSubmit(e){
        //alert("Submitted");
        alert(this.refs.income.value);
        e.preventDefault();
    }

    render() {
        return (
            <div className={"Root"}>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <p>Add New Income</p>
                        <select ref="income" onChange={this.handleIncomeTypeChange.bind(this)}>
                            <option selected value={"default"}>Select One</option>
                            <option value={"passive"}>Passive</option>
                            <option value={"active"}>Active</option>
                        </select>
                    </div>

                    {this.state.incomeType === 'passive' ? <PassiveIncomeForm/> : null}
                    {this.state.incomeType === 'active' ?  <ActiveIncomeForm/> : null}

                    <input type={'submit'} value={"Done"} />
                </form>

            </div>
        );
    }
}

export default AddIncome;
