import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import brown from '@material-ui/core/colors/brown';

const brownTheme = createMuiTheme({ palette: { primary: brown } })

class PlantItem extends Component {
    deletePlant = () => {
        this.props.dispatch({
            type: 'DELETE_PLANT',
            payload: this.props.plantItem.id
        })
        console.log('DELETE button firing!')
    }

    getPlant() {
            this.props.dispatch({
              type: 'GET_PLANT'
            })
        
    }

    render() {
        return (
            <li>
                <span>{this.props.plantItem.name}</span>
                <MuiThemeProvider theme={brownTheme}>
                <IconButton aria-label="Delete" color="primary" onClick={this.deletePlant}><DeleteIcon/></IconButton>
                </MuiThemeProvider>
            </li>
        )
    }
}

export default connect()(PlantItem);