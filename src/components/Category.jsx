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
    let categories = Array.from(new Set(edges.map( edge => edge.node.fields.category)))
    return (
      <ul>
        {categories.map((category, idx) => {
          let hex = str2Color(category)
          return (
            <Link to={`/categories/${category}`}  key={idx}>
              <p style={{backgroundColor: hex}}>{category}</p>
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
            allMarkdownRemark(filter: {fields: {category: {ne: "Null"}}}) {
              totalCount
              edges {
                node {
                  fields {
                    category
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