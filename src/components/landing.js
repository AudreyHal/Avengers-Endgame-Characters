import React, { Component } from 'react';
 import svg from '../images/1600.jpg';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
      
      {/* <img src={svg} alt="bk" usemap="#image-map" class="img-fluid"></img>

<map name="image-map">
    <area target="_self" alt="captain amaerica" title="captain amaerica" href="#" coords="1177,552,1182,497,1182,479,1192,438,1230,424,1290,476,1278,526,1265,561,1278,586,1381,630,1408,678,1449,656,1505,694,1560,801,1582,807,1569,759,1593,882,1493,873,1337,712,1324,764,1296,798,1289,838,1238,836,1233,879,1242,884,1184,887,1151,879,1125,887,1141,774,1097,722,1064,769,1056,680,1098,767,1086,819,1060,880,1001,889,1015,812,1037,742,1040,665" shape="poly"></area>
</map> */}
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1600 900">
  <image  height="100%" width="100%" xlinkHref={svg}></image><a xlinkHref="#">
    <rect x="0" y="0" fill="#fff" opacity="0" width="100" height="100"></rect>
  </a>
</svg>
     </div>
       
    );
  }
}

export default Landing;