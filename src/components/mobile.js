import React, { Component } from 'react';
// import Stark from '../images/stark_mobile3.jpg';
// import America from '../images/america_mobile.jpg';
import Natasha from '../images/nat_mobile.jpg';
import data from '../data/data.json'

class Mobile extends Component {
  constructor(){
    super();
    this.state ={
      active: "false"

    }}
    clickedCharacter(e, name, index){
        e.preventDefault();
        console.log(data.characters[index].name);
        this.setState({ arrayIndex: index, characterName: data.characters[index].name, characterTitle: data.characters[index].title, characterDescription: data.characters[index].description })
       } 

  render() {
    return (
      <div className="Mobile" style={{backgroundImage: `url(${Natasha})`}}>

<nav id="sidebar" className={this.state.active && 'active'}>
  <div id="close" onClick={() => this.setState({active: !this.state.active})}>X</div>
    <div className="sidebar-header">
       <h3>Bootstrap Sidebar</h3>
      </div>

        <ul className="list-unstyled components">
            <p>Dummy Heading</p>
            <li>
                <a onClick={e=> this.clickedCharacter(e, "Stark", 8)}>Iron Man</a>
            </li>
            <li>
                <a href="#">Captain America</a>
            </li>
            <li>
                <a href="#">Black Widow</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
    <div id="content">

        

        <div className="mobile-container">
          <button onClick={() => this.setState({active: !this.state.active})}>aadd</button>
        <div className="col-12 mobile-text-container ">
          <div className="dark-overlay">
            <p className="mobile-name">Tony Stark</p>
            <p className="mobile-title">Iron Man</p>
            <p className="mobile-description">Genius. Billionaire. Playboy. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.</p></div>
          
        </div>
        </div>

      
    </div>
    
    <div id="overlay" className={this.state.active && 'active'} ></div>
      </div>
       
    );
  }
}

export default Mobile;