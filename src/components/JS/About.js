import React, { Component } from 'react';
import './../CSS/About.css';
import Mypic from './../Pictures/Ansh.jpg';
import {GEP, Quicket} from './Internship.js';

class About extends Component {
  render () {
    return (
      <div id='about'>
        <h1 id='name'>Ansh Roy</h1>
        <img id='about-pic' src={Mypic} alt='Ansh Roy' />
        <div>
          <div>
            <p className='below-pic'>Computer Engineering</p>
            <p className='below-pic'>UIUC 2021</p>
          </div>
          <div id='personal-description'>
            <p id='personal-description-para'>
              I'm Ansh Roy, a junior in Computer Engineering at {' '}
              <a href='https://illinois.edu/'>
                University of Illinois at Urbana-Champaign
              </a>
              , graduating in May 2021. I like to make {' '}
              <a href='https://open.spotify.com/user/sev3xp8n5zjxaiuvggeqdqt42?si=55aLI45SSi6hQZBomsBMVg'>
                playlists
              </a>
              {' '} and watch TV shows in my free time. This semester, I'm interning at {' '}
              <a href='https://www.quicketsolutions.com/qs/' className='Links'>
                  Quicket Solutions
              </a>
              {' '} as a Software Engineering Intern. In Summer 2019, I interned at {' '}
              <a className='Links' href='https://www.gep.com/'>
                GEP Worldwide
              </a>
              {' '} as a Software Engineering Intern.
            </p>
          </div>

          <div id='internships'>
            <hr />
            <GEP/>
            <hr/>
            <Quicket/>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
