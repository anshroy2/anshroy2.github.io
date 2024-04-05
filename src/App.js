import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/JS/Home'
import About from './components/JS/About'
import Projects from './components/JS/Projects'

import './App.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

class App extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <Router>
        <div className='Website-background'>
          <Navbar className='navbar-color' dark expand='md'>
            <NavbarBrand href='/'>Ansh Roy</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink href='/about/'>About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/projects/'>Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='https://drive.google.com/file/d/1HlM0QvvibdFMoyQKqRwrDOJE-2YuWuzk/view?usp=sharing'>Resume</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/projects' element={<Projects/>} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App
