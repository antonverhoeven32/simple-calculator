import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    marginLeft: 10,
    marginRight: 10
};

class ButtonListItem extends Component {
    constructor(context, props) {
        super();
        this.state = {
            showsSumButton: false
        }
        this.numberTouchTap = this.numberTouchTap.bind(this);
    }
    
    numberTouchTap () {
        this.setState({ showsSumButton: true });
    }

    render() {
        const sumButton = (
            this.state.showsSumButton === true ? <RaisedButton label="Sum" style={style} secondary={true}/> : null
        );
            
        return (
            <ListItem disabled={true}>
                <RaisedButton label="1" style={style} onTouchTap={() => this.numberTouchTap()}/>
                <RaisedButton label="2" style={style} onTouchTap={() => this.numberTouchTap()}/>
                <RaisedButton label="3" style={style} onTouchTap={() => this.numberTouchTap()}/>
                <RaisedButton label="4" style={style} onTouchTap={() => this.numberTouchTap()}/>
                {sumButton}
            </ListItem>
        );
        
    }
}

class ButtonList extends Component {
    render() {
        const { items } = this.props;
        
        return (
            <List style={{minHeight: 200}}>
            {
                items.map((data, index) => (
                    <ButtonListItem key={`button-list-item-${index}`}/>
                ))
            }
            </List>
        );
    };
}

export default ButtonList;