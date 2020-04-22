import React, { Component } from 'react'
import './../CSS/About.css'
import Mypic from './../Pictures/Ansh.jpg'

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

            <div className='specific-internship'>
              <div className='logo-div'>
                <a href='https://www.gep.com/' target='_blank' rel='noopener noreferrer'>
                  <img alt='GEP' className='logo' id='gep-logo' src='https://www4.gep.com/sites/all/themes/gep/images/logo.svg' />
                </a>
              </div>
              <div className='title-description-flexbox'>
                <h2 id='Title'>Software Engineering Intern</h2>
                <p className='intern-description'>
                  GEP is a provider of supply chain software, focusing on the procure to pay suite
                  (in which {' '}
                  <a href='https://www.gep.com/research-reports/gep-leader-in-gartner-magic-quadrant-procure-to-pay-suites'>
                    Gartner
                  </a>
                  {' '} ranked them in the top quadrant). I was in the Engineering division of GEP, focusing on the {' '}
                  <a href='https://www.smartbygep.com/'>
                    SMART by GEP
                  </a>
                  {' '} platform. I worked on two projects in this internship.
                </p>

                <p className='intern-description'>
                  Created a backend service, utilizing Python-Flask as an API.
                  Used string matching algorithms (such as Edit Distance)
                  and synonym lists to match from one set of columns to another.
                </p>

                <p className='intern-description'>
                  Extracted JSON data from Azure DataLake using Apache Spark
                  onto a docker hosted on Azure. A script (in Python) ran on
                  a docker that would de-serialize the JSON object and convert
                  into a flat table.
                </p>
              </div>
            </div>

            <hr />

            <div className='specific-internship specific-rev'>
              <div className='logo-div'>
                <a href='https://www.quicketsolutions.com/qs/' target='_blank' rel='noopener noreferrer'>
                  <img alt='Quicket Solutions' className='logo logo-rev' src='https://www.quicketsolutions.com/qs/wp-content/themes/quicket/images/logo.svg' />
                </a>
              </div>
              <div className='title-description-flexbox'>
                <h2 id='Title'>Software Engineering Intern</h2>
                <p className='intern-description'>
                  Quicket Solutions is a startup that builds cloud-based solutions
                  for police forces. The full-integrated solutions includes
                  citations, court and hearings, real-time data analytics, online
                  payment processing, and many more.
                </p>

                <p className='intern-description'>
                  Developed several parsers using ANTLR that can parse through forms
                  containing important data. The parser developed for one type of
                  form can then be used to store structured data collected.
                </p>

                <p className='intern-description'>
                  Devised a new internal tool that allows non-developers to access
                  and change features in the dataabse. It also keeps track of who
                  changed values in the database.
                </p>
                <p className='intern-description'>
                  Introduced several new official forms from scratch that are used
                  later on the platform to auto-generate documents containing the
                  appropriate data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
