import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import MainPagination from '@/templates/MainPagination'

class Index extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired 
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    
    const {data} = this.props
    const pageContext = {
      group: data.allMarkdownRemark.edges,
      first: true,
      last: false,
      index: 1,
      PageCount: 10,
      additionalContext: {
        totalCount: data.allMarkdownRemark.totalCount
      }
    }
    return (
      <div 
        // tags={data.customTagsNode.tags || []}
      >
        <MainPagination 
          pageContext={pageContext}
        />
      </div>
    )
  }
}

// @NOTE http://es6.ruanyifeng.com/#docs/string#标签模板
export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date],
        order: DESC
      }
      filter: {
        fields: {
          category: {
            ne: "Null"
          }
        }
      }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
            category
          }
          excerpt
        }
      }
    }
  }
`

export default Index