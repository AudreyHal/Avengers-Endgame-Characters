import React, { Component } from 'react';
import Stark from '../images/stark_mobile3.jpg';
import America from '../images/america_mobile.jpg';
import Natasha from '../images/nat_mobile.jpg';
import data from '../data/data.json'

class Mobile extends Component {
  constructor(){
    super();
    this.state ={
      imgArray2: [Stark, America, Natasha ],
      // imgArray: [antMan, america, hawkEye, hulk, marvel, nebula, okoye, racoon, stark, thanos, thor, warMachine, widow, svg ], 
      active: "false",
      background: America,
      arrayIndex:0,
      characterName:'Hi There',
      characterTitle:'Select a character from the menu ',
      characterDescription:'',
      
    }}
    clickedCharacter(e, name, index){
        e.preventDefault();
        console.log(data.characters[index].name);
        this.setState({ arrayIndex: index, characterName: data.characters[index].name, characterTitle: data.characters[index].title, characterDescription: data.characters[index].description })
       } 

  render() {
    return (
      <div className="Mobile" style={{backgroundImage: `url(${this.state.imgArray2[this.state.arrayIndex]})`}}>
        <nav id="sidebar" className={this.state.active && 'active'}>
          <div id="close" onClick={() => this.setState({active: !this.state.active})}>X</div>
          <div className="sidebar-header"></div>
          <ul className="nav_list">
            <li>
              <a onClick={e=> this.clickedCharacter(e, "Stark", 0)}>Iron Man</a>
            </li>
            <li>
                <a >Captain America</a>
            </li>
            <li>
                <a >Black Widow</a>
            </li>
            <li>
                <a >Contact</a>
            </li>
          </ul>
        </nav>
        <div id="content">
          <div className="mobile-container">
            <button onClick={() => this.setState({active: !this.state.active})}>aadd</button>
          <div className="col-12 mobile-text-container ">
            <div className="dark-overlay">
              <p className="mobile-name">{this.state.characterName}</p>
              <p className="mobile-title">{this.state.characterTitle}</p>
              <p className="mobile-description">{this.state.characterDescription}</p></div>
            </div>
          </div>
        </div>
        <div id="overlay" className={this.state.active && 'active'} ></div>
      </div>
       
    );
  }
}

export default Mobile;