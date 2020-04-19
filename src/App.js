import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/JS/Home';
import About from './components/JS/About';
import Projects from './components/JS/Projects';
import Resume from './components/JS/Resume';

import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
        <div className="Website-background">
          <Navbar className="navbar-color" dark expand="md">
            <NavbarBrand href="/">Ansh Roy</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/about/">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/projects/">Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Resume/">Resume</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.youtube.com/watch?v=CBggjyE9P_8">Timelapse</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <br />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/resume' component={Resume}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
