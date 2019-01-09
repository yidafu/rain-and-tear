import React, { Component } from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
// import {Button, Navbar, Nav} from 'react-bootstrap'
import Navbar from 'squid/Navbar'

const {Brand, Item} = Navbar

class NavBar extends Component {
  static displayName = 'NavBar'

  static propTypes = { 
  }

  render() {
    return (
      <Navbar>
        <Brand as={Link} to="/">付达意的博客</Brand>
        
        <Item as={Link} to="/">Home</Item>
        <Item as={Link} to="/about-me">AboutMe</Item>
        <Item as={Link} to="/drink">Drink?</Item>
      </Navbar>
    )
  }
}

export default NavBar