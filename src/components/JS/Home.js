import React, { Component } from 'react'

import './../CSS/Home.css'
import Landscape3 from './../Pictures/nyc-view-narrow.png'

class Home extends Component {
  render () {
    return (
      <div>
        <div id='About-Me'>
          <h1 id='Name'>Ansh Roy</h1>
          <br />
          <br />

          <img id='profile-pic' src={Landscape3} alt='Ansh Roy' width='1500' height='500' />
          <br />

          <br />

          <footer>
            <h2 className='where-i-go'>May 2021</h2>
            <h2 className='where-i-go'>Computer Engineering</h2>
            <h2 className='where-i-go'>University of Illinois at Urbana-Champaign</h2>
            <br />
            <br />
            <ul id='logos-flexbox'>
              <li className='logos-flexbox-item'>
                <a href='https://www.linkedin.com/in/anshroytx/' target='_blank' rel='noopener noreferrer'>
                  <img className='Social' alt='Linkedin' src='https://i.imgur.com/za6EkVH.png' />
                </a>
              </li>

              <li className='logos-flexbox-item'>
                <a href='https://github.com/anshroy2/' target='_blank' rel='noopener noreferrer'>
                  <img className='Social' alt='GitHub' src='https://image.flaticon.com/icons/svg/25/25231.svg' />
                </a>
              </li>
              <li className='logos-flexbox-item'>
                <a href='mailto:anshroy2@illinois.edu'>
                  <img className='Social' alt='mailto' src='https://pngimage.net/wp-content/uploads/2018/05/email-logo-vector-png-1.png' />
                </a>
              </li>
            </ul>
          </footer>
        </div>

      </div>

    )
  }
}

export default Home
