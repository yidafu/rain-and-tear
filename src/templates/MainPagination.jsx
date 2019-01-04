import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MainLayout from '@/layouts/MainLayout'
import ArticleItem from '@/components/ArticleItem'
import Pagination from '@/components/Pagination'


export default class MainPagination extends Component {
  static displayname = 'MainPagination'
  static propTypes = {
    pathContext: PropTypes.shape({
      group: PropTypes.array.isRequired,
      index: PropTypes.number.isRequired,
      first: PropTypes.bool.isRequired,
      last: PropTypes.bool.isRequired,
      additionalContext: PropTypes.object.isRequired
    })
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleChange = (idx) => {
    console.log(idx)
  } 
  render() {
    const { pageContext, data } = this.props 
    
    const { group, index, first, last, pageCount, additionalContext } = pageContext
    return (
      <MainLayout >
        <div style={styles.content}>
          {group.map(({ node }) => {
            return (
              <ArticleItem
                key={node.id}
                to={node.fields.slug}
                title={node.frontmatter.title}
                content={node.excerpt}
                hideOnSinglePage={true}
              />
            )
          })}
        </div>
        <Pagination
          total={additionalContext.totalCount}
          pageSize={10}
          current={index}
          onChange={this.handleChange}
        />
      </MainLayout>
    )
  }
}

const styles = {
  content: {
    minHeight: '1000px',
    padding: '20px'
  }
}
