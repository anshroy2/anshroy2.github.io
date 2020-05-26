import React, { Component } from 'react';
import {GEP, Quicket} from './Internship.js';
import {Link} from './General.js';
import './../CSS/About.css';
import Mypic from './../Pictures/Ansh.jpg';

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
              I'm Ansh Roy, a senior in Computer Engineering at {UIUC}, 
              graduating in May 2021. I've interned at {QuicketLink} 
              {' '} and {GepLink} as a Software Engineering Intern.
              I'm interning as an Information Security Intern at {' '}
              {NasdaqLink} this upcoming summer.
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

const Linkobj = 
{
  UIUC: {href: 'https://illinois.edu/', text: 'University of Illinois at Urbana-Champaign'},
  Playlists: {href: 'https://open.spotify.com/user/sev3xp8n5zjxaiuvggeqdqt42?si=55aLI45SSi6hQZBomsBMVg', text: 'playlists'},
  Quicket: {href: 'https://www.quicketsolutions.com/qs/', text: 'Quicket Solutions'},
  GEP: {href: 'https://www.gep.com/', text: 'GEP Worldwide'},
  NASDAQ: {href: 'https://www.nasdaq.com/', text: 'NASDAQ'}
}

const UIUC = <Link info={Linkobj.UIUC} />;
const QuicketLink = <Link info={Linkobj.Quicket}/>;
const GepLink = <Link info={Linkobj.GEP}/>;
const NasdaqLink = <Link info={Linkobj.NASDAQ}/>;
const Playlists =  <Link info={Linkobj.Playlists}/>;

export default About;
