import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PostHander extends Component {
  static dislayName = 'post-header'

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  static defaultProps = {
    title: '无题'
  }

  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    const {title} = this.props
    return (
      <h1 style={styles.header}>{title}</h1>
    )
  }
}

const styles = {
  header: {
    textAlign: 'center',
    fontSize: '40px'
  }
}