import React, { Component } from 'react'

import Tags from './Tags'
import Category from './Category'
import Archives from './Archives'

function Tab(props) {
  return props.children
} 

export default class Logo extends Component {
  static displayName = 'LeftSide'
  
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
  }
  handleChange = (event, value) => {
    // do nothing
  }
  render() {
    const { value } = this.state
    return (
      <div>
        {/* 使用 Tabs 不够好 */}

        <p>Categories</p>
        <Category />
 
        <p>Archives</p>
        <Archives />

        <p>Tags</p>
        { value === 0 &&  <Tags/> }

      </div>
    )
  }
}
