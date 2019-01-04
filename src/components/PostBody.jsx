import React, { Component } from 'react'
import PropTypes from 'prop-types'

import str2CodeBlack from '../utils/Str2Codeblock'

import 'prismjs/themes/prism-tomorrow.css'

export default class Template extends Component {
  static dislayName = 'templates'

  static propTypes = {
    html: PropTypes.string.isRequired
  }

  static defaultProps = {}

  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    let { html } = this.props
    html = str2CodeBlack(html)
    return (
      <div dangerouslySetInnerHTML={{ __html: html }}  >
      </div>
    )
  }
}
