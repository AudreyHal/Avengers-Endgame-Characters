import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Landing from './components/landing';
import Mobile from './components/mobile';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isDesktop: false };
    this.updatePredicate = this.updatePredicate.bind(this);
  }
  

//  clicked(clicked_item){
//   this.setState({ displayComponent: clicked_item})
//  }

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
        {/* <Landing ></Landing>} */}
      </div>
    );
  }
}

export default App;
