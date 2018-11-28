import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state ={
    counterValue: 0,
  }
  handleClick(){
    const newValue = this.state.counterValue + 1;
    this.setState({counterValue: newValue});
    console.log("click")
  }
  render() {
    return (
      <div className="App">
        <h3>{this.state.counterValue}</h3> 
        <button onClick={()=>this.handleClick()}>click me dammit!</button>
      </div>
    );
  }
}

export default App;
