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
var OnImagesLoaded = require('react-on-images-loaded');


class Mobile extends Component {
  constructor(){
    super();
    this.state ={
      imgArray2: [AntMan, America, Clint, Hulk, Marvel, Nebula, Okoye, Racoon, Stark, Thanos, Thor,  Rhodes, Widow, Endgame ],
      active: false,      
      hide_text: false,
      background: America,
      arrayIndex:13,
      characterName:'',
      characterTitle:'"Part of the journey is the end"',
      characterDescription:' - Tony Stark.',
      background_img: `url(${Endgame})`,
      loaderText: ' '
      
    }}

    clickedCharacter(e, name, index){
    e.preventDefault();    
    this.setState({ arrayIndex: index, characterName: data.characters[index].name, characterTitle: data.characters[index].title, characterDescription: data.characters[index].description }, ()=>{this.setState({  background_img: `url(${this.state.imgArray2[this.state.arrayIndex]})`}
    )})
     setTimeout(() => {this.setState({  active:false}); }, 500); 
     } 

        
    componentDidMount = () => {      
      this.setState({ loaderText: 'Loading'});
      setTimeout(()=>{this.setState({ loaderText: 'Preparing Assets'})}, 6000)
      setTimeout(()=>{this.setState({ loaderText: 'Getting everything set for you'})}, 11000)
      setTimeout(()=>{this.setState({ loaderText: 'Almost Done'})}, 15000)
    }

    runAfterImagesLoad =()=>{
      console.log("loaded");
      this.setState({ showLoader: false })
    }   
    
    runAfterTimeout =()=>{
     console.log("timeout");
     this.setState({ showLoader: false })
   }
    
  render() {
    const divStyle ={backgroundImage: this.state.background_img}
    const visibleStyle={}
    const hiddenStyle={display: 'none'}
    return (
      <div className="Mobile-Component" >
        <OnImagesLoaded
        onLoaded={() => this.setState({ showLoader: false})}
        onTimeout={() => this.setState({ showLoader: false })}
        timeout={50000}
        >  
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
            
          <div className="hide_images">
            <img src={Endgame} alt="endgame"/>  
            <img src={America} alt="america"/>
            <img src={AntMan } alt="antMan "/>
            <img src={Clint} alt="hawkEye"/>
            <img src={Hulk} alt="hulk"/>
            <img src={Rhodes} alt="warMachine"/>
            <img src={Marvel} alt="marvel"/>
            <img src={Nebula} alt="nebula"/>
            <img src={Okoye} alt="okoye"/>
            <img src={Stark} alt="stark"/>
            <img src={Thanos} alt="thanos"/>
            <img src={Thor} alt="thor"/>
            <img src={Racoon} alt="racoon"/>
            <img src={Widow} alt="widow"/>
          </div>
        </OnImagesLoaded> 

        {/* Preloader */}
        <div className="preloader-cover" id="mobile-preloader-cover" style={ this.state.showLoader ? visibleStyle : hiddenStyle }>
          <div className="loader-text">{this.state.loaderText}</div>        
          <div className="reverse-spinner"></div>   
        </div>
      </div>
    );
  }
}

export default Mobile;