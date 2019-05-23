import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlantItem extends Component {
    removeItem = () => {
        this.props.dispatch({
            type: 'DELETE_PLANT',
            payload: this.props.plantItem.id
        })
    }
    getPlant() {
            this.props.dispatch({
              type: 'GET_PLANT'
            })
        
    }

    render() {
        return (
            <li>
                <span>{this.props.plantItem.plant}</span>
                <button onClick={this.removeItem}>Remove</button>
            </li>
        )
    }
}

export default connect()(PlantItem);