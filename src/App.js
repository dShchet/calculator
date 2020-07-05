import React from 'react';
import './App.css';
import Buttons from './Buttons.js';
import calculate from './logic/calculate.js';

class App extends React.Component {
  constructor(props) {
	  super(props);
	  this.state = {
      prev: undefined,
      total: undefined,
      operation: undefined,
      toShow: 0,
    };
  }
  makeCalc=(data)=>{
		this.setState(calculate(this.state, data));
	}
  render() {
    return (
      <div className="App">
        
    <div className="output">{this.state.toShow}</div>
        <Buttons onCalc={this.makeCalc}/>
      </div>
    )
  }
}
export default App;
