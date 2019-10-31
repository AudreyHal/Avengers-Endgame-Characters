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
import Preloader from '../images/mobile/preloader.gif';
import Endgame  from '../images/mobile/endgame2.jpg';
const OnImagesLoaded = require('react-on-images-loaded');


class Mobile extends Component {
  constructor(){
    super();
    this.state ={
      imgArray2: [AntMan, America, Clint, Hulk, Marvel, Nebula, Okoye, Racoon, Stark, Thanos, Thor,  Rhodes, Widow, Endgame ],
      active: false,      
      hide_text: true,
      background: America,
      arrayIndex:13,
      characterName:'',
      characterTitle:'"Part of the journey is the end"',
      characterDescription:' - Tony Stark.',
      background_img: `url(${Preloader})`,
      loaderText: ' '
      
    }}

    clickedCharacter(e, name, index){
    e.preventDefault();    
    this.setState({ arrayIndex: index, characterName: data.characters[index].name, characterTitle: data.characters[index].title, characterDescription: data.characters[index].description }, ()=>{this.setState({ hide_text: true, background_img: `url(${Preloader})`}, ()=>{
    
    this.image = new Image();
    this.image.src = this.state.imgArray2[this.state.arrayIndex];    
    this.image.onload = this.loadClearImage;

    })})
     setTimeout(() => {this.setState({  active:false}); }, 500); 
     } 

    loadClearImage = () =>{
      this.setState({ background_img: `url(${this.state.imgArray2[this.state.arrayIndex]})`, hide_text: false})
    }

    removePreloader = () =>{
      this.setState({ hide_text: false, background_img: `url(${Endgame})`})
    }
    
    componentDidMount = () => {
      this.image = new Image();
      this.image.src = this.state.imgArray2[this.state.arrayIndex];
      this.image.onload = this.removePreloader;     

      this.setState({ loaderText: 'Loading'});
      setTimeout(()=>{this.setState({ loaderText: 'Preparing Assets'})}, 4000)
      setTimeout(()=>{this.setState({ loaderText: 'Getting everything set for you'})}, 9000)
      setTimeout(()=>{this.setState({ loaderText: 'Almost Done'})}, 13000)
    }
    
  render() {
    const divStyle ={backgroundImage: this.state.background_img}
    return (
      <OnImagesLoaded
      onLoaded={() => this.setState({ showLoader: true})}
      onTimeout={() => this.setState({ showLoader: true })}
      timeout={100}
      >
      <div className="Mobile-Component" >
        {this.state.showLoader ? (
            <div className="preloader-cover">
              <div className="loader-text" id="mobile-loader-text">{this.state.loaderText}</div>        
              <div className="reverse-spinner"></div>   
            </div>
          ) : (
          <div className="Mobile" style={divStyle}>        
            <nav id="sidebar" className={this.state.active && 'active'}>
              <div id="close" onClick={() => this.setState({active: !this.state.active})}>X</div>          
              <ul className="nav_list">
                <li onClick={e=> this.clickedCharacter(e, "AntMan", 0)}>
                  <a >Ant Man</a>
                </li>
                <li onClick={e=> this.clickedCharacter(e, "CaptainAmerica", 1)}>
                <a >Captain America</a>
                </li>
                <li onClick={e=> this.clickedCharacter(e, "Marvel", 4 )}>
                  <a >Captain Marvel</a>
                </li>
                <li onClick={e=> this.clickedCharacter(e, "HawkEye", 2)}>
                <a > Hawk Eye</a>
                </li>
                <li onClick={e=> this.clickedCharacter(e, "Hulk", 3)}>
                  <a >Hulk</a>
                </li>              
                <li onClick={e=> this.clickedCharacter(e, "Nebulla", 5)}>
                  <a >Nebulla</a>
                </li>
                <li onClick={e=> this.clickedCharacter(e, "Okoye", 6)}>
                  <a >Okoye</a>
                </li>
                <li onClick={e=> this.clickedCharacter(e, "Racoon", 7)}>
                  <a >Rocket</a>
                </li>
                <li onClick={e=> this.clickedCharacter(e, "Stark", 8)}>
                  <a >Stark</a>
                </li>
                <li onClick={e=> this.clickedCharacter(e, "Thanos", 9)}>
                  <a >Thanos</a>
                </li>
                <li onClick={e=> this.clickedCharacter(e, "Thor", 10)}>
                  <a >Thor</a>
                </li>
                <li onClick={e=> this.clickedCharacter(e, "WarMachine", 11)}>
                  <a >War Machine</a>
                </li>
                <li onClick={e=> this.clickedCharacter(e, "Widow", 12)}>
                  <a >Widow</a>
                </li>
              </ul>
            </nav>
            <div id="content">
              <div className="mobile-header">
                <img src={logo} alt="avengers_endgame_logo" width="100px"></img>
              </div>
              <div className="mobile-container">
                <div className="col-12 mobile-text-container">
                  <div id="dark-overlay"  className={this.state.hide_text && 'hide_text'}>
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
          )}
        </div>
      </OnImagesLoaded> 
    );
  }
}

export default Mobile;