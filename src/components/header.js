import React from 'react'

import Footer from './footer'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <h1><strong>I'm Steve!</strong>, a passionate<br />
          developer from Australia<br />
          who loves all things API.</h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header