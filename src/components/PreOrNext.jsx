import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import {Button} from 'react-bootstrap'
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
})


class PreOrNext extends Component {
  static displayname = 'PreOrNext'
  static propTypes = {
    next: PropTypes.bool,
    pre: PropTypes.bool,
    classes: PropTypes.object,
    disabled: PropTypes.bool,
    href: PropTypes.string.isRequired
  }
  static defaultProps = {
    disabled: false,
    href: '#'
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { next, pre, disabled, href} = this.props
    return (
      <Button 
        variant="contained" 
        color="default"
        disabled={disabled}
      >
        {/* FIXME 这里涉及相对路径和绝对路径问题 */}
        <Link to={href}>
          {pre && '<PRE'}
          {next && 'NEXT>'}
        </Link>
      </Button> 
    )
  }
}

export default PreOrNext