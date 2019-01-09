import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import makePrefix from '../Utils/makePrefix'

export default class Navbar extends Component {
  static propTypes = {
  }

  render() {
    const { className, prefix, theme } = this.props
    const prefixCls = makePrefix('navbar', prefix)
    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-theme`]: theme,
    })
    return (
      <nav className={classes}>
        {this.props.children}
      </nav>
    )
  }
}
