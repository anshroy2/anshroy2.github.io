import React, {Component} from 'react';
import {  BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';


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


import logo from './logo.svg';
import './App.css';

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
        <div>
          <Navbar color="inverse" light expand="md">
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
                          <NavLink href="https://www.youtube.com/watch?v=CBggjyE9P_8">Timelapse</NavLink>
                      </NavItem>
                  </Nav>
              </Collapse>
          </Navbar>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/projects' component={Projects} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
