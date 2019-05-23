import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';

const lightGreenTheme = createMuiTheme({ palette: { primary: lightGreen } })

const mapStateToProps = reduxState => ({
    reduxState,
});

class NewPlantForm extends Component {
    state = {
        newPlant: {
            id: 4,
            name: ''
        }
    }

    handleNameChange = event => {
        console.log('event happended')
        this.setState({
            newPlant: {
                ...this.state.newPlant,
                name: event.target.value,
            }
        });
    }

    componentDidMount() {
        // this.getElements();
        this.props.dispatch({
          type: 'GET_PLANTS'
        })
        console.log('This is in NewPlantForm,');
      }

    addNewPlant = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'POST_PLANT', payload: this.state.newPlant })
        this.setState({
            newPlant: {
                id: this.state.newPlant.id + 1,
                name: '',
            }
        });
    }

    render() {
        return (
            <div>
                <h3>This is the form</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewPlant}>
                    <input type='text' value={this.state.newPlant.name} onChange={this.handleNameChange} />
                    <MuiThemeProvider theme={lightGreenTheme}>
                    <Button variant="contained" color="primary" type='submit'>Add New Plant</Button>
                    </MuiThemeProvider>
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps)(NewPlantForm);
