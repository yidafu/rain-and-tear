import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql} from 'gatsby'
import {Badge} from 'react-bootstrap'

class Tags extends Component {
  static dislayName = 'templates'

  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props)

    this.state = {}
  }
  renderTags (tags) {
    
    const badgeTypeList = ['info', 'success', 'warning', 'danger', 'rose']
    return (
      <div>
        {tags.map((tag, idx) => {
          // TODO 改进随机算法
          let tagsTypeIndex = parseInt(Math.random() * badgeTypeList.length)
          return (
            <Link to={`/tags/${tag}`} key={idx}>
              <Badge color={badgeTypeList[tagsTypeIndex]} >
                {tag}
              </Badge>
            </Link>
          )
        })}
      </div>
    )
  }
  render() {
    
    return (
      <StaticQuery
        query={graphql`
          query {
            customTagsNode {
              tags
            }
          }
        `}
        render={ data => this.renderTags(data.customTagsNode.tags) }
      />
    )
  }
}



export default Tags