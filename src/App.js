import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing';
import Mobile from './components/mobile';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isDesktop: false };
    this.updatePredicate = this.updatePredicate.bind(this);
  }
  
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 641 });
  }
    

  render() {
    const isDesktop = this.state.isDesktop;
    return (
      <div className="App">
      {isDesktop ? (
          <Landing ></Landing>
        ) : (
          <Mobile></Mobile>
        )}        
      </div>
    );
  }
}

export default App;
