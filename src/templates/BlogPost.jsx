import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Row } from 'react-bootstrap'
import PostLayout from '../layouts/PostLayout'
import PostHeader from '../components/PostHeader'
import PostContainer from '../components/PostContainer'
import PreOrNext from '../components/PreOrNext'
import { Helmet } from 'react-helmet'
import {author} from '../../config'
class BlogPost extends Component {
  static displayname = 'BlogPost'
  static propTypes = { 
    data: PropTypes.object.isRequired,
    pageContext: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const {data, pageContext } = this.props
    const { pre, next } = pageContext
    const post = data.markdownRemark
    
    return (
      <PostLayout>
        <Helmet>
          <title>{post.frontmatter.title}</title>
          <mete name="author" content={author} />
          <meta name="description" content={post.excerpt} />
          <meta name="keywords" content={post.frontmatter.tags.join(',')}></meta>
        </Helmet>
        <PostHeader
          title={post.frontmatter.title}
        />
        <PostContainer
          html={post.html}
        />
        <div style={{display: 'flex', justifyContent: 'space-between', padding: 10}}>
          <PreOrNext disabled={pre == ''} pre href={pre} />
          <PreOrNext disabled={next == ''} next href={next} />
        </div>
      </PostLayout>
      
    )
  }
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        tags
      }
      excerpt
    }
  }
`

export default BlogPost