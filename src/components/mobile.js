import React, { Component } from 'react';
import Stark from '../images/stark_mobile3.jpg';
// import America from '../images/america_mobile.jpg';
import America from '../images/america.svg';
import America2 from '../images/mobile/america.jpg';
import Natasha from '../images/nat_mobile.jpg';

import Natasha2 from '../images/natasha.svg';
// import Natasha2 from '../images/natasha.svg';
import data from '../data/data.json';
import logo from '../images/avengers_logo_3.png';
import Widow from '../images/mobile/natasha.jpg';

class Mobile extends Component {
  constructor(){
    super();
    this.state ={
      imgArray2: [ America2, America, Widow, Natasha2, Stark, America, Natasha ],
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
            <div className="sidebar-header">
          </div>
          <ul className="nav_list">
              <li>
                  <a onClick={e=> this.clickedCharacter(e, "Stark", 0)}>Iron Man</a>
              </li>
              <li>
                <a onClick={e=> this.clickedCharacter(e, "Stark", 0)}>Captain America</a>
              </li>
              <li>
                <a onClick={e=> this.clickedCharacter(e, "Stark", 0)}>Captain America</a>
              </li>
              <li>
                <a onClick={e=> this.clickedCharacter(e, "Stark", 0)}>Captain America</a>
              </li>
          </ul>
        </nav>
      <div id="content">
      <div className="mobile-header">
        <img src={logo} alt="avengers_endgame_logo" width="100px"></img>
      </div>
        <div className="mobile-container">
        <div className="col-12 mobile-text-container">
          <div className="dark-overlay">
            <p className="mobile-name">Tony Stark</p>
            <p className="mobile-title">Iron Man</p>
            <p className="mobile-description">Genius. Billionaire. Playboy. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.</p>
          <div className="text-center"><button className="btn character-button" onClick={() => this.setState({active: !this.state.active})}>Change Character</button></div>
          </div>
        </div>
        </div>
        <div id="overlay" className={this.state.active && 'active'} ></div>
      </div>
      </div>
       
    );
  }
}

export default Mobile;