import React, { Component } from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
// import {Button, Navbar, Nav} from 'react-bootstrap'
import Navbar from 'squid/Navbar'

const {Brand, Item} = Navbar

class NavBar extends Component {
  static displayName = 'Navbar'

  static propTypes = { 
  }

  render() {
    return (
      <Navbar>
        <Brand as={Link} to="/">付达意的博客</Brand>
        
        {/* <Item as={Link} to="/posts">Post</Item> */}
        <Item href="https://github.com/yidafu">Github</Item>
        {/* <Item as={Link} to="/drink">Drink?</Item> */}
      </Navbar>
    )
  }
}

export default NavBar