import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ButtonList from './ButtonList';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';

injectTapEventPlugin();

class App extends Component {

  constructor(context, props) {
      super();
      this.state = {
          items: [""]
      }
      
      this.addTouchTap = this.addTouchTap.bind(this);
  }

  addTouchTap() {
    const { items } = this.state;
    let itemTemp = [...items];
    itemTemp.push("");
    this.setState({ items: itemTemp });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="content-area">
          <ButtonList items={this.state.items}/>
          <div className="justifyCenter">
            <RaisedButton label="Add" primary={true} style={{width: 200, marginTop: 50}} onTouchTap={() => this.addTouchTap()}/> 
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
