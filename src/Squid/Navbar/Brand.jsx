import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import makePrefix from '../Utils/makePrefix'

export default class Brand extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    children: PropTypes.node,
    className: PropTypes.string,
    prefix: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
  }
  static defaultProps = {
    as: 'a',
    type: 'default',
    size: 'md',
  }

  render() {
    const { as, children, className, prefix, type, size, ...restProps } = this.props
    const prefixCls = makePrefix('navbar-brand', prefix)
    const classes = classNames(prefixCls, className,{
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${size}`]: size,
    })
    const Component = as || 'button'
    return (
      <Component className={classes} {...restProps}>
        {children}
      </Component>
    )
  }
}
