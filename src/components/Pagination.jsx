
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RcPagination from 'rc-pagination'
import {Row, Col} from 'react-bootstrap'
import 'rc-pagination/dist/rc-pagination.css'
import { Link } from 'gatsby'

export default class Pagination extends Component {
  static displayName = 'Pagination'
  static propTypes = {
    total: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired
  }
  constructor(props) {
    super(props)

    this.state = {}
  }
  renderPaginationItem = (current) => {
    return <Link to={'/posts/' + (current == 1 ? '' : current)}>{current}</Link>
  }
  render() {
    return (
      <Row>
        <Col md={{offset: 8}}>
          <RcPagination
            {...this.props}
            itemRender={this.renderPaginationItem}
          />
        </Col>
      </Row>
    )
  }
}
