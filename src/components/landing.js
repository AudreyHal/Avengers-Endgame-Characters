import React, { Component } from 'react';
import svg from '../images/1600.jpg';
import america from '../images/america.jpg';
import antMan from '../images/ant-man.jpg';
import hawkEye from '../images/hawk_eye.jpg';
import hulk  from '../images/hulk.jpg';
import warMachine from '../images/iron_parrot.jpg';
import marvel from '../images/marvel.jpg';
import nebula from '../images/nebula.jpg';
import okoye from '../images/okoye.jpg';
import racoon from '../images/racoon.jpg';
import stark from '../images/stark.jpg';
import thanos from '../images/thanos.jpg';
import thor from '../images/thor.jpg';
import widow from '../images/widow.jpg';
import logo from '../images/avengers_logo_3.png';
import data from '../data/data.json'
const OnImagesLoaded = require('react-on-images-loaded');


class Landing extends Component {
  constructor(){
    super();
    this.state ={
      imgArray: [antMan, america, hawkEye, hulk, marvel, nebula, okoye, racoon, stark, thanos, thor, warMachine, widow, svg ], 
      arrayIndex:13,
      characterName:'',
      characterTitle:'Avengers, Assemble...',
      characterDescription:'Click on any character for more details.',
      showLoader: true,
      loaderText: ' '
    }
  }
  clickedCharacter(e, name, index){
    e.preventDefault();
    this.setState({ arrayIndex: index, characterName: data.characters[index].name, characterTitle: data.characters[index].title, characterDescription: data.characters[index].description })
   } 

   componentDidMount(){
    this.setState({ loaderText: 'Loading'});
    setTimeout(()=>{this.setState({ loaderText: 'Preparing Assets'})}, 6000)
    setTimeout(()=>{this.setState({ loaderText: 'Getting everything set for you'})}, 11000)
    setTimeout(()=>{this.setState({ loaderText: 'Almost Done'})}, 15000)
   }

