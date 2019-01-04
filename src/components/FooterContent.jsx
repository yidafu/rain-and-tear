import React, { Component } from 'react'
const styles = {
  footerCenter: {
    textAlign: 'center',
    paddingTop: '20px',
    backgroundColor: '#f8f9fa',
  }
}


class FooterContent extends Component {
  static displayName = 'FooterContent'

  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div style={styles.footerCenter}>
        <p style={{ color: '#999' }}>
          © 2017-2018 付达意 版权所有 维护者：@Dov Yih 如有问题随时联系！
          <br />
          Power By&nbsp;
          <a href="https://www.gatsbyjs.org/">Gatsy</a>&nbsp;
          & &nbsp;
          <a href="https://material-ui.com/">Material-UI</a>&nbsp;
        </p>
      </div>
    )
  }
}

export default FooterContent
