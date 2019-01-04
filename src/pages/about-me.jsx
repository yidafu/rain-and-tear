import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import MainLayout from '../layouts/MainLayout'

const styles = {
  content: {
    minHeight: '1000px',
    padding: '30px 100px'
  },
  todo: {
    padding: '30px',
    textAlign: 'center'
  }
}

export default class AboutMe extends Component {
  static displayName = 'Drink'

  static propTypes = {
    classes: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <MainLayout>
        <div
          style={styles.content}
        >
          <div>
            <p>
              施工中 ... ...
            </p>
          </div>
        </div>
      </MainLayout>
    )
  }
}