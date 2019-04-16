import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import {Card} from 'react-bootstrap'

export default class ArticleItem extends Component {
  static dispalyName = 'ArticleItem'
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { title, content, to } = this.props
    return (
      <div>
        <div>
          <h1>
            <Link to={to}> {title} </Link>
          </h1>
          <p>
            {content}
          </p>
        </div>
      </div>
    )
  }
}
