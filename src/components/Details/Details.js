import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class Details extends Component {

    updatePlants = (event) => {
        this.props.dispatch({
            type: 'UPDATE_PLANT',
            payload: {
                id: 1,
                name: 'White Rose',
                kingdom: 'Rosey',
                clade: 'Nosey',
                order: 'Posey',
                family: 'Ashes',
                subfamily: 'We All',
                genus: 'Fall Down',

            }
        })
    }

    render() {
        return (
            <div>
                <input placeholder="Name" type="text" />
                <input placeholder="Kingdom" type="text"/>
                <input placeholder="Clade" type="text"/>
                <input placeholder="Order" type="text"/>
                <input placeholder="Family" type="text"/>
                <input placeholder="Subfamily" type="text"/>
                <input placeholder="Genus" type="text"/>
                <button onClick={this.updatePlants} type="text">Submit Changes</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Details);