  render() {
    return (
      <OnImagesLoaded
      onLoaded={() => this.setState({ showLoader: false})}
      onTimeout={() => this.setState({ showLoader: false })}
      timeout={100}
      >
        <div className="Landing">

          {this.state.showLoader ? (
            <div className="preloader-cover">
              <div className="loader-text">{this.state.loaderText}</div>        
              <div className="reverse-spinner"></div>   
            </div>
          ) : (
          <div>
            <div className="textarea row">
              <div className="header">
                <img src={logo} alt="avengers_endgame_logo"></img>
              </div>
              <div className="col-12 text-container">
                <div className="character-name">{this.state.characterName}</div>
                <div className="character-title">{this.state.characterTitle}</div>
                <div className="character-description">{this.state.characterDescription}</div>
              </div>
            </div> 

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1600 900">
              <image height="100%" width="100%" xlinkHref={this.state.imgArray[this.state.arrayIndex]}></image>
              <a onClick={e=> this.clickedCharacter(e, "CaptainAmerica", 1)}>
              <polygon fill="transparent"  className="captain-america" points="1177,552,1182,497,1182,479,1192,438,1230,424,1290,476,1278,526,1265,561,1278,586,1381,630,1408,678,1449,656,1505,694,1560,801,1582,807,1569,759,1593,882,1493,873,1337,712,1324,764,1296,798,1289,838,1238,836,1233,879,1242,884,1184,887,1151,879,1125,887,1141,774,1097,722,1064,769,1056,680,1098,767,1086,819,1060,880,1001,889,1015,812,1037,742,1040,665"></polygon>
              </a>
              <a onClick={e=> this.clickedCharacter(e, "Stark", 8)}>
                <polygon fill="transparent" className="tony-stark" points="1055,10,1121,10,1164,11,1186,30,1200,41,1224,65,1237,85,1253,115,1250,148,1236,175,1219,208,1221,222,1219,247,1227,269,1238,283,1258,287,1244,304,1213,307,1185,290,1155,277,1131,294,1128,319,1120,336,1103,342,1072,348,1083,286,1046,216,1047,154,1046,243,1067,266,1039,136,1042,260,1066,240,1052,247,1048,141"></polygon>
              </a>
              <a onClick={e=> this.clickedCharacter(e, "Thor", 10)}>
                <polygon fill="transparent" className="thor" points="1493,390,1474,445,1464,478,1458,449,1465,417,1456,383,1427,341,1404,334,1486,362,1464,328,1435,301,1409,293,1490,374,1443,327,1416,318,1400,293,1382,297,1496,393,1481,350,1472,341,1372,290,1357,286,1366,317,1372,339,1431,338,1371,349,1458,332,1368,267,1350,262,1352,241,1352,233,1357,188,1368,257,1359,164,1321,130,1297,129,1287,143,1270,154,1263,187,1256,216,1269,242,1276,260,1279,273,1277,297,1280,311,1263,287,1259,303,1256,312,1238,325,1217,327,1211,338,1208,359,1204,379,1210,399,1227,410,1258,416,1287,406,1311,380,1336,365,1362,353,1388,339,1417,331,1408,320,1493,390"></polygon>
              </a>
              <a onClick={e=> this.clickedCharacter(e, "Marvel", 4 )}>
              <polygon fill="transparent" className="captain-marvel" points="1349,370,1394,349,1428,355,1438,367,1447,389,1457,411,1451,428,1441,446,1447,468,1440,479,1435,487,1454,506,1476,535,1468,567,1465,598,1459,627,1457,650,1438,644,1417,647,1410,656,1400,640,1387,629,1369,617,1355,581,1342,555,1331,547,1322,564,1314,584,1308,598,1288,589,1278,579,1288,523,1328,390,1321,411,1300,418,1278,415,1280,445,1304,470"></polygon>
              </a>
              <a onClick={e=> this.clickedCharacter(e, "Hulk", 3)}>
                <polygon fill="transparent" className="hulk" points="1182,289,1161,289,1141,309,1134,342,1127,379,1112,397,1122,430,1123,455,1136,481,1150,503,1153,517,1158,534,1163,552,1175,562,1171,536,1167,509,1171,486,1177,465,1177,435,1194,420,1206,416,1181,394,1194,350"></polygon>
              </a>
              <a onClick={e=> this.clickedCharacter(e, "Widow", 12)}>
                <polygon fill="transparent" className="johanssen" points="996,387,972,435,993,500,1071,392,1083,508,941,604,1052,562,997,413,1109,428,1167,594,995,385,1037,364,1102,413,1109,516,996,470,999,340,1036,306,1050,292,1014,356,1040,533,1042,541,927,619,910,610,753,530,907,636,963,627,1011,570,997,483"></polygon>
              </a>
              <a onClick={e=> this.clickedCharacter(e, "Okoye", 6)}>
                <polygon fill="transparent" className="okoye" points="1493,431,1523,419,1538,426,1555,441,1562,457,1558,474,1554,485,1552,498,1542,503,1535,513,1525,512,1520,527,1513,651,1486,450,1500,461,1482,484,1472,502,1493,593,1519,661,1486,448,1513,517,1548,581,1565,523,1589,534,1582,581,1568,639,1522,677,1490,476,1517,670,1522,517,1524,647,1529,640"></polygon>
              </a>
              <a onClick={e=> this.clickedCharacter(e, "HawkEye", 2)}>
              <polygon fill="transparent" className="hawk-eye" points="964,718,977,721,993,731,994,750,992,787,1008,800,983,899,787,899,810,821,789,893,796,843,820,828,784,895,819,808,791,880,851,728,966,642,788,894,873,899,885,899,864,777,924,800"></polygon>
              </a>
              <a onClick={e=> this.clickedCharacter(e, "Racoon", 7)}>
              <polygon fill="transparent" className="racoon" points="1245,852,1284,863,1327,863,1349,899,1401,899,1444,899,1435,794,1387,762,1345,790,1336,846"></polygon>
              </a>
              <a onClick={e=> this.clickedCharacter(e, "AntMan", 0)}>
              <polygon fill="transparent" className="ant-man" points="893,390,897,445,806,390,811,370,904,415,939,397,961,456,969,403,982,383,986,313,970,276,943,276,929,365"></polygon>
              </a>
              <a onClick={e=> this.clickedCharacter(e, "Nebulla", 5)}>
              <polygon fill="transparent" className="nebulla" points="1066,572,1066,538,1086,523,1112,526,1112,547,1109,579,1151,592,1112,613,1056,645,979,575,939,514,1067,622,1093,591"></polygon>
              </a>
              <a onClick={e=> this.clickedCharacter(e, "WarMachine", 11)}>
              <polygon fill="transparent" className="war-machine" points="922,514,958,567,941,596,900,588,843,510,781,449,799,414,905,471,972,523,941,465,928,411,910,421,908,472,908,437,920,492,948,500,948,437,944,435,942,420,951,448,945,435"></polygon>
              </a>
              <a onClick={e=> this.clickedCharacter(e, "Thanos", 9)}>
              <polygon fill="transparent" className="thanos" points="782,100,792,57,795,45,805,11,826,1,877,1,929,1,980,2,1033,1,1042,52,1038,77,1023,110,1008,131,1003,185,996,220,993,243,950,265,921,282,924,308,922,334,915,358,900,370,887,381,871,382,861,365,856,354,854,336,854,319,853,301,837,288,832,268,825,259,822,241,823,228,816,209,818,202,801,196,787,179,784,161,795,145,798,134,791,116"></polygon>
              </a>                     
            </svg>

          </div> 
        )}    
        </div>
      </OnImagesLoaded>
    );
  }
}

export default Landing;