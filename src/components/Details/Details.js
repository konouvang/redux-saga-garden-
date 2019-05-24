import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Details extends Component {
    render(){
        // const pizzaHTML = this.props.reduxState.plantlist.map((plant, index) => {
        //     return (
        //       <div key={index}>
        //         <img src={pizza.image_path} alt={pizza.description}/>
        //         <p>{pizza.name}</p>
        //         <p>{pizza.description}</p>
        //         <p>{pizza.price}</p>
        //         <button data-id={index} onClick={this.addPizzaToOrder}>Add</button>
        //         <button>Remove</button>
        //       </div>
        //     )
        //   })
        
        // function ParamsPlants() {
        //     return (
        //         <Router>
        //             <div>
        //                 <h2>Plants</h2>
        //                 <ul>
        //                     <li></li>
        //                 </ul>
        //             </div>
        //         </Router>
        //     )
        // }
        return(
            <div>
                <input placeholder = "Name" type="text">Name</input>
                <input placeholder = "Kingdom" type="text">Kingdom</input>
                <input placeholder = "Clade" type="text">Clade</input>
                <input placeholder = "Order" type="text">Order</input>
                <input placeholder = "Family" type="text">Family</input>
                <input placeholder = "Subfamily" type="text">Subfamily</input>
                <input placeholder = "Genus" type="text">Genus</input>
                <button type="text">Submit Changes</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Details);
