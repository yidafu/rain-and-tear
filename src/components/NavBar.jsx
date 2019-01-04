import React, { Component } from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import {Button, Navbar, Nav} from 'react-bootstrap'

class NavBar extends Component {
  static displayName = 'NavBar'

  static propTypes = { 
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">付达意的博客</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about-me">AboutMe</Nav.Link>
            <Nav.Link href="/drink">Drink?</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar