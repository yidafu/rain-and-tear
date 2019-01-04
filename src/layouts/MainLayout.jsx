import React, { Component, Fragment } from 'react'
import { Container, Row, Col} from 'react-bootstrap'

import NavBar from '../components/NavBar'
import LeftSide from '../components/LeftSide'
import FooterContent from '../components/FooterContent'

// @ref https://material-ui.com/customization/css-in-js/#creategenerateclassname-options-class-name-generator
const mainStyles = {
  bgc: {
    backgroundColor: '#e5e5e5'
  },
  footerBgc: '',
}

class MainLayout extends Component {
  static dispalyName = 'MainLayout'
  static propTypes = {
    // classes: PropTypes.object.isRequired
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
            <Col md={3} sm={3}>
              <LeftSide />
            </Col>
            <Col md={9}  sm={9}>
              {children}
            </Col>
          </Row>

        </Container>
        <FooterContent style={mainStyles.footerBgc} />
      </Fragment>
    )
  }
}

export default MainLayout

