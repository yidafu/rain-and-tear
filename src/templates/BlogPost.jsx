import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import {Row} from 'react-bootstrap'
import PostLayout from '../layouts/PostLayout'
import PostHeader from '../components/PostHeader'
import PostBody from '../components/PostBody'
import PreOrNext from '../components/PreOrNext'

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
        <PostHeader
          title={post.frontmatter.title}
        />
        <PostBody
          html={post.html}
        />
        <Row>
          <PreOrNext disabled={pre == ''} pre href={pre} />
          <PreOrNext disabled={next == ''} next href={next} />
        </Row>
      </PostLayout>
      
    )
  }
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default BlogPost