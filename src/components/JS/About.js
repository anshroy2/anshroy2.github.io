import React, { Component } from 'react';
import {GEP, Quicket, NASDAQ, Visa} from './Internship.js';
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
            <p className='below-pic'>Software Engineer</p>
            <p className='below-pic'>Visa</p>
          </div>
          <div id='personal-description'>
            <p id='personal-description-para'>
              I'm Ansh Roy, a Software Engineer at {VisaLink}. I work as a full-stack developer on several projects.
              I gradutated in Computer Engineering at {UIUC}, 
              graduating in May 2021. I've interned at {NasdaqLink}, {' '}
              {QuicketLink}, and {GepLink} as a Software Engineering Intern.
              I've also created a Spotify Statistics website, where one can 
              log in and see their top artists and songs played.
              I'm now looking for full time opportunities, preferrably in 
              front-end or full stack.
            </p>
          </div>

          <div id='internships'>
            <hr/>
            <Visa/>
            <hr/>
            <NASDAQ/>
            <hr/>
            <Quicket/>
            <hr/>
            <GEP/>
            <hr/>
          </div>
        </div>
      </div>
    )
  }
}

const Linkobj = 
{
  UIUC: {href: 'https://illinois.edu/', text: 'University of Illinois'},
  Visa: {href: 'https://usa.visa.com/', text: 'Visa'},
  Playlists: {href: 'https://open.spotify.com/user/sev3xp8n5zjxaiuvggeqdqt42?si=55aLI45SSi6hQZBomsBMVg', text: 'playlists'},
  Quicket: {href: 'https://www.quicketsolutions.com/', text: 'Quicket Solutions'},
  GEP: {href: 'https://www.gep.com/', text: 'GEP Worldwide'},
  NASDAQ: {href: 'https://www.nasdaq.com/', text: 'NASDAQ'}
}

const UIUC = <Link info={Linkobj.UIUC} />;
const VisaLink = <Link info={Linkobj.Visa}/>;
const QuicketLink = <Link info={Linkobj.Quicket}/>;
const GepLink = <Link info={Linkobj.GEP}/>;
const NasdaqLink = <Link info={Linkobj.NASDAQ}/>;
const Playlists =  <Link info={Linkobj.Playlists}/>;

export default About;
