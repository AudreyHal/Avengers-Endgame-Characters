import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Landing from './components/landing';
import CaptainAmerica from './components/captainAmerica';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {displayComponent: "Landing"};
  }

 clicked(clicked_item){
  this.setState({ displayComponent: clicked_item})
 }

  render() {
  //  const landing =this.state.landing
  //  const  captainAmerica =this.state.captainAmerica
  const displayComponent = this.state.displayComponent
    return (
      <div className="App">
        {displayComponent === "Landing"  && <Landing clicked={this.clicked.bind(this)}></Landing>}
        {displayComponent === "CaptainAmerica" && <CaptainAmerica></CaptainAmerica>}
      </div>
    );
  }
}

export default App;
