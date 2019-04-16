import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/github.markdown.css'

export default class PostContainer extends Component {
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
    return (
      <article className="markdown-body" dangerouslySetInnerHTML={{ __html: html }}  >
      </article>
    )
  }
}
