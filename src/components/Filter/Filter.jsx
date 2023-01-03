import React, { Component } from 'react';



    
export class Filter extends Component {
    state = { 
        filter: '',
    } 
    
    handleChange = event => {
        const {  name, value } = event.currentTarget;
        this.setState({[name]: value.trim()})
    }

    render() { 
        return (
        <label>Find contacts by name
            <input
              type="text"
              name="filter"
              onChange={this.handleChange}
            />
        </label>);
    }
}
 
