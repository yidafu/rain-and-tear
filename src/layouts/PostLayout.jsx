import React, { Component, Fragment } from 'react'
import { Container, Row, Col} from 'react-bootstrap'

import NavBar from '@/components/NavBar'
import LeftSide from '@/components/LeftSide'
import FooterContent from '@/components/FooterContent'

const mainStyles = {
  bgc: {
    backgroundColor: '#e5e5e5'
  },
  footerBgc: '',
}

export default class PostLayout extends Component {
  static dispalyName = 'PostLayout'
  static propTypes = {
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { children  } = this.props
    
    return (
      <Fragment>
        <NavBar />

        <Container> 

          <Row>
            <Col lg={{span: 8, offset: 2}}>
              {children}
            </Col>
          </Row>

        </Container>
        <FooterContent style={mainStyles.footerBgc} />
      </Fragment>
    )
  }
}
