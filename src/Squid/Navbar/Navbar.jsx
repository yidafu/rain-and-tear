import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import makePrefix from '../Utils/makePrefix'

export default class Navbar extends Component {
  static propTypes = {
  }

  render() {
    const { className, prefix, theme, children } = this.props
    const prefixCls = makePrefix('navbar', prefix)
    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-theme`]: theme,
    })
    const [brand, ...items] = children
    return (
      <header>
        <div  className={classes}>
          <div>
            {brand}
          </div>
          <nav>
            {items}
          </nav>
        </div>
      </header>
    )
  }
}
