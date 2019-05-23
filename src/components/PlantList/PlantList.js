import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlantItem from '../../components/PlantItem/PlantItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const mapStateToProps = reduxState => ({
    reduxState,
});

class PlantList extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API
        this.getPlant();
    }

    getPlant() {
        this.props.dispatch({
          type: 'GET_PLANTS'
        })
    }

    render() {
        return (
            <List component="nav">
                {this.props.reduxState.plantList.map((plantItem, index) => {
                    return (
                        
                        <ListItem button>
                            <PlantItem key={plantItem.id} plantItem={plantItem} />
                        </ListItem>
                        
                    );
                })}
        </List>
        )
    }
}

export default connect(mapStateToProps)(PlantList);
