import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Item extends Component {
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
    prefix: 'pomelo',
    type: 'default',
    size: 'md',
  }

  render() {
    const { as, children, className, prefix, type, size, ...restProps } = this.props
    const classes = classNames(prefix, className, {
      [`${prefix}-${type}`]: type,
      [`${prefix}-${size}`]: size,
    })
    const Component = as || 'button'
    return (
      <Component className={classes} {...restProps}>
        {children}
      </Component>
    )
  }
}
