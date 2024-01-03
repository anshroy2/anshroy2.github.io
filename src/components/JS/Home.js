import React, { Component } from 'react'

import './../CSS/Home.css'
import Landscape3 from './../Pictures/nyc-view-narrow.png'

class Home extends Component {
  render () {
    return (
      <div id='About-Me'>
        <h1 id='Name'>Ansh Roy</h1>
        <h3></h3>
        <h3></h3>

        <img id='profile-pic' src={Landscape3} alt='Ansh Roy'/>
        <h3></h3>
        <h3></h3>

        <footer>
          <h2 className='where-i-go'>Software Engineer</h2>
          <h2 className='where-i-go'>Visa</h2>
          <h2 className='where-i-go'>Computer Engineering @ UIUC 2021</h2>
          <h3></h3>
          <h3></h3>
          <ul id='logos-flexbox'>
            <li className='logos-flexbox-item'>
              <a href='https://www.linkedin.com/in/anshroy2/' target='_blank' rel='noopener noreferrer'>
                <img className='Social' alt='Linkedin' src='https://i.imgur.com/za6EkVH.png' />
              </a>
            </li>

            <li className='logos-flexbox-item'>
              <a href='https://github.com/anshroy2/' target='_blank' rel='noopener noreferrer'>
                <img className='Social' alt='GitHub' src='https://pngimg.com/uploads/github/github_PNG45.png' />
              </a>
            </li>
            <li className='logos-flexbox-item'>
              <a href='mailto:anshroytwo@gmail.com'>
                <img className='Social' alt='Mail To' src='https://banner2.cleanpng.com/20180604/pqv/kisspng-airrotec-microsoft-powerpoint-pretty-good-privacy-mail-icon-5b15795e538135.1746331615281339823421.jpg' />
              </a>
            </li>
          </ul>
          <h3></h3>
        </footer>
      </div>

    )
  }
}

export default Home
