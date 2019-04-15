import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql} from 'gatsby'

import str2Color from '@/utils/str2Color'

class Category extends Component {
  static dislayName = 'templates'

  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props)

    this.state = {}
  }
  renderTags (edges) {
    // 数组去重
    let archives = Array.from(
      new Set(
        edges.map( edge => {
          let postCreatedAt = new Date(edge.node.frontmatter.date)
          return postCreatedAt.getFullYear() + '/' + postCreatedAt.getMonth()
        })
      )
    )
    return (
      <ul>
        {archives.map((archive, idx) => {
          let hex = str2Color(archive)
          return (
            <Link to={`/archives/${archive}`}  key={idx}>
              <p style={{backgroundColor: hex, padding: 8, borderRadius: 2}}>{archive}</p>
            </Link>
          )
        })}
      </ul>
    )
  }
  render() {
    
    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              sort: {fields: [frontmatter___date], order: DESC}, 
              filter: {fields: {category: {ne: "Null"}}}
            ) {
              totalCount
              edges {
                node {
                  frontmatter {
                    date
                  }
                }
              }
            }
          }
        `}
        render={ data => this.renderTags(data.allMarkdownRemark.edges) }
      />
    )
  }
}



export default Category