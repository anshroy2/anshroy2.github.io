import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';

import './Home.css'
import Mypic from './Ansh.jpg'
import Landscape from './Landscape-Ansh.png'
import Landscape2 from './nyc-view-mid.png'
import Landscape3 from './nyc-view-narrow.png'

class Home extends Component {
  render() {
    return (
      <div>
        <div id="About-Me">
          <h1 id="Name">Ansh Roy</h1>
          <br/>
          <img id="profile-pic" src={Landscape3} alt="Image of Ansh Roy" width="1500" height="500"/>
          <br/>
          <h2 class="where-i-go">May 2021</h2>
          <h2 class="where-i-go">Computer Engineering</h2>
          <h2 class="where-i-go">University of Illinois at Urbana-Champaign</h2>

          <ul id="logos-flexbox">
            <li>
              <a href="https://www.linkedin.com/in/anshroytx/" target="_blank">
                <img class="Social" src="https://i.imgur.com/za6EkVH.png"/>
              </a>
            </li>
            
            <li>
              <a href="https://github.com/anshroy2/" target="_blank">
                <img class="Social" src="https://image.flaticon.com/icons/svg/25/25231.svg"/>
              </a>
            </li>
            <li>
              <a href="mailto:anshroy2@illinois.edu">
                <img class="Social" src="https://pngimage.net/wp-content/uploads/2018/05/email-logo-vector-png-1.png"/>
              </a>
            </li>
          </ul>
        </div>
        
        
      </div>
      
    );
  }
}

export default Home;