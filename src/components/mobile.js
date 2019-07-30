import React, { Component } from 'react';
import America from '../images/mobile/america.jpg';
import data from '../data/data.json';
import logo from '../images/avengers_logo_3.png';
import Hulk from '../images/mobile/hulk.jpg';
import Nebula from '../images/mobile/nebula.jpg';
import Okoye from '../images/mobile/okoye.jpg';
import Stark from '../images/mobile/stark.jpg';
import Widow from '../images/mobile/widow.jpg';
import Marvel from '../images/mobile/marvel.jpg';
import Rhodes from '../images/mobile/rhodes.jpg';
import Racoon from '../images/mobile/racoon.jpg';
import Clint from '../images/mobile/hawkeye.jpg';
import Thor from '../images/mobile/thor.jpg';
import Thanos from '../images/mobile/thanos.jpg';
import AntMan  from '../images/mobile/antman.jpg';
import Endgame  from '../images/mobile/endgame2.jpg';

class Mobile extends Component {
  constructor(){
    super();
    this.state ={
      imgArray2: [AntMan, America, Clint, Hulk, Marvel, Nebula, Okoye, Racoon, Stark, Thanos, Thor,  Rhodes, Widow, Endgame ],
      active: false,
      background: America,
      arrayIndex:13,
      characterName:'',
      characterTitle:'"Part of the journey is the end"',
      characterDescription:' - Tony Stark.',
      
    }}
    clickedCharacter(e, name, index){
    e.preventDefault();
    console.log(data.characters[index].name);
    this.setState({  arrayIndex: index, characterName: data.characters[index].name, characterTitle: data.characters[index].title, characterDescription: data.characters[index].description, active:false })
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
                <a onClick={e=> this.clickedCharacter(e, "AntMan", 0)}>Ant Man</a>
              </li>
              <li>
              <a onClick={e=> this.clickedCharacter(e, "CaptainAmerica", 1)}>Captain America</a>
              </li>
              <li>
              <a onClick={e=> this.clickedCharacter(e, "HawkEye", 2)}> Hawk Eye</a>
              </li>
              <li>
                <a onClick={e=> this.clickedCharacter(e, "Hulk", 3)}>Hulk</a>
              </li>
              <li>
                <a onClick={e=> this.clickedCharacter(e, "Marvel", 4 )}>Captain Marvel</a>
              </li>
              <li>
                <a onClick={e=> this.clickedCharacter(e, "Nebulla", 5)}>Nebulla</a>
              </li>
              <li>
                <a onClick={e=> this.clickedCharacter(e, "Okoye", 6)}>Okoye</a>
              </li>
              <li>
                <a onClick={e=> this.clickedCharacter(e, "Racoon", 7)}>Racoon</a>
              </li>
              <li>
                <a onClick={e=> this.clickedCharacter(e, "Okoye", 6)}>Hulk</a>
              </li>
              <li>
                <a onClick={e=> this.clickedCharacter(e, "Stark", 8)}>Stark</a>
              </li>
              <li>
                <a onClick={e=> this.clickedCharacter(e, "Thanos", 9)}>Thanos</a>
              </li>
              <li>
                <a onClick={e=> this.clickedCharacter(e, "Thor", 10)}>Thor</a>
              </li>
              <li>
                <a onClick={e=> this.clickedCharacter(e, "WarMachine", 11)}>War Machine</a>
              </li>
              <li>
                <a onClick={e=> this.clickedCharacter(e, "Widow", 12)}>Widow</a>
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
            <p className="mobile-name">{this.state.characterName}</p>
            <p className="mobile-title">{this.state.characterTitle}</p>
            <p className="mobile-description">{this.state.characterDescription}</p>
          <div className="text-center"><button className="btn character-button" onClick={() => this.setState({active: !this.state.active})}>Select a Character</button></div>
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